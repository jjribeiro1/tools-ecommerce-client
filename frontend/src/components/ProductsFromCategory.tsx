'use client';
import React from 'react';
import { useQuery } from '@tanstack/react-query';
import ProductSortBar from './ProductSortBar';
import Spinner from './Spinner';
import ProductList from './ProductList';
import { Product } from '@/types/product';
import { getProductsFromCategorySlug } from '@/lib/sanity/queries';

interface ProductsFromCategoryProps {
  categorySlug: string;
  priceOrder: string;
}

export default function ProductsFromCategory({ categorySlug, priceOrder }: ProductsFromCategoryProps) {
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
        <div className="self-center">
          <Spinner />
        </div>
      )}

      <ProductList products={data as Product[]} />
    </>
  );
}
