import React from 'react';
import DailyDealsCarousel from './DailyDealsCarousel';
import { getDailyDeals } from '@/lib/sanity/queries';

export default async function DailyDeals() {
  const products = await getDailyDeals();  

  return (
    <section className="my-8 lg:my-12 lg:mx-8">
      <DailyDealsCarousel title='OFERTAS DO DIA' products={products}/>
    </section>
  );
}
