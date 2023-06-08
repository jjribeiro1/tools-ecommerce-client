import React from 'react';
import HeroSection from '@/components/HeroSection';

async function getHeroImages() {
  const request = await fetch(`${process.env.API_URL}/hero-section?populate=*`);
  const heroImages = await request.json();
  return heroImages;
}

export default async function Home() {
  const images = await getHeroImages();

  return (
    <main className="h-full w-full lg:px-5 lg:py-12">
      <HeroSection images={images} />
    </main>
  );
}
