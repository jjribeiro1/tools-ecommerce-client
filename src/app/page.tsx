import React from 'react';
import HeroSection from '@/components/HeroSection';
import TopCategories from '@/components/TopCategories';
import DailyDeals from '@/components/DailyDeals';

export default async function Home() {
  return (
    <main className="h-full w-full lg:px-5 lg:py-12">
      {/* @ts-expect-error async server component*/}
      <HeroSection />
      {/* @ts-expect-error async server component*/}
      <TopCategories />
      {/* @ts-expect-error async server component*/}
      <DailyDeals />
    </main>
  );
}
