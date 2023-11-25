import React from 'react';
import { TbSearch } from 'react-icons/tb';

export default function SearchBar() {
  return (
    <div className="flex">
      <input
        className="text-black text-sm md:text-base font-medium rounded-l-md w-48 sm:w-64 md:w-72 lg:w-96 xl:w-[420px] pl-2 md:pl-3 focus:outline-none placeholder:text-xs placeholder:md:text-sm"
        type="text"
        placeholder="O que você está procurando ? "
      />
      <button className="bg-[#febd69] p-1 md:px-2 lg:px-4 lg:py-2 rounded-r-md">
        <TbSearch className=" h-4 w-4 md:h-5 md:w-4" />
      </button>
    </div>
  );
}
