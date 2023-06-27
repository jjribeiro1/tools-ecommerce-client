import { StrapiImage } from './strapi-image';

export interface TopCategories {
  data: {
    id: number;
    attributes: {
      name: string;
      image: {
        data: StrapiImage;
      };
    };
  }[];
}

export interface Categories {
  data: {
    id: number;
    attributes: {
      name: string;
    };
  }[]
}
