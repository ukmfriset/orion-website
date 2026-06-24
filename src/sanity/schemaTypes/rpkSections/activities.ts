import { defineField, defineType } from "sanity";

export const rpkActivities = defineType({
  name: "rpkActivities",
  title: "Activities Section RPK",
  type: "document",
  fields: [
    defineField({
      name: "items",
      title: "Daftar Agenda",
      type: "array",
      of: [
        defineField({
          name: "activity",
          title: "Agenda",
          type: "object",
          fields: [
            defineField({ name: "title", title: "Judul", type: "string" }),
            defineField({ name: "description", title: "Deskripsi", type: "text" }),
          ],
        }),
      ],
    }),
  ],
});