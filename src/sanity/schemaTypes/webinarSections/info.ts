import { defineField, defineType } from "sanity";

export const webinarInfo = defineType({
  name: "webinarInfo",
  title: "Info Section Webinar",
  type: "document",
  fields: [
    defineField({
      name: "items",
      title: "Info Items",
      type: "array",
      of: [
        defineField({
          name: "infoItem",
          title: "Info Item",
          type: "object",
          fields: [
            defineField({ name: "title", title: "Label", type: "string", description: "Contoh: Tanggal, Waktu, Tempat" }),
            defineField({ name: "value", title: "Nilai", type: "string" }),
          ],
        }),
      ],
    }),
  ],
});