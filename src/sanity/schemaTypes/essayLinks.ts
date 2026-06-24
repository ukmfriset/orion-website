import { defineField, defineType } from "sanity";

// Ganti "export default defineType" menjadi "export const essayLinks = defineType"
export const essayLinks = defineType({
  name: "essayLinks", 
  title: "Link Pendaftaran & CP Essay",
  type: "document",
  fields: [
    defineField({
      name: "essayRegistrationLink",
      title: "Link Pendaftaran Essay",
      type: "url",
    }),
  ],
});