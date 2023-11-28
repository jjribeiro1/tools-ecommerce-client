'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { ImageSource, urlFor } from '@/lib/sanity';

interface HeroSliderProps {
  slides: ImageSource[];
}

export default function HeroSlider({ slides }: HeroSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  const handleDotClick = (newIndex: number) => {
    setCurrentIndex(newIndex);
  };

  const stopAutoPlay = () => {
    setAutoPlay(false);
  };

  useEffect(() => {
    let autoPlayTimer: NodeJS.Timer;

    if (autoPlay) {
      autoPlayTimer = setInterval(() => {
        const isLastIndex = currentIndex === slides.length - 1;
        setCurrentIndex(isLastIndex ? 0 : (prevState) => prevState + 1);
      }, 5000);
    }

    return () => {
      clearInterval(autoPlayTimer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentIndex]);

  return (
    <div className="relative w-full h-80 sm:h-[400px] md:h-[450px] lg:h-full overflow-hidden">
      {slides.map((slide, i) => (
        <Image
          key={i}
          src={urlFor(slide).url()}
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
        {slides.map((_, i) => (
          <button
            key={i}
            className={`cursor-pointer h-[14px] w-[14px] border ${
              currentIndex === i ? 'bg-[#232f3e] border-[#232f3e]' : 'bg-white border-white'
            }  rounded-full`}
            onClick={() => {
              handleDotClick(i);
              stopAutoPlay();
            }}
          ></button>
        ))}
      </div>
    </div>
  );
}
