import React from 'react';
import { TbSearch } from 'react-icons/tb';

export default function SearchBar() {
  return (
    <div className="flex">
      <input
        className="text-black font-medium rounded-l-md md:w-72 lg:w-96 xl:w-[420px] md:pl-3 focus:outline-none placeholder:text-sm"
        type="text"
        placeholder="O que você está procurando ? "
      />
      <button className="bg-[#febd69] md:px-4 md:py-2 rounded-r-md">
        <TbSearch className="md:h-5 md:w-4" />
      </button>
    </div>
  );
}
