import { Rule } from '@sanity/types';

export default {
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      description: 'The name of the product',
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'A short description of the product',
    },
    {
      name: 'price',
      title: 'Price',
      type: 'number',
      description: 'Price of the product in PKR',
      validation: (Rule: Rule) => Rule.required().min(0),
    },
    {
      name: 'currency',
      title: 'Currency',
      type: 'string',
      description: 'Currency of the product price',
      initialValue: 'PKR',
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      description: 'Upload an image of the product',
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'availability',
      title: 'Availability',
      type: 'string',
      options: {
        list: [
          { title: 'In Stock', value: 'inStock' },
          { title: 'Out of Stock', value: 'outOfStock' },
        ],
      },
      description: 'Product availability status',
      initialValue: 'inStock',
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'condition',
      title: 'Condition',
      type: 'string',
      options: {
        list: [
          { title: 'New', value: 'new' },
          { title: 'Used', value: 'used' },
        ],
      },
      description: 'Condition of the product',
      initialValue: 'new',
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'order',
      title: 'Order',
      type: 'number',
      description: 'Set the order of the product for manual sorting',
      validation: (Rule: Rule) => Rule.required().min(0),
    },
  ],
  orderings: [
    {
      title: 'Custom Order',
      name: 'customOrder',
      by: [{ field: 'order', direction: 'asc' }],
    },
  ],
};
