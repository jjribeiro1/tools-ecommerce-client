import {defineType, defineField} from 'sanity'

export const heroSection = defineType({
  name: 'heroSection',
  type: 'document',
  title: 'Hero Section',

  fields: [
    defineField({
      name: 'slides',
      type: 'array',
      of: [{type: 'image'}],
    }),

    defineField({
      name: 'banners',
      type: 'array',
      of: [{type: 'image'}],
    }),
  ],
})
