import { defineType, defineField } from 'sanity'

export const author = defineType({
  name: 'author',
  title: 'Author',
  type: 'document',

  fields: [
    // Name
    defineField({
      name: 'name',
      type: 'string',
      validation: Rule => Rule.required()
    }),

    // Slug
    defineField({
      name: 'slug',
      type: 'slug',
      options: { source: 'name' }
    }),

    // Profile Image
    defineField({
      name: 'profileImage',
      type: 'image',
      options: { hotspot: true }
    }),

    // Banner
    defineField({
      name: 'bannerImage',
      type: 'image',
      options: { hotspot: true }
    }),

    // Bio
    defineField({
      name: 'bio',
      type: 'text'
    }),

    // ✅ Flexible Links (NO LIMIT, NO FIXED PLATFORM)
    defineField({
      name: 'links',
      title: 'Links',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'label',
              title: 'Label',
              type: 'string',
              description: 'e.g. LinkedIn, Portfolio, Resume'
            },
            {
              name: 'url',
              title: 'URL',
              type: 'url',
              validation: Rule => Rule.required()
            }
          ],
          preview: {
            select: {
              title: 'label',
              subtitle: 'url'
            }
          }
        }
      ]
    })
  ]
})