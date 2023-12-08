'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import { Carousel } from 'arc-carousel';
import 'arc-carousel/styles.css';
import { PopularCategories } from '@/types/category';
import { urlFor } from '@/lib/sanity';

interface TopCategoriesCarouselProps {
  title: string;
  categories: PopularCategories[];
}

export default function TopCategoriesCarousel({ title, categories }: TopCategoriesCarouselProps) {
  const [slidesPerPage, setSlidesPerPage] = useState(5);

  const updateSlidesPerPage = () => {
    const screenWidth = window.innerWidth;

    if (screenWidth <= 550) {
      setSlidesPerPage(1);
    } else if (screenWidth < 769) {
      setSlidesPerPage(2);
    } else if (screenWidth < 1025) {
      setSlidesPerPage(3);
    } else if (screenWidth < 1281) {
      setSlidesPerPage(4);
    } else {
      setSlidesPerPage(5);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', updateSlidesPerPage);

    return () => {
      window.removeEventListener('resize', updateSlidesPerPage);
    };
  }, []);

  return (
    <Carousel.Root
      className="flex flex-col gap-5"
      slidesPerPage={slidesPerPage}
      transitionDuration={500}
      gap={12}
    >
      <div className="w-full flex items-center gap-5">
        <h2 className="lg:text-xl text-[#282828] font-medium whitespace-nowrap w-min">{title}</h2>
        <span className="bg-neutral-700/30 inline-block w-full h-[1px] "></span>

        <div className="flex items-center gap-3 w-min">
          <Carousel.PrevButton asChild>
            <button type="button">
              <MdOutlineKeyboardArrowRight className="text-stone-600/80 bg-neutral-200/50 border border-stone-300 h-6 w-6 rotate-180" />
            </button>
          </Carousel.PrevButton>

          <Carousel.NextButton asChild>
            <button type="button">
              <MdOutlineKeyboardArrowRight className="text-stone-600/80 bg-neutral-200/50 border border-stone-300 h-6 w-6 " />
            </button>
          </Carousel.NextButton>
        </div>
      </div>

      <Carousel.Wrapper className="list-none">
        {categories.map((category) => (
          <Carousel.Slide key={category._id}>
            <div className="mx-auto max-w-[250px] bg-white border border-transparent rounded-md hover:border-slate-600 transition-colors duration-200">
              <Link
                href={`category/${category.slug.current}`}
                className="flex flex-col justify-center items-center gap-2 p-2"
              >
                <div className="relative w-[150px] h-[150px]">
                  <Image
                    src={urlFor(category.image).url()}
                    alt="Imagem que representa uma categoria de produtos"
                    fill
                    sizes="100%"
                  />
                </div>

                <h3 className="text-sm uppercase whitespace-nowrap">{category.name}</h3>
              </Link>
            </div>
          </Carousel.Slide>
        ))}
      </Carousel.Wrapper>
    </Carousel.Root>
  );
}
