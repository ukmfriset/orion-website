import { defineField, defineType } from "sanity";

export default defineType({
  name: "rpk",
  title: "Riset Pulang Kampus",
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
        defineField({ name: "title", title: "Judul", type: "string" }),
        defineField({ name: "subtitle", title: "Subtitle", type: "string" }),
        defineField({ name: "tagline", title: "Tagline", type: "text", description: "Contoh: Mengukir Kenangan Bersama..." }),
        defineField({ name: "date", title: "Tanggal", type: "string", description: "Contoh: 6 Juni 2026" }),
        defineField({ name: "time", title: "Waktu", type: "string", description: "Contoh: 08.00 WIB - Selesai" }),
        defineField({ name: "location", title: "Lokasi", type: "string", description: "Contoh: RKB E-303" }),
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
    // ACTIVITIES SECTION
    // ─────────────────────────────────────────
    defineField({
      name: "activities",
      title: "Activities Section",
      type: "object",
      options: { collapsible: true, collapsed: true },
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
        defineField({ name: "heading", title: "Judul", type: "string" }),
        defineField({ name: "body", title: "Deskripsi", type: "array", of: [{ type: "text" }], description: "Tiap item = satu paragraf" }),
      ],
    }),

    // ─────────────────────────────────────────
    // DRESSCODE SECTION
    // ─────────────────────────────────────────
    defineField({
      name: "dresscode",
      title: "Dresscode Section",
      type: "object",
      options: { collapsible: true, collapsed: true },
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
    }),

    // ─────────────────────────────────────────
    // GALLERY SECTION
    // ─────────────────────────────────────────
    defineField({
      name: "gallery",
      title: "Gallery Section",
      type: "object",
      options: { collapsible: true, collapsed: true },
      fields: [
        defineField({
          name: "images",
          title: "Foto Gallery",
          type: "array",
          of: [
            defineField({
              name: "galleryImage",
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
                defineField({ name: "role", title: "Peran", type: "string", description: "Contoh: Informasi Umum" }),
                defineField({ name: "name", title: "Nama", type: "string" }),
                defineField({ name: "phone", title: "Nomor WhatsApp", type: "string", description: "Format: 08xxxxxxxxxx" }),
              ],
            }),
          ],
        }),
      ],
    }),

    // ─────────────────────────────────────────
    // LOCATION SECTION
    // ─────────────────────────────────────────
    defineField({
      name: "location",
      title: "Location Section",
      type: "object",
      options: { collapsible: true, collapsed: true },
      fields: [
        defineField({ name: "venueName", title: "Nama Ruangan", type: "string", description: "Contoh: RKB E-303" }),
        defineField({ name: "universityName", title: "Nama Universitas", type: "string", description: "Contoh: Universitas Trunojoyo Madura" }),
        defineField({ name: "address", title: "Alamat", type: "string", description: "Contoh: Jl. Raya Telang, Bangkalan" }),
        defineField({ name: "mapEmbedUrl", title: "URL Embed Google Maps", type: "url", description: "Ambil dari Google Maps > Share > Embed a map > salin src iframe-nya" }),
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