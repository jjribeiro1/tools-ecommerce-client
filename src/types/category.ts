import { StrapiImage } from './strapi-image';

export interface Category {
  id: number;
  attributes: {
    name: string;
    createdAt: Date;
    updatedAt: Date;
    publishedAt: Date;
    isPopular: boolean;
    image: StrapiImage;
  };
}

export interface PopularCategoriesFetchResponse {
  data: {
    id: number;
    attributes: {
      name: string;
      createdAt: Date;
      updatedAt: Date;
      publishedAt: Date;
      isPopular: boolean;
      image: {
        data: StrapiImage;
      };
    };
  }[];
}

export interface CategoriesFetchResponse {
  data: {
    id: number;
    attributes: {
      name: string;
    };
  }[];
}
