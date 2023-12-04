import React from 'react';
import HeroSection from '@/components/HeroSection';
import TopCategories from '@/components/TopCategories';
import DailyDeals from '@/components/DailyDeals';

export default async function Home() {
  return (
    <div className="p-2 md:p-5 lg:py-12">
      <HeroSection />
      <TopCategories />
      <DailyDeals />
    </div>
  );
}
