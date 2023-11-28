import React from 'react';
import Image from 'next/image';
import HeroSlider from './HeroSlider';
import { getHeroSectionData } from '@/lib/sanity/queries';
import { urlFor } from '@/lib/sanity';

export default async function HeroSection() {
  const { slides, banners } = await getHeroSectionData();

  return (
    <>
      <section className="grid grid-cols-1 gap-4 w-full h-min lg:grid-cols-2 lg:gap-6 lg:h-[450px] xl:h-[500px] ">
        <HeroSlider slides={slides} />

        <div className="grid grid-cols-2 gap-2 md:max-lg:flex md:max-lg:items-center lg:gap-4">
          {banners.map((banner, i) => (
            <div key={i} className="relative w-full h-40 lg:h-full overflow-hidden">
              <Image
                src={urlFor(banner).url()}
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
