import { defineField, defineType } from "sanity";

export default defineType({
  name: "speakers",
  title: "Speakers",
  type: "document",

  fields: [
    defineField({
      name: "sectionTitle",
      title: "Judul Section",
      type: "string",
      initialValue: "Pemateri & Moderator",
    }),

    defineField({
      name: "sectionDescription",
      title: "Deskripsi Section",
      type: "text",
    }),

    defineField({
      name: "speakerList",
      title: "Daftar Speakers",
      type: "array",

      of: [
        {
          type: "object",

          fields: [
            defineField({
              name: "name",
              title: "Nama",
              type: "string",
            }),

            defineField({
              name: "role",
              title: "Role",
              type: "string",
            }),

            defineField({
              name: "description",
              title: "Deskripsi",
              type: "text",
            }),

            defineField({
              name: "image",
              title: "Foto",
              type: "image",
              options: {
                hotspot: true,
              },
            }),
          ],
        },
      ],
    }),
  ],
});