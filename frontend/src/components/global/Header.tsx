import React from 'react';
import { UserButton } from '@clerk/nextjs';
import Logo from './Logo';
import { SlHeart } from 'react-icons/sl';
import { BsCart3 } from 'react-icons/bs';
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
          <UserButton afterSignOutUrl="/" />
          <button className="cursor-pointer">
            <BsCart3 className="text-[#febd69] md:h-7 md:w-7" />
          </button>
        </div>
      </div>

      <NavigationBar categories={categories} />
    </header>
  );
}
