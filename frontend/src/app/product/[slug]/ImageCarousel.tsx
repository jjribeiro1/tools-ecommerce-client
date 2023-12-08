'use client';
import React from 'react';
import Image from 'next/image';
import { Carousel } from 'arc-carousel';
import 'arc-carousel/styles.css';
import { ImageSource } from '@/lib/sanity';
import { urlFor } from '@/lib/sanity';

interface ProductImageCarouselProps {
  images: ImageSource[];
}
export default function ImageCarousel({ images }: ProductImageCarouselProps) {
  return (
    <Carousel.Root className="relative h-[300px] lg:h-[450px]" hasLoop transition="fade">
      <Carousel.Wrapper>
        {images.map((image, i) => (
          <Carousel.Slide key={i}>
            <Image
              src={urlFor(image).url()}
              alt={`imagem do produto`}
              fill
              sizes="100%"
              className="object-contain"
            />
          </Carousel.Slide>
        ))}
      </Carousel.Wrapper>
      {images.length > 1 && (
        <Carousel.PrevButton className="absolute top-1/2 left-0 -translate-y-1/2 z-10 bg-slate-200/50 p-1 sm:p-2" />
      )}
      {images.length > 1 && (
        <Carousel.NextButton className="absolute top-1/2 right-0 -translate-y-1/2 z-10  bg-slate-200/50 p-1 sm:p-2" />
      )}
      <Carousel.Pagination className="absolute -bottom-7 left-1/2 -translate-x-1/2 -translate-y-1/2 gap-2" />
    </Carousel.Root>
  );
}
