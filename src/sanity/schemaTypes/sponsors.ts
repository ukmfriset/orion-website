import { defineField, defineType } from "sanity";

export default defineType({
  name: "sponsors",
  title: "Sponsors",
  type: "document",

  fields: [
    defineField({
      name: "sectionTitle",
      title: "Judul Section",
      type: "string",
      initialValue: "Supported By",
    }),

    defineField({
      name: "sectionDescription",
      title: "Deskripsi Section",
      type: "text",
    }),

    defineField({
      name: "sponsorList",
      title: "Daftar Sponsor",
      type: "array",

      of: [
        {
          type: "object",

          fields: [
            defineField({
              name: "name",
              title: "Nama Sponsor",
              type: "string",
            }),

            defineField({
              name: "logo",
              title: "Logo",
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