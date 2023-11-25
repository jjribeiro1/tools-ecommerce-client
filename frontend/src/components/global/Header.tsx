import React from 'react';
import Logo from './Logo';
import NavigationBar from '../NavigationBar';
import SearchBar from '../SearchBar';
import { SlHeart } from 'react-icons/sl';
import { IoPersonOutline } from 'react-icons/io5';
import { BsCart3 } from 'react-icons/bs';
import { CategoriesFetchResponse } from '@/types/category';

async function getCategories(): Promise<CategoriesFetchResponse> {
  const response = await fetch(`${process.env.API_URL}/categories?fields[0]=name`);
  const categories = response.json();
  return categories
}

export default async function Header() {
  const categories = await getCategories();  

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

          <button className="text-white flex items-center gap-x-1 cursor-pointer">
            <IoPersonOutline className="text-white h-4 w-4 md:h-7 md:w-7" />
            <div className="text-[10px] md:text-xs lg:text-sm flex flex-col justify-center items-center">
              <span>olá, faça seu login</span>
            </div>
          </button>

          <button className="cursor-pointer">
            <BsCart3 className="text-[#febd69] md:h-7 md:w-7" />
          </button>
        </div>
      </div>

      <NavigationBar categories={categories} />
    </header>
  );
}
