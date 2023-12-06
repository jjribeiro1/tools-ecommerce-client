'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { BsCart3 } from 'react-icons/bs';
import { useCartStore } from '@/app/store/cart';

export default function CartBadge() {
  const [isMounted, setIsMounted] = useState(false);
  const { items } = useCartStore();
  const cartItemsQuantity = items.reduce((acc, value) => {
    return acc + value.quantity;
  }, 0);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <Link href={'/cart'} className="relative">
      <BsCart3 className="text-[#febd69] h-5 w-5 md:h-7 md:w-7" />
      <span className="bg-red-500 text-white absolute -top-1 -right-2 h-4 w-4 flex items-center justify-center rounded-full text-xs">
        {cartItemsQuantity}
      </span>
    </Link>
  );
}
