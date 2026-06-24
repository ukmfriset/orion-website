import { defineField, defineType } from "sanity";

export const rpkInfo = defineType({
  name: "rpkInfo",
  title: "Info Section RPK",
  type: "document",
  fields: [
    defineField({ name: "heading", title: "Judul", type: "string" }),
    defineField({ name: "body", title: "Deskripsi", type: "array", of: [{ type: "text" }], description: "Tiap item = satu paragraf" }),
  ],
});