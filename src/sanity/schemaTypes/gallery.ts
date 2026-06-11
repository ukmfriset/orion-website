import { defineField, defineType } from "sanity";

export default defineType({
  name: "gallery",
  title: "Gallery",
  type: "document",

  fields: [
    defineField({
      name: "sectionTitle",
      title: "Judul Section",
      type: "string",
      initialValue: "ORION Through The Years",
    }),

    defineField({
      name: "sectionDescription",
      title: "Deskripsi Section",
      type: "text",
    }),

    defineField({
      name: "galleryList",
      title: "Daftar Gallery",
      type: "array",

      of: [
        {
          type: "object",

          fields: [
            defineField({
              name: "image",
              title: "Foto",
              type: "image",
              options: {
                hotspot: true,
              },
            }),

            defineField({
              name: "alt",
              title: "Alt Text",
              type: "string",
            }),
          ],
        },
      ],
    }),
  ],
});