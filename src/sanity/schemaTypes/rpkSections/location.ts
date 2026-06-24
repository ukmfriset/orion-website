import { defineField, defineType } from "sanity";

export const rpkLocation = defineType({
  name: "rpkLocation",
  title: "Location Section RPK",
  type: "document",
  fields: [
    defineField({ name: "venueName", title: "Nama Ruangan", type: "string" }),
    defineField({ name: "universityName", title: "Nama Universitas", type: "string" }),
    defineField({ name: "address", title: "Alamat", type: "string" }),
    defineField({ name: "mapEmbedUrl", title: "URL Embed Google Maps", type: "url" }),
  ],
});