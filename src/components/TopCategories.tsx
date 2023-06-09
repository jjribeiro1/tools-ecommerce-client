'use client';
import React, { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { TopCategories } from '@/types/top-categories';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';

interface TopCategoriesProps {
  categories: TopCategories;
}

const apiUrl = process.env.NEXT_PUBLIC_STRAPI_ASSETS_URL;

export default function TopCategories({ categories }: TopCategoriesProps) {
  const carouselRef = useRef<HTMLUListElement>(null);

  const handleArrowLeftClick = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        behavior: 'smooth',
        top: 0,
        left: -270,
      });
    }
  };

  const handleArrowRightClick = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        behavior: 'smooth',
        top: 0,
        left: 270,
      });
    }
  };

  return (
    <section className="w-full lg:my-12 flex flex-col gap-5">
      <div className="flex items-center gap-2">
        <div className="flex items-center gap-2 w-[90%]">
          <h2 className="lg:text-xl text-[#282828] font-medium uppercase whitespace-nowrap">
            Categorias Populares
          </h2>
          <span className="bg-neutral-700/40 inline-block w-full h-[1px] "></span>
        </div>

        <div className="flex items-center gap-3">
          <button className="border border-stone-300" onClick={() => handleArrowLeftClick()}>
            <MdOutlineKeyboardArrowRight className=" text-stone-600/80 bg-neutral-200/50 transform rotate-180 h-6 w-6" />
          </button>

          <button className="border border-stone-300" onClick={() => handleArrowRightClick()}>
            <MdOutlineKeyboardArrowRight className=" text-stone-600/80 bg-neutral-200/50 h-6 w-6 " />
          </button>
        </div>
      </div>

      <ul className="flex items-center gap-4 overflow-hidden" ref={carouselRef}>
        {categories.data.map((category, i) => (
          <li
            key={i}
            className="flex-none w-[200px] h-[200px] border border-transparent rounded-md hover:border-slate-600 transition-colors duration-200"
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
                />
              </div>

              <h3 className="text-sm uppercase whitespace-nowrap">{category.attributes.name}</h3>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
