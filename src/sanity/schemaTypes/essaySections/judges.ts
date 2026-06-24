import { defineField, defineType } from "sanity";

export const essayJudges = defineType({
  name: "essayJudges",
  title: "Judges Section",
  type: "document",
  
  fields: [
    defineField({
      name: "judgeList",
      title: "Daftar Juri",
      type: "array",
      of: [
        defineField({
          name: "judge",
          title: "Juri",
          type: "object",
          fields: [
            defineField({ name: "name", title: "Nama", type: "string" }),
            defineField({ name: "title", title: "Gelar / Nama Lengkap", type: "string" }),
            defineField({ name: "role", title: "Jabatan / Institusi", type: "string" }),
            defineField({ name: "description", title: "Deskripsi", type: "text" }),
            defineField({
              name: "photo",
              title: "Foto",
              type: "image",
              options: { hotspot: true },
              fields: [defineField({ name: "alt", title: "Alt Text", type: "string" })],
            }),
          ],
        }),
      ],
    }),
  ],
});