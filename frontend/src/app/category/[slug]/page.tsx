import React from 'react';
import Link from 'next/link';
import ProductsFromCategory from '@/components/ProductsFromCategory';
import { getCategoriesOverview } from '@/lib/sanity/queries';

export default async function Category({ params }: { params: { slug: string}}) {
  const categories = await getCategoriesOverview();

  return (
    <section className="flex gap-2 md:gap-4 h-full my-8 px-1 md:px-4">
      <div className="bg-white flex flex-col gap-4 py-4 pl-2 w-[30%] lg:w-[20%] rounded-md">
        <h2 className="text-[#1c1b1b] text-xs sm:text-sm md:text-base font-medium">CATEGORIAS</h2>
        <ul className="flex flex-col gap-2">
          {categories.map((category, i) => (
            <li key={i} className="text-[#777777] text-xs sm:text-sm md:text-base truncate hover:text-black">
              <Link href={`/category/${category.slug.current}`}>{category.name}</Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="w-[70%] lg:w-[80%] flex flex-col gap-4">
        <ProductsFromCategory categorySlug={params.slug} />
      </div>
    </section>
  );
}
