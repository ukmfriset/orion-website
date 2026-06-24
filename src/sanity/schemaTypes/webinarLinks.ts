import { defineField, defineType } from "sanity";

export const webinarLinks = defineType({
  name: "webinarLinks",
  title: "Link Pendaftaran & CP Webinar",
  type: "document",
  fields: [
    defineField({
      name: "webinarRegistrationLink",
      title: "Link Pendaftaran Webinar",
      type: "url",
    }),
  ],
});