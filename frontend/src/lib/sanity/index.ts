import { createClient } from 'next-sanity';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';
import imageUrlBuilder from '@sanity/image-url';

export type ImageSource = SanityImageSource

export const sanityClient = createClient({
    projectId: process.env.SANITY_STUDIO_PROJECT_ID,
    dataset: process.env.SANITY_STUDIO_DATASET,
    apiVersion: '2023-11-25',
    useCdn: true
})

export const builder = imageUrlBuilder(sanityClient);

export function urlFor(source: ImageSource) {
  return builder.image(source);
}
