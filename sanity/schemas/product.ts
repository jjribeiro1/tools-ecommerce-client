import {defineType, defineField} from 'sanity'

export const product = defineType({
  name: 'product',
  type: 'document',

  fields: [
    defineField({
      name: 'name',
      type: 'string',
    }),

    defineField({
      name: 'price',
      type: 'number',
    }),

    defineField({
      name: 'slug',
      type: 'slug',
      options: {
        source: 'name',
      },
    }),

    defineField({
      name: 'promotionalPrice',
      type: 'number',
    }),

    defineField({
      name: 'discountPercentage',
      type: 'number',
    }),

    defineField({
      name: 'discountIsActive',
      type: 'boolean',
    }),

    defineField({
      name: 'dailyDeal',
      type: 'boolean',
    }),

    defineField({
      name: 'images',
      type: 'array',
      title: 'Product Images',
      of: [{type: 'image'}],
    }),

    defineField({
      name: 'description',
      type: 'text',
    }),

    defineField({
      name: 'category',
      type: 'reference',
      to: [{type: 'category'}],
    }),
  ],
})
