import { CategoryOverview, PopularCategories } from '@/types/category';
import { sanityClient } from '.';
import { Product, ProductWithCategory, ProductsInfoToValidate } from '@/types/product';
import { HeroSection } from '@/types/hero-section';

async function getCategoriesOverview() {
  const query = `*[_type == 'category']{_id, name, slug}`;
  const data = await sanityClient.fetch<CategoryOverview[]>(query);
  return data;
}

async function getPopularCategories() {
  const query = `*[_type == 'category' && isPopular == true]{_id, name, slug, isPopular, image}`;
  const data = await sanityClient.fetch<PopularCategories[]>(query);
  return data;
}

async function getDailyDeals() {
  const query = `*[_type == 'product' && dailyDeal == true]`;
  const data = await sanityClient.fetch<Product[]>(query);
  return data;
}

async function getProductsFromCategorySlug(slug: string, priceOrder: string) {
  const query = `*[_type == 'product' && category->slug.current == '${slug}'] | order(price ${
    priceOrder ?? ''
  })`;
  const data = await sanityClient.fetch<Product[]>(query);
  return data;
}

async function getProductBySlug(slug: string) {
  const query = `*[_type == 'product' && slug.current == '${slug}']{_id, name, slug, price, promotionalPrice, discountPercentage, discountIsActive, dailyDeal, description, images, category->{name, slug}}[0]`;
  const data = await sanityClient.fetch<ProductWithCategory>(query);
  return data;
}

async function getHeroSectionData() {
  const query = `*[_type == 'heroSection'][0]`;
  const data = await sanityClient.fetch<HeroSection>(query);
  return data;
}


async function fetchProductsInfoToValidate(id: string) {
  const query = `*[_type == 'product' && _id == '${id}']{_id, price}[0]`;
  const data = await sanityClient.fetch<ProductsInfoToValidate>(query);
  return data;
}

export {
  getCategoriesOverview,
  getPopularCategories,
  getDailyDeals,
  getProductsFromCategorySlug,
  getProductBySlug,
  getHeroSectionData,
  fetchProductsInfoToValidate,
};
