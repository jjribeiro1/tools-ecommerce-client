import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ContainerListCarousel from './ContainerListCarousel';
import { TopCategories } from '@/types/top-categories';

interface TopCategoriesProps {
  categories: TopCategories;
}

const apiUrl = process.env.NEXT_PUBLIC_STRAPI_ASSETS_URL;

export default function TopCategories({ categories }: TopCategoriesProps) {
  return (
    <section className="lg:my-12 lg:mx-8">
      <ContainerListCarousel title="Categorias Populares" scrollWidth={270}>
        {categories.data.map((category, i) => (
          <li
            key={i}
            className=" bg-white flex-none w-[200px] h-[200px] border border-transparent rounded-md hover:border-slate-600 transition-colors duration-200"
          >
            <Link
              href={`category/${category.id}`}
              className="flex flex-col justify-center items-center gap-2 p-2"
            >
              <div className="relative w-[150px] h-[150px]">
                <Image
                  src={`${apiUrl}${category.attributes.image.data.attributes.formats.small.url}`}
                  alt="Imagem que representa uma categoria de produtos"
                  fill
                  sizes="(min-width: 375px) 100%"
                />
              </div>

              <h3 className="text-sm uppercase whitespace-nowrap">{category.attributes.name}</h3>
            </Link>
          </li>
        ))}
      </ContainerListCarousel>
    </section>
  );
}
