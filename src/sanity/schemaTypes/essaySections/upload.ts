import { defineField, defineType } from "sanity";

export const essayUpload = defineType({
  name: "essayUpload",
  title: "Upload Section",
  type: "document",
 
  fields: [
    defineField({ name: "uploadLink", title: "Link Upload Karya", type: "url" }),
    defineField({ name: "instructions", title: "Instruksi Upload", type: "text" }),
    defineField({
      name: "requirements",
      title: "Persyaratan File",
      type: "array",
      of: [{ type: "string" }],
    }),
  ],
});