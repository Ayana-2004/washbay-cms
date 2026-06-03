import type { CollectionConfig } from 'payload'

export const Services: CollectionConfig = {
  slug: 'services',
  access: {
    read: () => true, // ← allows public access
  },
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
    },
    {
      name: 'price',
      type: 'number', // ← changed from text to number
      required: true,
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
    },
  ],
}
