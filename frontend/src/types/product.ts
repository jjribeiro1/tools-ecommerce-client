import { ImageSource } from '@/lib/sanity';

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
