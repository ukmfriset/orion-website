import { defineField, defineType } from "sanity";

export const homeAbout = defineType({
  name: "homeAbout",
  title: "About Section (Halaman Depan)",
  type: "document", // Mengunci tipe sebagai dokumen terpisah
  fields: [
    defineField({ 
      name: "heading", 
      title: "Heading", 
      type: "string", 
      description: "Contoh: On Birthday RISET" 
    }),
    defineField({ 
      name: "headingHighlight", 
      title: "Heading Highlight", 
      type: "string", 
      description: "Contoh: Goes On" 
    }),
    defineField({ 
      name: "description", 
      title: "Deskripsi", 
      type: "text" 
    }),
  ],
});