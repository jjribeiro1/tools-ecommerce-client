import React from 'react';
import ContainerListCarousel from './ContainerListCarousel';
import ProductCard from './ProductCard';
import { getDailyDeals } from '@/lib/sanity/queries';

export default async function DailyDeals() {
  const products = await getDailyDeals();  

  return (
    <section className="my-8 lg:my-12 lg:mx-8">
      <ContainerListCarousel title="Ofertas do dia" scrollWidth={350}>
        {products.map((product, i) => (
          <ProductCard key={i} product={product} />
        ))}
      </ContainerListCarousel>
    </section>
  );
}
