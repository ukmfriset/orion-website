import { defineField, defineType } from "sanity";

export default defineType({
  name: "essay",
  title: "Essay Competition",
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
        defineField({ name: "description", title: "Deskripsi", type: "text" }),
        defineField({ name: "registrationLink", title: "Link Pendaftaran", type: "url" }),
        defineField({ name: "uploadLink", title: "Link Upload", type: "url" }),
        defineField({ name: "guidebookLink", title: "Link Buku Panduan", type: "url" }),
        defineField({ name: "category", title: "Kategori", type: "string" }),
        defineField({ name: "level", title: "Tingkat", type: "string" }),
        defineField({ name: "theme", title: "Tema", type: "string" }),
        defineField({
          name: "poster",
          title: "Poster",
          type: "image",
          options: { hotspot: true },
          fields: [
            // FIX #4: tambah alt text untuk aksesibilitas
            defineField({
              name: "alt",
              title: "Alt Text",
              type: "string",
              description: "Teks deskripsi gambar (untuk aksesibilitas & SEO)",
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
        defineField({
          name: "educationLevels",
          title: "Jenjang",
          type: "array",
          of: [{ type: "string" }],
        }),
        // FIX #3: subtheme diubah jadi array supaya bisa >1 subtema
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
            // FIX #2: tambah name pada object di dalam array
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
    }),

    // ─────────────────────────────────────────
    // TIMELINE SECTION
    // FIX #1: fields tidak lagi kosong
    // ─────────────────────────────────────────
    defineField({
      name: "timeline",
      title: "Timeline Section",
      type: "object",
      options: { collapsible: true, collapsed: true },
      fields: [
        defineField({
          name: "events",
          title: "Daftar Timeline",
          type: "array",
          of: [
            defineField({
              name: "timelineEvent",
              title: "Event",
              type: "object",
              fields: [
                defineField({ name: "label", title: "Nama Kegiatan", type: "string" }),
                defineField({ name: "date", title: "Tanggal", type: "string", description: "Contoh: 1 Januari 2025" }),
                defineField({
                  name: "status",
                  title: "Status",
                  type: "string",
                  options: {
                    list: [
                      { title: "Akan Datang", value: "upcoming" },
                      { title: "Berlangsung", value: "ongoing" },
                      { title: "Selesai", value: "done" },
                    ],
                    layout: "radio",
                  },
                }),
              ],
            }),
          ],
        }),
      ],
    }),

    // ─────────────────────────────────────────
    // JUDGES SECTION
    // FIX #1: fields tidak lagi kosong
    // ─────────────────────────────────────────
    defineField({
      name: "judges",
      title: "Judges Section",
      type: "object",
      options: { collapsible: true, collapsed: true },
      fields: [
        defineField({
          name: "judgeList",
          title: "Daftar Juri",
          type: "array",
          of: [
            defineField({
              name: "judge",
              title: "Juri",
              type: "object",
              fields: [
                defineField({ name: "name", title: "Nama", type: "string" }),
                defineField({ name: "title", title: "Gelar / Nama Lengkap", type: "string" }),
                defineField({ name: "role", title: "Jabatan / Institusi", type: "string" }),
                defineField({ name: "description", title: "Deskripsi", type: "text" }),
                defineField({
                  name: "photo",
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
    // REWARD SECTION
    // FIX #1: fields tidak lagi kosong
    // ─────────────────────────────────────────
    defineField({
      name: "reward",
      title: "Reward Section",
      type: "object",
      options: { collapsible: true, collapsed: true },
      fields: [
        defineField({
          name: "prizes",
          title: "Daftar Hadiah",
          type: "array",
          of: [
            defineField({
              name: "prize",
              title: "Hadiah",
              type: "object",
              fields: [
                defineField({ name: "icon", title: "Icon (Emoji)", type: "string", description: "Contoh: 🥇, 🥈, ✨" }),
                defineField({ name: "rank", title: "Juara", type: "string", description: "Contoh: Juara 1, Best Paper" }),
                defineField({ name: "description", title: "Deskripsi Hadiah", type: "string", description: "Contoh: Uang Pembinaan + E-Sertifikat + Trophy" }),
              ],
            }),
          ],
        }),
        defineField({ name: "participantNote", title: "Catatan Sertifikat Peserta", type: "text", description: "Teks keterangan e-sertifikat untuk seluruh peserta" }),
      ],
    }),

    // ─────────────────────────────────────────
    // PAYMENT SECTION
    // FIX #1: fields tidak lagi kosong
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
        defineField({ name: "note", title: "Catatan Pembayaran", type: "text" }),
        defineField({
          name: "confirmationLink",
          title: "Link Konfirmasi Pembayaran",
          type: "url",
        }),
      ],
    }),

    // ─────────────────────────────────────────
    // UPLOAD SECTION
    // FIX #1: fields tidak lagi kosong
    // ─────────────────────────────────────────
    defineField({
      name: "upload",
      title: "Upload Section",
      type: "object",
      options: { collapsible: true, collapsed: true },
      fields: [
        defineField({ name: "uploadLink", title: "Link Upload Karya", type: "url" }),
        defineField({ name: "instructions", title: "Instruksi Upload", type: "text" }),
        defineField({
          name: "requirements",
          title: "Persyaratan File",
          type: "array",
          of: [{ type: "string" }],
          description: "Contoh: Format PDF, Maks. 10MB, dll.",
        }),
      ],
    }),

    // ─────────────────────────────────────────
    // CONTACT SECTION
    // FIX #1: fields tidak lagi kosong
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
                defineField({ name: "name", title: "Nama", type: "string" }),
                defineField({ name: "whatsapp", title: "Nomor WhatsApp", type: "string", description: "Format: 628xxxxxxxxxx" }),
                defineField({ name: "role", title: "Divisi / Peran", type: "string" }),
              ],
            }),
          ],
        }),
      ],
    }),

    // ─────────────────────────────────────────
    // CTA SECTION
    // FIX #1: fields tidak lagi kosong
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