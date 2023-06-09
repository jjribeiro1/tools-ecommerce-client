import React from 'react';
import HeroSection from '@/components/HeroSection';
import TopCategories from '@/components/TopCategories';

async function getHeroImages() {
  const request = await fetch(`${process.env.API_URL}/hero-section?populate=*`);
  const heroImages = await request.json();
  return heroImages;
}

async function getTopCategories() {
  const request = await fetch(`${process.env.API_URL}/categories?fields[0]=name&populate=image`);
  const topCategories = await request.json();
  return topCategories;
}

export default async function Home() {
  const images = await getHeroImages();
  const topCategories = await getTopCategories()

  return (
    <main className="h-full w-full lg:px-5 lg:py-12">
      <HeroSection images={images} />
      <TopCategories categories={topCategories} />
    </main>
  );
}
