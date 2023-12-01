import React from 'react';
import Link from 'next/link';
import { BsCart3 } from 'react-icons/bs';

export default function EmptyCart() {
  return (
    <div className="flex flex-col gap-8 self-center items-center pt-20 max-w-lg">
      <BsCart3 className="w-32 h-32 opacity-90" />
      <p className="text-lg sm:text-xl text-center font-semibold">Seu carrinho está vazio</p>
      <p className="text-gray-800 text-lg sm:text-xl text-center">
        Que tal navegar pelas nossas ofertas e achar uma especial para você?
      </p>

      <Link
        href={'/'}
        className="bg-slate-800 text-gray-100 text-lg py-2 px-8 rounded-lg hover:bg-slate-800/95"
      >
        ver produtos
      </Link>
    </div>
  );
}
