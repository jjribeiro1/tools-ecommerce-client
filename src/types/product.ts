import { StrapiImage } from './strapi-image';
import { Categories } from './top-categories';

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
    categories: Categories
  };
}
