import { defineField, defineType } from "sanity";

export const rpkGallery = defineType({
  name: "rpkGallery",
  title: "Gallery Section RPK",
  type: "document",
  fields: [
    defineField({
      name: "images",
      title: "Foto Gallery",
      type: "array",
      of: [
        defineField({
          name: "galleryImage",
          title: "Foto",
          type: "image",
          options: { hotspot: true },
          fields: [
            defineField({ name: "alt", title: "Alt Text", type: "string" }),
          ],
        }),
      ],
    }),
  ],
});