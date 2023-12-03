'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import { CartStoreItem } from '../store/cart';

interface CartSummaryProps {
  cartItems: CartStoreItem[];
}

export default function CartSummary({ cartItems }: CartSummaryProps) {
  const router = useRouter();

  const totalProductsQuantity = cartItems.reduce((acc, item) => {
    return acc + item.quantity;
  }, 0);

  const totalPrice = cartItems.reduce((acc, item) => {
    return acc + item.product.price * item.quantity;
  }, 0);

  const goToCheckout = async () => {
    const response = await fetch('/api/checkout', { method: 'POST', body: JSON.stringify(cartItems) });
    const { checkoutUrl } = await response.json();
    router.push(checkoutUrl);
  };

  return (
    <div className="bg-gray-100 flex flex-col p-4 gap-4 rounded-lg w-[25%]">
      <h3 className="font-semibold">Resumo do pedido</h3>

      <div className="flex justify-between pb-3 border-b border-gray-500">
        <span>Qtd. de Produtos</span>
        <span>{totalProductsQuantity}</span>
      </div>

      <div className="flex justify-between pb-3 border-b border-gray-500">
        <span>Total</span>
        <span>R$ {totalPrice.toFixed(2)}</span>
      </div>

      <button
        onClick={goToCheckout}
        className="bg-slate-900 text-gray-100 mt-4 rounded-lg py-2 hover:bg-slate-900/95"
      >
        Continuar
      </button>
    </div>
  );
}
