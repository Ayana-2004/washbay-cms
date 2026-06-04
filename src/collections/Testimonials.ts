import type { CollectionConfig } from 'payload'

export const Testimonials: CollectionConfig = {
  slug: 'testimonials',
  access: {
    read: () => true,
    create: () => true, // ← public access
  },
  admin: {
    useAsTitle: 'name',
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
      label: 'Customer Name',
    },
    {
      name: 'role',
      type: 'text',
      label: 'Role (e.g. Ceramic Coating Customer)',
    },
    {
      name: 'quote', // ← renamed from 'review' to match frontend
      type: 'textarea',
      required: true,
      label: 'Review',
    },
    {
      name: 'rating',
      type: 'select',
      defaultValue: '5',
      options: [
        { label: '5 Stars', value: '5' },
        { label: '4 Stars', value: '4' },
        { label: '3 Stars', value: '3' },
        { label: '2 Stars', value: '2' },
        { label: '1 Star', value: '1' },
      ],
    },
  ],
}
