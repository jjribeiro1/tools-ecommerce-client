import {defineField, defineType} from 'sanity'

export const category = defineType({
  name: 'category',
  type: 'document',

  fields: [
    defineField({
      name: 'name',
      type: 'string',
    }),

    defineField({
      name: 'slug',
      type: 'slug',
      options: {
        source: 'name',
      },
    }),

    defineField({
      name: 'isPopular',
      type: 'boolean',
    }),

    defineField({
      name: 'image',
      type: 'image',
    }),
  ],
})
