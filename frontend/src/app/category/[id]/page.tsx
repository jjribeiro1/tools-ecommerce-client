import React from 'react';
import Link from 'next/link';
import ProductsFromCategory from '@/components/ProductsFromCategory';
import { CategoriesFetchResponse } from '@/types/category';

async function getCategories(): Promise<CategoriesFetchResponse> {
  const response = await fetch(`${process.env.API_URL}/categories?fields[0]=name`, {
    next: { revalidate: 60 * 60 * 24 },
  });
  const categories = response.json();
  return categories;
}

export default async function Category({ params }: any) {
  const categories = await getCategories();

  return (
    <section className="flex gap-2 md:gap-4 h-full my-8 px-1 md:px-4">
      <div className="bg-white flex flex-col gap-4 py-4 pl-2 w-[30%] lg:w-[20%] rounded-md">
        <h2 className="text-[#1c1b1b] text-xs sm:text-sm md:text-base font-medium">CATEGORIAS</h2>
        <ul className="flex flex-col gap-2">
          {categories.data.map((category, i) => (
            <li key={i} className="text-[#777777] text-xs sm:text-sm md:text-base truncate hover:text-black">
              <Link href={`category/${category.id}`}>{category.attributes.name}</Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="w-[70%] lg:w-[80%] flex flex-col gap-4">
        <ProductsFromCategory categoryId={params.id} />
      </div>
    </section>
  );
}
