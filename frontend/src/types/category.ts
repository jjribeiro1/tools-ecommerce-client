import { ImageSource } from '@/lib/sanity';

export interface CategoryOverview {
  _id: string;
  name: string;
  slug: {
    current: string;
  };
}

export interface PopularCategories {
  _id: string;
  name: string;
  slug: {
    current: string;
  };
  image: ImageSource
  isPopular: boolean;
}