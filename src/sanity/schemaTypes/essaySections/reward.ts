import { defineField, defineType } from "sanity";

export const essayReward = defineType({
  name: "essayReward",
  title: "Reward Section",
  type: "document",
  
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
            defineField({ 
              name: "icon", 
              title: "Icon (Emoji)", 
              type: "string", 
              description: "Contoh: 🥇, 🥈, ✨" 
            }),
            defineField({ 
              name: "rank", 
              title: "Juara", 
              type: "string", 
              description: "Contoh: Juara 1, Best Paper" 
            }),
            defineField({ 
              name: "description", 
              title: "Deskripsi Hadiah", 
              type: "string", 
              description: "Contoh: Uang Pembinaan + E-Sertifikat + Trophy" 
            }),
          ],
        }),
      ],
    }),
    defineField({ 
      name: "participantNote", 
      title: "Catatan Sertifikat Peserta", 
      type: "text", 
      description: "Teks keterangan e-sertifikat untuk seluruh peserta" 
    }),
  ],
});