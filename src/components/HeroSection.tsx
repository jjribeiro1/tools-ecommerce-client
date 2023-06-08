import React from 'react';
import { HeroImages } from '@/types/hero-images';
import Image from 'next/image';
import HeroSlider from './HeroSlider';

interface HeroSectionProps {
  images: HeroImages;
}
const apiUrl = process.env.NEXT_PUBLIC_STRAPI_ASSETS_URL;

export default function HeroSection({ images }: HeroSectionProps) {
  const { slides, banners } = images.data.attributes;
  return (
    <>
      <section className="grid lg:grid-cols-2 lg:gap-6 w-full lg:h-[450px] xl:h-[500px] ">
        <HeroSlider slides={slides.data} />

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
