import React from 'react';
import Logo from './Logo';
import NavigationBar from '../NavigationBar';
import { SlHeart } from 'react-icons/sl';
import { IoPersonOutline } from 'react-icons/io5';
import { BsCart3 } from 'react-icons/bs';
import SearchBar from '../SearchBar';

async function getCategories() {  
  const response = await fetch(`${process.env.API_URL}/categories?fields[0]=name`);
  const categories = await response.json();
  return categories.data
}

export default async function Header() {
  const categories = await getCategories();

  return (
    <header className="bg-header-bg w-100%">
      <div className="border-b border-b-[#3b4149]">
        <h1 className="text-white text-center text-xs sm:text-sm py-2">Frete grátis para todo o Brasil</h1>
      </div>

      <div className="flex items-center justify-evenly md:py-2 md:px-3">
        <Logo />
        <SearchBar />

        <div className="flex items-center md:gap-x-4 lg:gap-x-8">
          <button className="text-white flex items-center gap-x-1 cursor-pointer">
            <SlHeart className="text-white md:h-7 md:w-7" />
            <div className="md:text-xs lg:text-sm flex flex-col justify-center items-center">
              <span>Meus</span>
              <span>Favoritos</span>
            </div>
          </button>

          <button className="text-white flex items-center gap-x-1 cursor-pointer">
            <IoPersonOutline className="text-white md:h-7 md:w-7" />
            <div className="md:text-xs lg:text-sm flex flex-col justify-center items-center">
              <span>Entre ou</span>
              <span>Cadastre-se</span>
            </div>
          </button>

          <button className="cursor-pointer">
            <BsCart3 className="text-[#febd69] md:h-7 md:w-7" />
          </button>
        </div>
      </div>

      <NavigationBar categories={categories}/>
    </header>
  );
}
