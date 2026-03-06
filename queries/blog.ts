


import { groq } from "next-sanity"

export const postsQuery = groq`
*[_type == "post"] | order(publishedAt desc){
  title,
  slug,
  publishedAt,
  mainImage{
    asset->{
      url
    }
  }
}
`

export const postQuery = groq`
*[_type == "post" && slug.current == $slug][0]{
  title,
  body,
  publishedAt,
  mainImage{
    asset->{
      url
    }
  }
}
`