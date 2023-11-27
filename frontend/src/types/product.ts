import { ImageSource } from '@/lib/sanity';
import { CategoryOverview } from './category';

export interface Product {
  _id: string;
  name: string;
  slug: {
    current: string;
  };
  price: number;
  promotionalPrice: number;
  discountPercentage: number;
  discountIsActive: boolean;
  dailyDeal: boolean;
  description: string;
  createdAt: Date;
  updatedAt: Date;
  images: ImageSource[];
}

export interface ProductWithCategory extends Product {
  category: CategoryOverview;
}
