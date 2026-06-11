import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'stats',
  title: 'Stats',
  type: 'document',
  fields: [
    defineField({
      name: 'statList',
      title: 'Daftar Statistik',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'value', title: 'Nilai', type: 'string', description: 'Contoh: 6+, 1000+, 34' }),
            defineField({ name: 'label', title: 'Label', type: 'string', description: 'Contoh: Tahun ORION, Peserta' }),
          ],
        },
      ],
    }),
  ],
})