import { defineField, defineType } from "sanity";

export const essayContact = defineType({
  name: "essayContact",
  title: "Contact Section",
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
            defineField({ name: "name", title: "Nama", type: "string" }),
            defineField({ name: "whatsapp", title: "Nomor WhatsApp", type: "string" }),
            defineField({ name: "role", title: "Divisi / Peran", type: "string" }),
          ],
        }),
      ],
    }),
  ],
});