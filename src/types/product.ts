import { Category } from './category';
import { StrapiImage } from './strapi-image';

export interface Product {
  id: number;
  attributes: {
    name: string;
    createdAt: Date;
    updatedAt: Date;
    publishedAt: Date;
    originalPrice: number;
    promotionalPrice: number;
    discountPercentage: number;
    discountIsActive: boolean;
    dailyDeal: boolean;
    images: {
      data: StrapiImage[];
    };
    categories: {
      data: Category[];
    };
  };
}

export interface DailyDealsFetchResponse {
  data: Product[];
}
