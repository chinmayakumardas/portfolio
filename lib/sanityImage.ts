// lib/sanityImage.ts
import imageUrlBuilder from '@sanity/image-url';
import { sanityClient } from './sanityClient';

// create a builder instance
const builder = imageUrlBuilder(sanityClient);

// helper function to generate image URLs
export function urlFor(source: any) {
  return builder.image(source);
}