import React from 'react';
import ContainerListCarousel from './ContainerListCarousel';
import ProductCard from './ProductCard';
import { Product } from '@/types/product';

interface DailyDeals {
  data: Product[];
}

async function getDailyDeals(): Promise<DailyDeals> {
  const response = await fetch(`${process.env.API_URL}/products?populate=images&filters[dailyDeal]=true`, {
    next: { revalidate: 60 * 60 * 24 },
  });
  const dailyDeals = response.json();
  return dailyDeals;
}

export default async function DailyDeals() {
  const products = await getDailyDeals();

  return (
    <section className="my-8 lg:my-12 lg:mx-8">
      <ContainerListCarousel title="Ofertas do dia" scrollWidth={350}>
        {products.data.map((product, i) => (
          <ProductCard key={i} product={product} />
        ))}
      </ContainerListCarousel>
    </section>
  );
}
