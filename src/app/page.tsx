import React from 'react';
import HeroSection from '@/components/HeroSection';
import TopCategories from '@/components/TopCategories';
import DailyDeals from '@/components/DailyDeals';

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

async function getDailyDeals() {
  const request = await fetch(`${process.env.API_URL}/products?populate=images&filters[dailyDeal]=true`);
  const dailyDeals = await request.json();
  return dailyDeals;
}

export default async function Home() {
  const images = await getHeroImages();
  const topCategories = await getTopCategories();
  const dailyDeals = await getDailyDeals();

  return (
    <main className="h-full w-full lg:px-5 lg:py-12">
      <HeroSection images={images} />
      <TopCategories categories={topCategories} />
      <DailyDeals products={dailyDeals}/>
    </main>
  );
}
