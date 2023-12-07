'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { FaPlus } from 'react-icons/fa6';
import { FaMinus } from 'react-icons/fa6';
import CartSummary from './CartSummary';
import EmptyCart from './EmptyCart';
import { useCartStore } from '@/store/cart';
import { urlFor } from '@/lib/sanity';

export default function CartPage() {
  const [isMounted, setIsMounted] = useState(false);
  const cartItems = useCartStore((state) => state.items);
  const increaseProductQuantity = useCartStore((state) => state.increaseProductQuantity);
  const decreaseProductQuantity = useCartStore((state) => state.decreaseProductQuantity);
  const removeProductFromCart = useCartStore((state) => state.removeProduct);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <main className="min-h-screen w-full">
      <section className="container my-0 mx-auto p-4 flex flex-col gap-4">
        {cartItems.length > 0 ? (
          <>
            <h1 className="text-2xl text-gray-900 font-bold">Meu carrinho</h1>
            <div className="flex flex-col gap-8 w-full sm:gap-4 md:flex-row md:justify-between">
              <ul className="flex flex-col gap-8 w-full md:w-[75%]">
                {cartItems.map((item) => (
                  <li key={item.product._id}>
                    <div className="grid grid-cols-3 gap-4 sm:gap-0 border rounded-lg p-1 sm:p-2">
                      <div className="flex gap-2 col-span-3 sm:col-span-1">
                        <Image
                          src={urlFor(item.product.images[0]).url()}
                          alt={`Imagem do produto ${item.product.name}`}
                          width={100}
                          height={100}
                        />
                        <h2 className="text-gray-600 text-xs sm:text-sm font-semibold pt-2">{item.product.name}</h2>
                      </div>

                      <div className="text-xs sm:text-sm sm:justify-self-center flex flex-col items-center gap-2">
                        <p>Quantidade</p>

                        <div className="grid grid-cols-3 place-items-center gap-0.5 sm:gap-2">
                          <button
                            onClick={() => decreaseProductQuantity(item)}
                            type="button"
                            className="p-1 rounded transition-colors duration-200 cursor-pointer hover:bg-neutral-200"
                            aria-label={`diminuir quantidade do produto ${item.product.name}`}
                          >
                            <FaMinus className="text-slate-800" />
                          </button>
                          <span className="font-semibold">{item.quantity}</span>
                          <button
                            onClick={() => increaseProductQuantity(item)}
                            type="button"
                            className="p-1 rounded transition-colors duration-200 cursor-pointer hover:bg-neutral-200"
                            aria-label={`aumentar quantidade do produto ${item.product.name}`}
                          >
                            <FaPlus className="text-slate-800" />
                          </button>
                        </div>

                        <button
                          onClick={() => removeProductFromCart(item.product._id)}
                          type="button"
                          className="text-red-600 text-sm px-2 cursor-pointer"
                          aria-label={`remove o produto ${item.product.name} do carrinho`}
                        >
                          remover
                        </button>
                      </div>

                      <div className="text-xs sm:text-sm sm:justify-self-center flex flex-col items-center gap-2">
                        <p>Preço</p>
                        <span className="font-semibold">
                          R$ {(item.product.price * item.quantity).toFixed(2)}
                        </span>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
              <CartSummary cartItems={cartItems} />
            </div>
          </>
        ) : (
          <EmptyCart />
        )}
      </section>
    </main>
  );
}
