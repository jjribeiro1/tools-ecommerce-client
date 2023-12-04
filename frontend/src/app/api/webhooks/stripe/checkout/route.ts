import { NextRequest, NextResponse } from 'next/server';
import db from '@/db';
import { stripe, StripeEvent, Address } from '@/lib/stripe';

export async function POST(request: NextRequest) {
  const secret = process.env.STRIPE_CHECKOUT_WEBHOOK_SECRET;

  if (!secret) {
    return NextResponse.json('missing webhook secret', { status: 400 });
  }

  const payload = await request.text();
  const signature = request.headers.get('Stripe-Signature');

  let event: StripeEvent;

  try {
    event = stripe.webhooks.constructEvent(payload, signature!, secret);
  } catch (err) {
    return NextResponse.json({ message: 'Webhook signature verification failed', reason: err });
  }

  try {
    if (event.type === 'checkout.session.completed') {
      const metadada = event.data.object.metadata;
      const { line1, line2, city, state, country, postal_code } = event.data.object.shipping_details
        ?.address as Address;
      const formattedAdress = `${line1}, ${line2}, ${city}, ${state}, ${country}, ${postal_code}`;

      await db.order.update({
        where: {
          id: metadada?.orderId as string,
        },
        data: {
          isPaid: true,
          address: formattedAdress,
        },
      });

      return NextResponse.json({ eventData: event }, { status: 200 });
    }
  } catch (error) {
    return NextResponse.json({ message: 'Internal database error' }, { status: 500 });
  }

  return NextResponse.json({ message: 'Invalid event' }, { status: 400 });
}
