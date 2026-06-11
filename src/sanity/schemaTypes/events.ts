import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'events',
  title: 'Main Events',
  type: 'document',
  fields: [
    defineField({
      name: 'sectionTitle',
      title: 'Judul Section',
      type: 'string',
      description: 'Contoh: Explore ORION 6.0',
    }),
    defineField({
      name: 'sectionDescription',
      title: 'Deskripsi Section',
      type: 'text',
      description: 'Paragraf di bawah judul section',
    }),
    defineField({
      name: 'eventList',
      title: 'Daftar Event',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'icon', title: 'Icon (emoji)', type: 'string' }),
            defineField({ name: 'category', title: 'Kategori', type: 'string' }),
            defineField({ name: 'title', title: 'Judul Event', type: 'string' }),
            defineField({ name: 'description', title: 'Deskripsi', type: 'text' }),
            defineField({ name: 'color', title: 'Warna Gradient (Tailwind)', type: 'string' }),
            defineField({ name: 'href', title: 'Link', type: 'string' }),
          ],
        },
      ],
    }),
  ],
})