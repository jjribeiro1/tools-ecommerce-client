'use client';
import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { Product } from '@/types/product';
import ProductList from './ProductList';
import { getProductsFromCategorySlug } from '@/lib/sanity/queries';
import ProductSortBar from './ProductSortBar';
import Spinner from './Spinner';
import { useSearchParams } from 'next/navigation';

interface ProductsFromCategoryProps {
  categorySlug: string;
}

export default function ProductsFromCategory({ categorySlug }: ProductsFromCategoryProps) {
  const searchParams = useSearchParams();
  const priceOrder = searchParams.get('preco') as string;

  const sortOptions = [
    { label: 'Preço, menor para maior', name: 'preco', value: 'asc' },
    { label: 'Preço, maior para menor', name: 'preco', value: 'desc' },
  ];

  const { data, isLoading } = useQuery({
    queryKey: ['products-from-category', categorySlug, priceOrder],
    queryFn: () => getProductsFromCategorySlug(categorySlug, priceOrder),
    staleTime: 1000 * 60 * 5,
    cacheTime: 1000 * 60 * 5,
    enabled: !!categorySlug,
  });

  return (
    <>
      <ProductSortBar sortOptions={sortOptions} productsCount={data?.length as number} />
      {isLoading && (
        <div className="self-center mt-14 h-[684px]">
          <Spinner />
        </div>
      )}

      <ProductList products={data as Product[]} />
    </>
  );
}
