import React from 'react';
import Link from 'next/link';
import { SignedIn, SignedOut } from '@clerk/nextjs';
import { HiOutlineUserCircle } from 'react-icons/hi2';
import Logo from './Logo';
import NavigationBar from '../NavigationBar';
import CartBadge from '../CartBadge';
import UserDropdown from '../UserDropdown';
import { getCategoriesOverview } from '@/lib/sanity/queries';

export default async function Header() {
  const categories = await getCategoriesOverview();

  return (
    <header className="bg-header-bg w-100%">
      <div className="border-b border-b-[#3b4149]">
        <h1 className="text-white text-center text-xs sm:text-sm py-2">Frete grátis para todo o Brasil</h1>
      </div>

      <div className="flex items-center justify-between container my-0 mx-auto px-4 py-2">
        <Logo />

        <div className="flex items-center gap-x-4 lg:gap-x-8">
          <CartBadge />

          <SignedIn>
            <UserDropdown/>
          </SignedIn>

          <SignedOut>
            <Link
              href={'/sign-in'}
              className="flex items-center gap-1 text-white cursor-pointer hover:text-gray-300"
            >
              <HiOutlineUserCircle className="hidden sm:block text-white h-5 w-5 md:w-8 md:h-8" />
              <span className="text-xs sm:text-sm">Olá, faça seu login</span>
            </Link>
          </SignedOut>
        </div>
      </div>

      <NavigationBar categories={categories} />
    </header>
  );
}
