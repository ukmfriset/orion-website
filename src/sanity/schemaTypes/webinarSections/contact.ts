import { defineField, defineType } from "sanity";

export const webinarContact = defineType({
  name: "webinarContact",
  title: "Contact Section Webinar",
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
            defineField({ name: "title", title: "Judul", type: "string", description: "Contoh: Informasi Umum, Konfirmasi Pembayaran" }),
            defineField({ name: "name", title: "Nama", type: "string" }),
            defineField({ name: "phone", title: "Nomor WhatsApp", type: "string", description: "Format: 08xxxxxxxxxx" }),
          ],
        }),
      ],
    }),
  ],
});