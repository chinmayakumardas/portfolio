import { defineType, defineField } from 'sanity'

export const category = defineType({
  name: 'category',
  title: 'Category',
  type: 'document',

  fields: [
    // ✅ Title
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required()
    }),

    // ✅ Slug
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title' },
      validation: Rule => Rule.required()
    }),

    // ✅ Icon (Upload OR URL)
    defineField({
      name: 'icon',
      title: 'Icon',
      type: 'object',
      fields: [
        {
          name: 'type',
          title: 'Icon Type',
          type: 'string',
          options: {
            list: [
              { title: 'Upload Icon', value: 'upload' },
              { title: 'Icon URL', value: 'url' }
            ],
            layout: 'radio'
          },
          validation: Rule => Rule.required()
        },

        {
          name: 'image',
          title: 'Upload Icon',
          type: 'image',
          options: {
            accept: 'image/svg+xml,image/png'
          },
          hidden: ({ parent }) => parent?.type !== 'upload'
        },

        {
          name: 'url',
          title: 'Icon URL',
          type: 'url',
          hidden: ({ parent }) => parent?.type !== 'url'
        }
      ]
    })
  ],

  preview: {
    select: {
      title: 'title',
      media: 'icon.image'
    }
  }
})