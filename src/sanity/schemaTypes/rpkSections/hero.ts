import { defineField, defineType } from "sanity";

export const rpkHero = defineType({
  name: "rpkHero",
  title: "Hero Section RPK",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Judul", type: "string" }),
    defineField({ name: "subtitle", title: "Subtitle", type: "string" }),
    defineField({ name: "tagline", title: "Tagline", type: "text", description: "Contoh: Mengukir Kenangan Bersama..." }),
    defineField({ name: "date", title: "Tanggal", type: "string", description: "Contoh: 6 Juni 2026" }),
    defineField({ name: "time", title: "Waktu", type: "string", description: "Contoh: 08.00 WIB - Selesai" }),
    defineField({ name: "location", title: "Lokasi", type: "string", description: "Contoh: RKB E-303" }),
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