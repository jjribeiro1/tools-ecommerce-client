import React from 'react';
import ContainerListCarousel from './ContainerListCarousel';
import ProductCard from './ProductCard';
import { Product } from '@/types/product';

interface DailyDealsProps {
  products: {
    data: Product[];
  };
}

export default function DailyDeals({ products }: DailyDealsProps) {
  return (
    <section className="lg:my-12 lg:mx-8">
      <ContainerListCarousel title="Ofertas do dia" scrollWidth={350}>
        {products.data.map((product, i) => (
          <ProductCard key={i} product={product} />
        ))}
      </ContainerListCarousel>
    </section>
  );
}
