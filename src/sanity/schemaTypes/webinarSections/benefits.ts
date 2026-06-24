import { defineField, defineType } from "sanity";

export const webinarBenefits = defineType({
  name: "webinarBenefits",
  title: "Benefits Section Webinar",
  type: "document",
  fields: [
    defineField({
      name: "items",
      title: "Daftar Benefit",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({ name: "bonusTitle", title: "Judul Bonus", type: "string", description: "Contoh: 🔥 Bonus Spesial" }),
    defineField({ name: "bonusText", title: "Deskripsi Bonus", type: "text" }),
  ],
});