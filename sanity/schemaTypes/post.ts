import {defineField, defineType} from 'sanity'

export const post = defineType({
  name: 'post',
  title: 'Post',
  type: 'document',

  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required()
    }),

    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
      },
      validation: Rule => Rule.required()
    }),

    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: { hotspot: true }
    }),

    defineField({
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime'
    }),

    defineField({
      name: 'body',
      title: 'Content',
      type: 'array',
      of: [{ type: 'block' }]
    }),
  ],
})