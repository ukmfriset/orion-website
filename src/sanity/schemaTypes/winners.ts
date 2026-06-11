import { defineField, defineType } from "sanity";

export default defineType({
  name: "winners",
  title: "Winners",
  type: "document",

  fields: [
    defineField({
      name: "sectionTitle",
      title: "Judul Section",
      type: "string",
      initialValue: "Essay Competition",
    }),

    defineField({
      name: "sectionDescription",
      title: "Deskripsi Section",
      type: "text",
    }),

    defineField({
      name: "smaTitle",
      title: "Judul SMA",
      type: "string",
      initialValue: "🎓 SMA / Sederajat",
    }),

    defineField({
      name: "universityTitle",
      title: "Judul Perguruan Tinggi",
      type: "string",
      initialValue: "🏛️ Perguruan Tinggi",
    }),

    defineField({
      name: "smaWinners",
      title: "Pemenang SMA",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "icon",
              title: "Icon",
              type: "string",
            }),
            defineField({
              name: "title",
              title: "Kategori",
              type: "string",
            }),
            defineField({
              name: "team",
              title: "Nama Tim",
              type: "string",
            }),
            defineField({
              name: "school",
              title: "Sekolah",
              type: "string",
            }),
          ],
        },
      ],
    }),

    defineField({
      name: "universityWinners",
      title: "Pemenang Perguruan Tinggi",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "icon",
              title: "Icon",
              type: "string",
            }),
            defineField({
              name: "title",
              title: "Kategori",
              type: "string",
            }),
            defineField({
              name: "team",
              title: "Nama Tim",
              type: "string",
            }),
            defineField({
              name: "school",
              title: "Universitas",
              type: "string",
            }),
          ],
        },
      ],
    }),
  ],
});