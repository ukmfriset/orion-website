import { defineField, defineType } from "sanity";

export const webinarHero = defineType({
  name: "webinarHero",
  title: "Hero Section Webinar",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Judul (Nama Webinar)", type: "string" }),
    defineField({ name: "subtitle", title: "Subtitle", type: "string", description: "Contoh: WRITE TO SELL" }),
    defineField({ name: "description", title: "Deskripsi", type: "text" }),
    defineField({ name: "registrationLink", title: "Link Pendaftaran", type: "url" }),
    defineField({
      name: "poster",
      title: "Poster",
      type: "image",
      options: { hotspot: true },
      fields: [
        defineField({ name: "alt", title: "Alt Text", type: "string" }),
      ],
    }),
  ],
});