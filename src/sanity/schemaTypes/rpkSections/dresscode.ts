import { defineField, defineType } from "sanity";

export const rpkDresscode = defineType({
  name: "rpkDresscode",
  title: "Dresscode Section RPK",
  type: "document",
  fields: [
    defineField({ name: "note", title: "Catatan Dresscode", type: "text" }),
    defineField({
      name: "colors",
      title: "Warna Dresscode",
      type: "array",
      of: [
        defineField({
          name: "dresscodeColor",
          title: "Warna",
          type: "object",
          fields: [
            defineField({ name: "name", title: "Nama Warna", type: "string", description: "Contoh: Biru, Putih, Coksu" }),
            defineField({ name: "hex", title: "Kode Warna (HEX)", type: "string", description: "Contoh: #3B82F6, #FFFFFF, #D6B38A" }),
          ],
        }),
      ],
    }),
  ],
});