import { defineField, defineType } from "sanity";

export const siteSettings = defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  fields: [
    defineField({
      name: "version",
      title: "Versi ORION",
      type: "string",
      description: "Contoh: 6.0, 7.0, 8.0",
    }),

    defineField({
      name: "taglineLine1",
      title: "Tagline Baris 1",
      type: "string",
      description: "Contoh: Let's Collaborate and",
    }),

    defineField({
      name: "taglineLine2",
      title: "Tagline Baris 2",
      type: "string",
      description: "Contoh: Shine Brighter",
    }),

    defineField({
      name: "copyrightYear",
      title: "Tahun Copyright",
      type: "string",
      description: "Contoh: 2026",
      initialValue: "2026",
    }),
  ],
});