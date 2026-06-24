import { defineField, defineType } from "sanity";

export const risetLinks = defineType({
  name: "risetLinks",
  title: "Link Pendaftaran & CP Riset",
  type: "document",
  fields: [
    defineField({
      name: "rpkRegistrationLink",
      title: "Link Pendaftaran RPK",
      type: "url",
    }),
  ],
});