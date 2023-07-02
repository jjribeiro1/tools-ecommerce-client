'use client';
import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Product } from '@/types/product';
import ProductList from './ProductList';
import ProductSortBar from './ProductSortBar';
import Spinner from './Spinner';

interface ProductsFromCategoryProps {
  categoryId: number;
}

export default function ProductsFromCategory({ categoryId }: ProductsFromCategoryProps) {
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

  const { data, isLoading } = useQuery({
    queryKey: [`productsFromCategory${categoryId}${queryOptions[queryIndex]}`],
    queryFn: getProductsFromCategory,
    refetchOnWindowFocus: false,
    retry: false,
  });

  return (
    <>
      <ProductSortBar
        selectOptions={selectOptions}
        queryIndex={queryIndex}
        setQueryIndex={setQueryIndex}
        productsCount={data?.length as number}
      />
      {isLoading && (
        <div className="self-center mt-14 h-[684px]">
          <Spinner />
        </div>
      )}

      <ProductList products={data as Product[]} />
    </>
  );
}
