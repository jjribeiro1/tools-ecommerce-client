import React from 'react';
import Link from 'next/link';
import { Categories } from '@/types/top-categories';
import ProductList from '@/components/ProductList';

async function getCategories(): Promise<Categories> {
  const response = await fetch(`${process.env.API_URL}/categories?fields[0]=name`, {
    next: { revalidate: 60 * 60 * 24 },
  });
  const categories = response.json();
  return categories;
}

export default async function Category({ params }: any) {
  const categories = await getCategories();

  return (
    <section className="flex gap-4 h-full my-8 px-4">
      <div className="bg-white flex flex-col gap-4 py-4 pl-2 w-1/5 rounded-md">
        <h2 className="text-[#1c1b1b] font-medium">CATEGORIAS</h2>
        <ul className="flex flex-col gap-2">
          {categories.data.map((category, i) => (
            <li key={i} className="text-[#777777]">
              <Link href={`category/${category.id}`}>{category.attributes.name}</Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="w-[80%]">
        <ProductList categoryId={params.id} />
      </div>
    </section>
  );
}
