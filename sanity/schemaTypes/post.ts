





import { defineType, defineField } from 'sanity'

export const post = defineType({
  name: 'post',
  title: 'Post',
  type: 'document',

  fields: [
    // ✅ Title
    defineField({
      name: 'title',
      type: 'string',
      validation: Rule => Rule.required()
    }),

    // ✅ Slug
    defineField({
      name: 'slug',
      type: 'slug',
      options: { source: 'title' },
      validation: Rule => Rule.required()
    }),

    // ✅ Thumbnail
    defineField({
      name: 'image',
      title: 'Thumbnail',
      type: 'image',
      options: { hotspot: true }
    }),

    // ✅ Author
    defineField({
      name: 'author',
      type: 'reference',
      to: [{ type: 'author' }]
    }),

    // ✅ Categories
    defineField({
      name: 'categories',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'category' } }]
    }),

    // ✅ Excerpt
    defineField({
      name: 'excerpt',
      type: 'text',
      rows: 3
    }),

    // ✅ Published Date
    defineField({
      name: 'publishedAt',
      type: 'datetime'
    }),

    // ✅ Featured
    defineField({
      name: 'featured',
      type: 'boolean',
      initialValue: false
    }),

    // ✅ SEO
    defineField({
      name: 'seo',
      type: 'object',
      fields: [
        { name: 'metaTitle', type: 'string' },
        { name: 'metaDescription', type: 'text' }
      ]
    }),

    // ✅ Content
    defineField({
      name: 'body',
      type: 'array',
      of: [
        { type: 'block' },
        { type: 'image' },
        { type: 'code' }
      ]
    })
  ],

  preview: {
    select: {
      title: 'title',
      media: 'image'
    }
  }
})