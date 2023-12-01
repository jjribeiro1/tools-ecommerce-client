import React from 'react';

interface CartSummaryProps {
  totalProductsQuantity: number;
  totalPrice: number;
}

export default function CartSummary({ totalProductsQuantity, totalPrice }: CartSummaryProps) {
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

      <button className="bg-slate-900 text-gray-100 mt-4 rounded-lg py-2 hover:bg-slate-900/95">
        Continuar
      </button>
    </div>
  );
}
