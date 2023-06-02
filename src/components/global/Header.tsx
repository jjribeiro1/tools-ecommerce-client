import React from 'react';
import Logo from './Logo';
import { SlHeart } from 'react-icons/sl';
import { IoPersonOutline } from 'react-icons/io5';
import { BsCart3 } from 'react-icons/bs';
import { TbSearch } from 'react-icons/tb';

export default function Header() {
  return (
    <header className="bg-header-bg w-100%">
      <div className="border-b border-b-[#3b4149]">
        <h1 className="text-white text-center text-xs sm:text-sm py-2">Frete grátis para todo o Brasil</h1>
      </div>

      <div className="flex items-center justify-evenly md:py-2 md:px-3">
        <Logo />

        <div className="flex">
          <input
            className="text-black font-medium rounded-l-md md:w-72 lg:w-96 md:pl-3 focus:outline-none placeholder:text-sm"
            type="text"
            placeholder="O que você está procurando ? "
          />
          <button className="bg-[#febd69] md:px-4 md:py-2 rounded-r-md">
            <TbSearch className="md:h-5 md:w-4" />
          </button>
        </div>

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
    </header>
  );
}
