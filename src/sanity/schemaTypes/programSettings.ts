import { defineField, defineType } from "sanity";

export default defineType({
  name: "programSettings",
  title: "Program Settings",
  type: "document",

  fields: [
    defineField({
      name: "essayRegistrationLink",
      title: "Link Pendaftaran Essay",
      type: "url",
    }),

    defineField({
      name: "webinarRegistrationLink",
      title: "Link Pendaftaran Webinar",
      type: "url",
    }),

    defineField({
      name: "rpkRegistrationLink",
      title: "Link Pendaftaran RPK",
      type: "url",
    }),
  ],
});