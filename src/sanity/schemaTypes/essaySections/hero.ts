import { defineField, defineType } from "sanity";

export const essayHero = defineType({
  name: "essayHero",
  title: "Hero Section",
  type: "document",
  
  fields: [
    defineField({ name: "title", title: "Judul", type: "string" }),
    defineField({ name: "description", title: "Deskripsi", type: "text" }),
    defineField({ name: "registrationLink", title: "Link Pendaftaran", type: "url" }),
    defineField({ name: "uploadLink", title: "Link Upload", type: "url" }),
    defineField({ name: "guidebookLink", title: "Link Buku Panduan", type: "url" }),
    defineField({ name: "category", title: "Kategori", type: "string" }),
    defineField({ name: "level", title: "Tingkat", type: "string" }),
    defineField({ name: "theme", title: "Tema", type: "string" }),
    defineField({
      name: "poster",
      title: "Poster",
      type: "image",
      options: { hotspot: true },
      fields: [
        defineField({
          name: "alt",
          title: "Alt Text",
          type: "string",
          description: "Teks deskripsi gambar (untuk aksesibilitas & SEO)",
        }),
      ],
    }),
  ],
});