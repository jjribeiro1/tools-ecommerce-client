import React from 'react';
import Link from 'next/link';
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import { HiOutlineUserCircle } from 'react-icons/hi2';
import { SlHeart } from 'react-icons/sl';
import { BsCart3 } from 'react-icons/bs';
import Logo from './Logo';
import NavigationBar from '../NavigationBar';
import SearchBar from '../SearchBar';
import { getCategoriesOverview } from '@/lib/sanity/queries';

export default async function Header() {
  const categories = await getCategoriesOverview();

  return (
    <header className="bg-header-bg w-100%">
      <div className="border-b border-b-[#3b4149]">
        <h1 className="text-white text-center text-xs sm:text-sm py-2">Frete grátis para todo o Brasil</h1>
      </div>

      <div className="flex items-center justify-between md:justify-evenly p-2 md:py-2 md:px-3">
        <Logo />
        <SearchBar />

        <div className="flex items-center gap-x-2 sm:gap-x-4 lg:gap-x-8 mr-4">
          <button className="text-white flex items-center gap-x-1 cursor-pointer">
            <SlHeart className="text-white h-4 w-4 md:h-7 md:w-7" />
            <div className="text-[10px] md:text-xs lg:text-sm flex flex-col justify-center items-center">
              <span className="hidden sm:inline">Meus</span>
              <span className="hidden sm:inline">Favoritos</span>
            </div>
          </button>

          <Link href={'/cart'} className="cursor-pointer">
            <BsCart3 className="text-[#febd69] md:h-7 md:w-7" />
          </Link>

          <SignedIn>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>

          <SignedOut>
            <Link
              href={'/sign-in'}
              className="flex items-center gap-1 text-white text-sm cursor-pointer hover:text-gray-300"
            >
              <HiOutlineUserCircle className="text-white h-5 w-5 md:w-8 md:h-8" />
              Olá faça seu login
            </Link>
          </SignedOut>
        </div>
      </div>

      <NavigationBar categories={categories} />
    </header>
  );
}
