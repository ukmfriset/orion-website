import { defineField, defineType } from "sanity";

export default defineType({
  name: "timeline",
  title: "Timeline",
  type: "document",

  fields: [
    defineField({
      name: "sectionTitle",
      title: "Judul Section",
      type: "string",
      description: "Contoh: Timeline ORION 6.0",
    }),

    defineField({
      name: "sectionDescription",
      title: "Deskripsi Section",
      type: "text",
    }),

    defineField({
      name: "timelineList",
      title: "Daftar Timeline",
      type: "array",

      of: [
        {
          type: "object",

          fields: [
            defineField({
              name: "date",
              title: "Tanggal",
              type: "string",
              description: "Contoh: 13 Apr – 12 Mei 2026",
            }),

            defineField({
              name: "title",
              title: "Judul",
              type: "string",
            }),

            defineField({
              name: "description",
              title: "Deskripsi",
              type: "text",
            }),
          ],
        },
      ],
    }),
  ],
});