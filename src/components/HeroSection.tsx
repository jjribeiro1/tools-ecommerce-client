import React from 'react';
import Image from 'next/image';
import HeroSlider from './HeroSlider';
import { HeroImages } from '@/types/hero-images';

async function getHeroImages(): Promise<HeroImages> {
  const response = await fetch(`${process.env.API_URL}/hero-section?populate=*`, {
    next: { revalidate: 60 * 60 },
  });
  const heroImages = response.json();
  return heroImages;
}

const apiUrl = process.env.NEXT_PUBLIC_STRAPI_ASSETS_URL;

export default async function HeroSection() {
  const images = await getHeroImages();
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
