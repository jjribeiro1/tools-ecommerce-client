'use client';
import React, { useRef } from 'react';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';

interface ContainerListCarouselProps {
  title: string;
  scrollWidth: number;
  children: React.ReactNode;
}

export default function ContainerListCarousel({ title, scrollWidth, children }: ContainerListCarouselProps) {
  const carouselRef = useRef<HTMLUListElement>(null);

  const handleArrowLeftClick = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        behavior: 'smooth',
        top: 0,
        left: -scrollWidth,
      });
    }
  };

  const handleArrowRightClick = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        behavior: 'smooth',
        top: 0,
        left: scrollWidth,
      });
    }
  };

  return (
    <div className="flex flex-col gap-5">
      <div className="w-full flex items-center gap-5">
        <h2 className="lg:text-xl text-[#282828] font-medium uppercase whitespace-nowrap w-min">{title}</h2>
        <span className="bg-neutral-700/30 inline-block w-full h-[1px] "></span>

        <div className="flex items-center gap-3 w-min">
          <button className="border border-stone-300" onClick={() => handleArrowLeftClick()}>
            <MdOutlineKeyboardArrowRight className=" text-stone-600/80 bg-neutral-200/50 transform rotate-180 h-6 w-6" />
          </button>

          <button className="border border-stone-300" onClick={() => handleArrowRightClick()}>
            <MdOutlineKeyboardArrowRight className=" text-stone-600/80 bg-neutral-200/50 h-6 w-6 " />
          </button>
        </div>
      </div>

      <ul className="flex items-center gap-4 overflow-hidden" ref={carouselRef}>
        {children}
      </ul>
    </div>
  );
}
