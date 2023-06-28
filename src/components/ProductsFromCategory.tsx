'use client';
import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Product } from '@/types/product';
import ProductList from './ProductList';
import ProductSortBar from './ProductSortBar';

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

  const { data } = useQuery({
    queryKey: [`productsFromCategory${categoryId}${queryOptions[queryIndex]}`],
    queryFn: getProductsFromCategory,
    refetchOnWindowFocus: false,
    retry: false,
  });

  return (
    <div className="flex flex-col gap-4 ">
      <ProductSortBar selectOptions={selectOptions} queryIndex={queryIndex} setQueryIndex={setQueryIndex} />
      <ProductList products={data as Product[]} />
    </div>
  );
}
