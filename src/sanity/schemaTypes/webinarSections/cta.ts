import { defineField, defineType } from "sanity";

export const webinarCta = defineType({
  name: "webinarCta",
  title: "CTA Section Webinar",
  type: "document",
  fields: [
    defineField({ name: "heading", title: "Heading CTA", type: "string" }),
    defineField({ name: "subheading", title: "Subheading CTA", type: "text" }),
    defineField({ name: "buttonLabel", title: "Label Tombol", type: "string" }),
    defineField({ name: "buttonLink", title: "Link Tombol", type: "url" }),
  ],
});