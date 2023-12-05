'use client';
import React from 'react';
import Image from 'next/image';
import { Carousel } from 'arc-carousel';
import 'arc-carousel/styles.css';
import { ImageSource, urlFor } from '@/lib/sanity';

interface HeroSliderProps {
  slides: ImageSource[];
}

export default function HeroSlider({ slides }: HeroSliderProps) {
  return (
    <Carousel.Root
      className="relative h-80 sm:h-[400px] md:h-[450px] lg:h-full"
      transition='fade'
      hasLoop
      autoplay
      autoplayInterval={5000}
      transitionDuration={500}
    >
      <Carousel.Wrapper>
        {slides.map((slide, i) => (
          <Carousel.Slide key={i}>
            <Image src={urlFor(slide).url()} alt="imagem de ferramentas" fill sizes="100%" className="object-cover" />
          </Carousel.Slide>
        ))}
      </Carousel.Wrapper>
      <Carousel.PrevButton
        type="button"
        className="absolute top-1/2 left-0 -translate-y-1/2 z-10 bg-gray-200/50 p-1 sm:p-2"
      />
      <Carousel.NextButton
        type="button"
        className="absolute top-1/2 right-0 -translate-y-1/2 z-10  bg-gray-200/50 p-1 sm:p-2"
      />
      <Carousel.Pagination className="absolute -bottom-6 left-1/2 -translate-x-1/2 -translate-y-1/2 gap-2" />
    </Carousel.Root>
  );
}
