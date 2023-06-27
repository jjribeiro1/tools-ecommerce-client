'use client';
import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import ProductCard from './ProductCard';
import { Product } from '@/types/product';
import { Listbox } from '@headlessui/react';
import { TbChevronDown } from 'react-icons/tb';

interface ProductListProps {
  categoryId: number;
}

export default function ProductList({ categoryId }: ProductListProps) {
  const [queryIndex, setQueryIndex] = useState(0);
  const selectOptions = ['Preço, menor para maior', 'Preço, maior para menor'];
  const queryOptions = ['&sort[0]=promotionalPrice:asc', '&sort[0]=promotionalPrice:desc'];

  const getProductsFromCategory = async () => {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/products?populate=*&filters[categories][id][$eq]=${categoryId}${queryOptions[queryIndex]}`
    );
    const products = await response.json();
    return products.data as Product[];
  };

  const { data } = useQuery({
    queryKey: [`productsFromCategory${categoryId}${queryOptions[queryIndex]}`],
    queryFn: getProductsFromCategory,
    refetchOnWindowFocus: false,
    retry: false,
  });

  return (
    <div className="flex flex-col gap-4 ">
      <div className="bg-white flex items-center py-2 pl-2 rounded-md">
        <p className="mr-5">Ordernar por:</p>

        <Listbox value={queryIndex} onChange={setQueryIndex}>
          <div className="relative">
            <Listbox.Button className="bg-[#f7f7f7] flex items-center p-2 rounded-md shadow-sm focus:outline-none">
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

      <ul className="grid grid-cols-3">
        {data?.map((product, i) => (
          <ProductCard key={i} product={product} />
        ))}
      </ul>
    </div>
  );
}
