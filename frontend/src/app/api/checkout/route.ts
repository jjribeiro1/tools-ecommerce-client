import { NextRequest, NextResponse } from 'next/server';
import { revalidatePath } from 'next/cache';
import db from '@/db';
import { auth } from '@clerk/nextjs';
import { stripe } from '@/lib/stripe';
import { urlFor } from '@/lib/sanity';
import { fetchProductsInfoToValidate } from '@/lib/sanity/queries';
import { CartStoreItem } from '@/store/cart';

export async function POST(req: NextRequest) {
  const originUrl = req.nextUrl.origin;
  const body: CartStoreItem[] = await req.json();
  const { userId } = auth();

  try {
    const productsFromSanity = await Promise.all(
      body.map(({ product }) => fetchProductsInfoToValidate(product._id))
    );
    const invalidData = productsFromSanity.some(
      (result, i) => result._id !== body[i].product._id || result.price !== body[i].product.price
    );

    if (invalidData) {
      return NextResponse.json(
        { message: 'Dados inválidos, não foi possível prosseguir para o checkout' },
        { status: 400 }
      );
    }
  } catch (error) {
    return NextResponse.json({ message: 'Não foi possível prosseguir para o checkout', reason: error });
  }

  try {
    const order = await db.order.create({
      data: {
        address: '',
        externalUserId: userId!,
        isPaid: false,
        orderItems: body.map(({ product, quantity }) => ({
          productExternalId: product._id,
          productName: product.name,
          price: product.discountIsActive ? product.promotionalPrice : product.price,
          quantity,
        })),
      },
    });

    revalidatePath('/orders', 'page');

    const formattedProductsToStripe = body.map(({ product, quantity }) => ({
      _id: product._id,
      name: product.name,
      price: product.discountIsActive
        ? Math.round(Number(product.promotionalPrice * 100))
        : Math.round(Number(product.price * 100)),
      quantity,
      image: urlFor(product.images[0]).url(),
    }));

    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      currency: 'brl',
      locale: 'pt-BR',
      payment_method_types: ['card'],
      shipping_address_collection: {
        allowed_countries: ['BR'],
      },
      after_expiration: {
        recovery: {
          enabled: true,
        },
      },
      metadata: {
        orderId: order.id,
      },
      success_url: `${originUrl}/orders`,
      cancel_url: `${originUrl}/cart/?canceled=true`,

      line_items: formattedProductsToStripe.map((product) => ({
        price_data: {
          currency: 'brl',
          product_data: {
            name: product.name,
            images: [product.image],
          },
          unit_amount: product.price,
        },
        quantity: product.quantity,
      })),
    });

    return NextResponse.json({ checkoutUrl: session.url });
  } catch (error) {
    return NextResponse.json({ message: 'Erro no servidor', reason: error }, { status: 500 });
  }
}
