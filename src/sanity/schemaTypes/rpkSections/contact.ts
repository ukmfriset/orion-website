import { defineField, defineType } from "sanity";

export const rpkContact = defineType({
  name: "rpkContact",
  title: "Contact Section RPK",
  type: "document",
  fields: [
    defineField({
      name: "contacts",
      title: "Daftar Kontak",
      type: "array",
      of: [
        defineField({
          name: "contactPerson",
          title: "Contact Person",
          type: "object",
          fields: [
            defineField({ name: "role", title: "Peran", type: "string", description: "Contoh: Informasi Umum" }),
            defineField({ name: "name", title: "Nama", type: "string" }),
            defineField({ name: "phone", title: "Nomor WhatsApp", type: "string", description: "Format: 08xxxxxxxxxx" }),
          ],
        }),
      ],
    }),
  ],
});