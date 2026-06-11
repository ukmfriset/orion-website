import { defineField, defineType } from "sanity";

export default defineType({
  name: "webinar",
  title: "Webinar Nasional",
  type: "document",

  fields: [
    // ─────────────────────────────────────────
    // HERO SECTION
    // ─────────────────────────────────────────
    defineField({
      name: "hero",
      title: "Hero Section",
      type: "object",
      options: { collapsible: true, collapsed: false },
      fields: [
        defineField({ name: "title", title: "Judul (Nama Webinar)", type: "string" }),
        defineField({ name: "subtitle", title: "Subtitle", type: "string", description: "Contoh: WRITE TO SELL" }),
        defineField({ name: "description", title: "Deskripsi", type: "text" }),
        defineField({ name: "registrationLink", title: "Link Pendaftaran", type: "url" }),
        defineField({
          name: "poster",
          title: "Poster",
          type: "image",
          options: { hotspot: true },
          fields: [
            defineField({ name: "alt", title: "Alt Text", type: "string" }),
          ],
        }),
      ],
    }),

    // ─────────────────────────────────────────
    // INFO SECTION
    // ─────────────────────────────────────────
    defineField({
      name: "info",
      title: "Info Section",
      type: "object",
      options: { collapsible: true, collapsed: true },
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
    }),

    // ─────────────────────────────────────────
    // PRICING SECTION
    // ─────────────────────────────────────────
    defineField({
      name: "pricing",
      title: "Pricing Section",
      type: "object",
      options: { collapsible: true, collapsed: true },
      fields: [
        defineField({
          name: "packages",
          title: "Paket Harga",
          type: "array",
          of: [
            defineField({
              name: "pricingPackage",
              title: "Paket",
              type: "object",
              fields: [
                defineField({ name: "title", title: "Nama Paket", type: "string", description: "Contoh: Satu Orang, Lima Orang" }),
                defineField({ name: "price", title: "Harga", type: "string", description: "Contoh: 10K, 40K" }),
              ],
            }),
          ],
        }),
      ],
    }),

    // ─────────────────────────────────────────
    // SPEAKERS SECTION
    // ─────────────────────────────────────────
    defineField({
      name: "speakers",
      title: "Speakers Section",
      type: "object",
      options: { collapsible: true, collapsed: true },
      fields: [
        defineField({
          name: "speakerList",
          title: "Daftar Pemateri & Moderator",
          type: "array",
          of: [
            defineField({
              name: "speaker",
              title: "Speaker",
              type: "object",
              fields: [
                defineField({ name: "name", title: "Nama", type: "string" }),
                defineField({ name: "role", title: "Role", type: "string", description: "Contoh: Pemateri 1, Moderator 2" }),
                defineField({ name: "desc", title: "Deskripsi", type: "text" }),
                defineField({
                  name: "image",
                  title: "Foto",
                  type: "image",
                  options: { hotspot: true },
                  fields: [
                    defineField({ name: "alt", title: "Alt Text", type: "string" }),
                  ],
                }),
              ],
            }),
          ],
        }),
      ],
    }),

    // ─────────────────────────────────────────
    // BENEFITS SECTION
    // ─────────────────────────────────────────
    defineField({
      name: "benefits",
      title: "Benefits Section",
      type: "object",
      options: { collapsible: true, collapsed: true },
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
    }),

    // ─────────────────────────────────────────
    // PAYMENT SECTION
    // ─────────────────────────────────────────
    defineField({
      name: "payment",
      title: "Payment Section",
      type: "object",
      options: { collapsible: true, collapsed: true },
      fields: [
        defineField({ name: "bankName", title: "Nama Bank", type: "string" }),
        defineField({ name: "accountNumber", title: "Nomor Rekening", type: "string" }),
        defineField({ name: "accountHolder", title: "Atas Nama", type: "string" }),
      ],
    }),

    // ─────────────────────────────────────────
    // CONTACT SECTION
    // ─────────────────────────────────────────
    defineField({
      name: "contact",
      title: "Contact Section",
      type: "object",
      options: { collapsible: true, collapsed: true },
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
    }),

    // ─────────────────────────────────────────
    // CTA SECTION
    // ─────────────────────────────────────────
    defineField({
      name: "cta",
      title: "CTA Section",
      type: "object",
      options: { collapsible: true, collapsed: true },
      fields: [
        defineField({ name: "heading", title: "Heading CTA", type: "string" }),
        defineField({ name: "subheading", title: "Subheading CTA", type: "text" }),
        defineField({ name: "buttonLabel", title: "Label Tombol", type: "string" }),
        defineField({ name: "buttonLink", title: "Link Tombol", type: "url" }),
      ],
    }),
  ],
});