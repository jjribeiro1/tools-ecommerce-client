import React from 'react';
import HeroSection from '@/components/HeroSection';
import TopCategories from '@/components/TopCategories';
import DailyDeals from '@/components/DailyDeals';

export default async function Home() {
  return (
    <main className="h-full w-full p-3 md:px-10 lg:px-5 lg:py-12">
      <HeroSection />
      <TopCategories />
      <DailyDeals />
    </main>
  );
}
