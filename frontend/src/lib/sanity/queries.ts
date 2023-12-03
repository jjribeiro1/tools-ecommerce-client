import { cache } from 'react';
import { CategoryOverview, PopularCategories } from '@/types/category';
import { sanityClient } from '.';
import { Product, ProductWithCategory, ProductsInfoToValidate } from '@/types/product';
import { HeroSection } from '@/types/hero-section';

async function fetchCategoriesOverview() {
  const query = `*[_type == 'category']{_id, name, slug}`;
  const data = await sanityClient.fetch<CategoryOverview[]>(query);
  return data;
}
const getCategoriesOverview = cache(fetchCategoriesOverview);

async function fetchPopularCategories() {
  const query = `*[_type == 'category' && isPopular == true]{_id, name, slug, isPopular, image}`;
  const data = await sanityClient.fetch<PopularCategories[]>(query);
  return data;
}
const getPopularCategories = cache(fetchPopularCategories);

async function fetchDailyDealsProducts() {
  const query = `*[_type == 'product' && dailyDeal == true]`;
  const data = await sanityClient.fetch<Product[]>(query);
  return data;
}
const getDailyDeals = cache(fetchDailyDealsProducts);

async function getProductsFromCategorySlug(slug: string, priceOrder: string) {
  const query = `*[_type == 'product' && category->slug.current == '${slug}'] | order(price ${
    priceOrder ?? ''
  })`;
  const data = await sanityClient.fetch<Product[]>(query);
  return data;
}

async function fetchProductBySlug(slug: string) {
  const query = `*[_type == 'product' && slug.current == '${slug}']{_id, name, slug, price, promotionalPrice, discountPercentage, discountIsActive, dailyDeal, description, images, category->{name, slug}}[0]`;
  const data = await sanityClient.fetch<ProductWithCategory>(query);
  return data;
}
const getProductBySlug = cache(fetchProductBySlug);

async function fetchHeroSectionData() {
  const query = `*[_type == 'heroSection'][0]`;
  const data = await sanityClient.fetch<HeroSection>(query);
  return data;
}
const getHeroSectionData = cache(fetchHeroSectionData);

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
