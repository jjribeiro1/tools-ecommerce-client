import { StrapiImage } from './strapi-image';

export interface HeroImages {
  data: {
    id: number;
    attributes: {
      createdAt: Date;
      updatedAt: Date;
      publishedAt: Date;
      slides: {
        data: StrapiImage[];
      };
      banners: {
        data: StrapiImage[];
      };
    };
  };
}
