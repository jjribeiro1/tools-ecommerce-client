import React from 'react';
import { Listbox } from '@headlessui/react';
import { TbChevronDown } from 'react-icons/tb';

interface ProductSortBarProps {
  selectOptions: String[];
  queryIndex: number;
  setQueryIndex: (value: number) => void;
}

export default function ProductSortBar({ selectOptions, queryIndex, setQueryIndex }: ProductSortBarProps) {

  return (
    <div className="bg-white flex items-center py-2 pl-2 rounded-md">
      <p className="text-xs sm:text-sm md:text-base mr-5">Ordernar por:</p>

      <Listbox value={queryIndex} onChange={setQueryIndex}>
        <div className="relative">
          <Listbox.Button className="bg-[#f7f7f7] flex items-center p-1 sm:p-2 rounded-md shadow-sm focus:outline-none">
            <span className="text-[#777777] text-sm">{selectOptions[queryIndex]}</span>
            <TbChevronDown className="ml-5" />
          </Listbox.Button>

          <Listbox.Options className="absolute z-50 bg-[#f7f7f7] w-full max-w-full">
            {selectOptions.map((option, i) => (
              <Listbox.Option
                key={i}
                value={i}
                className="text-[#777777] text-sm px-2 py-1 hover:text-white hover:bg-blue-400/95 cursor-default"
              >
                {option}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </div>
      </Listbox>
    </div>
  );
}
