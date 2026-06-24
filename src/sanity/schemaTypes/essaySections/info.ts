import { defineField, defineType } from "sanity";

export const essayInfo = defineType({
  name: "essayInfo",
  title: "Info Section",
  type: "document",
  fields: [
    defineField({
      name: "educationLevels",
      title: "Jenjang",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "subtheme",
      title: "Subtema",
      type: "array",
      of: [{ type: "string" }],
      description: "Daftar subtema yang tersedia",
    }),
    defineField({
      name: "registrationFees",
      title: "Biaya Pendaftaran",
      type: "array",
      of: [
        defineField({
          name: "registrationFee",
          title: "Biaya per Gelombang",
          type: "object",
          fields: [
            defineField({ name: "wave", title: "Gelombang", type: "string" }),
            defineField({ name: "price", title: "Harga", type: "string" }),
          ],
        }),
      ],
    }),
    defineField({ name: "feeNote", title: "Catatan Biaya", type: "text" }),
  ],
});