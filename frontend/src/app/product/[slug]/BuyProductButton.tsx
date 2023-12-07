'use client';
import React from 'react';
import Link from 'next/link';
import { useCartStore } from '@/store/cart';
import { ProductWithCategory } from '@/types/product';

interface AddToCartButton {
  product: ProductWithCategory;
}

export default function AddToCartButton({ product }: AddToCartButton) {
  const { addProduct } = useCartStore();

  return (
    <Link
      href={'/cart'}
      onClick={() => addProduct(product)}
      className="bg-[#232F3E] text-white px-4 py-2 rounded-l-full rounded-r-full w-min mt-8 hover:bg-[#232F3E]/95"
    >
      COMPRAR
    </Link>
  );
}
