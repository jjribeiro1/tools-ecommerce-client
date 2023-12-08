import React from 'react';
import TopCategoriesCarousel from './TopCategoriesCarousel';
import { getPopularCategories } from '@/lib/sanity/queries';

export default async function TopCategories() {
  const categories = await getPopularCategories();

  return (
    <section className="my-8 lg:my-12 lg:mx-8">
      <TopCategoriesCarousel title="CATEGORIAS POPULARES" categories={categories} />
    </section>
  );
}
