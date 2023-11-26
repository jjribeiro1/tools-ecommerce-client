import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ContainerListCarousel from './ContainerListCarousel';
import { getPopularCategories } from '@/lib/sanity/queries';
import { urlFor } from '@/lib/sanity';

export default async function TopCategories() {
  const categories = await getPopularCategories();

  return (
    <section className="my-8 lg:my-12 lg:mx-8">
      <ContainerListCarousel title="Categorias Populares" scrollWidth={270}>
        {categories.map((category, i) => (
          <li
            key={i}
            className=" bg-white flex-none w-[200px] h-[200px] border border-transparent rounded-md hover:border-slate-600 transition-colors duration-200"
          >
            <Link
              href={`category/${category.slug.current}`}
              className="flex flex-col justify-center items-center gap-2 p-2"
            >
              <div className="relative w-[150px] h-[150px]">
                <Image
                  src={urlFor(category.image).url()}
                  alt="Imagem que representa uma categoria de produtos"
                  fill
                  sizes="(min-width: 375px) 100%"
                />
              </div>

              <h3 className="text-sm uppercase whitespace-nowrap">{category.name}</h3>
            </Link>
          </li>
        ))}
      </ContainerListCarousel>
    </section>
  );
}
