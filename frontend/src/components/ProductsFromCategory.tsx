'use client';
import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Product } from '@/types/product';
import ProductList from './ProductList';
import { getProductsFromCategorySlug } from '@/lib/sanity/queries';
import ProductSortBar from './ProductSortBar';
import Spinner from './Spinner';

interface ProductsFromCategoryProps {
  categorySlug: string;
}

export default function ProductsFromCategory({ categorySlug }: ProductsFromCategoryProps) {
  const [queryIndex, setQueryIndex] = useState(0);
  const selectOptions = ['Preço, menor para maior', 'Preço, maior para menor'];
  const queryOptions = ['&sort[0]=promotionalPrice:asc', '&sort[0]=promotionalPrice:desc'];

  const { data, isLoading } = useQuery({
    queryKey: ['products-from-category', categorySlug],
    queryFn: () => getProductsFromCategorySlug(categorySlug),
    staleTime: 1000 * 60 * 5,
    cacheTime: 1000 * 60 * 5,
    enabled: !!categorySlug
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
