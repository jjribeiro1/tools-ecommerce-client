'use client';
import { useState, useEffect } from 'react';
import { Carousel } from 'arc-carousel';
import 'arc-carousel/styles.css';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import ProductCard from '../ProductCard';
import { Product } from '@/types/product';

interface DailyDealsCarouselProps {
  title: string;
  products: Product[];
}

export default function DailyDealsCarousel({ title, products }: DailyDealsCarouselProps) {
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

    updateSlidesPerPage();

    return () => {
      window.removeEventListener('resize', updateSlidesPerPage);
    };
  }, []);

  return (
    <Carousel.Root className="flex flex-col gap-5" slidesPerPage={slidesPerPage} transitionDuration={500} gap={12}>
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
        {products.map((product) => (
          <Carousel.Slide key={product._id}>
            <div className="mx-auto max-w-[250px]">
              <ProductCard product={product} />
            </div>
          </Carousel.Slide>
        ))}
      </Carousel.Wrapper>
    </Carousel.Root>
  );
}
