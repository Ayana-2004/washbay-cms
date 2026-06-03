import type { CollectionConfig } from 'payload'

export const Bookings: CollectionConfig = {
  slug: 'bookings',
  access: {
    create: () => true,
    read: () => true,
  },
  admin: {
    useAsTitle: 'name',
  },
  fields: [
    { name: 'name', type: 'text', required: true, label: 'Full Name' },
    { name: 'phone', type: 'text', required: true, label: 'Phone Number' },
    {
      name: 'vehicleType',
      type: 'select',
      required: true,
      label: 'Vehicle Type',
      options: [
        { label: 'Sedan', value: 'sedan' },
        { label: 'SUV', value: 'suv' },
        { label: 'Hatchback', value: 'hatchback' },
        { label: 'Truck', value: 'truck' },
        { label: 'Van', value: 'van' },
      ],
    },
    {
      name: 'service',
      type: 'relationship',
      relationTo: 'services',
      required: true,
      label: 'Selected Service',
    },
    { name: 'date', type: 'date', required: true, label: 'Appointment Date' },
    { name: 'time', type: 'text', required: true, label: 'Preferred Time' },
    {
      name: 'status',
      type: 'select',
      defaultValue: 'pending',
      options: [
        { label: 'Pending', value: 'pending' },
        { label: 'Confirmed', value: 'confirmed' },
        { label: 'Completed', value: 'completed' },
        { label: 'Cancelled', value: 'cancelled' },
      ],
    },
  ],
}
