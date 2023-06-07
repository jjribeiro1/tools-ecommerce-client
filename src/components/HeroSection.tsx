'use client';
import React, { useState, useEffect } from 'react';
import { HeroImages } from '@/types/hero-images';
import Image from 'next/image';

interface HeroSectionProps {
  images: HeroImages;
}
const apiUrl = process.env.NEXT_PUBLIC_STRAPI_ASSETS_URL;

export default function HeroSection({ images }: HeroSectionProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const { slides, banners } = images.data.attributes;

  const handleDotClick = (newIndex: number) => {
    setCurrentIndex(newIndex);
  };
  const stopAutoplay = () => {
    setAutoplay(false);
  };

  useEffect(() => {
    let autoplayTimer: NodeJS.Timer;

    if (autoplay) {
      autoplayTimer = setInterval(() => {
        const isLastIndex = currentIndex === slides.data.length - 1;
        setCurrentIndex(isLastIndex ? 0 : (prevState) => prevState + 1);
      }, 5000);
    }

    return () => {
      clearInterval(autoplayTimer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentIndex]);  

  return (
    <>
      <section className="grid lg:grid-cols-2 lg:gap-6 w-full lg:h-[450px] xl:h-[500px] ">
        <div className="relative w-full h-full overflow-hidden">
          {slides.data.map((slide, i) => (
            <Image
              key={i}
              src={`${apiUrl}${slide.attributes.formats.small.url}`}
              alt="Imagem de um produto"
              fill
              sizes="(min-width: 375px) 100%"
              quality={100}
              className={`object-cover rounded-lg h-full w-full cursor-pointer duration-500 ${
                currentIndex === i ? 'opacity-100 z-10' : 'opacity-0 z-0'
              }`}
            />
          ))}
          <div className="z-20 absolute left-1/2 bottom-5 -translate-x-1/2 flex items-center gap-3">
            {slides.data.map((_, i) => (
              <button
                key={i}
                className={`cursor-pointer h-[14px] w-[14px] border ${
                  currentIndex === i ? 'bg-[#232f3e] border-[#232f3e]' : 'bg-white border-white'
                }  rounded-full`}
                onClick={() => {
                  handleDotClick(i);
                  stopAutoplay();
                }}
              ></button>
            ))}
          </div>
        </div>

        <div className="lg:grid lg:grid-cols-2 lg:gap-4">
          {banners.data.map((banner, i) => (
            <div key={i} className="relative w-full h-full overflow-hidden">
              <Image
                src={`${apiUrl}${banner.attributes.formats.small.url}`}
                alt={'Banner de um produto a venda'}
                fill
                sizes="(min-width: 375px) 100%"
                quality={100}
                className="object-cover rounded-lg h-full w-full cursor-pointer"
              />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
