// import { createClient } from '@sanity/client';

// export const sanityClient = createClient({
//   projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
//   dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
//   apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION,
//   useCdn: true, // set to false if you want fresh data
// });









// lib/sanityClient.ts
import { createClient } from '@sanity/client';

export const sanityClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '', // your Sanity project ID
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production', // default dataset
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2026-04-04', // use today's date or API version
  useCdn: true, // true = faster, cached; false = always fresh
});