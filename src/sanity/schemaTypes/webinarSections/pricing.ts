import { defineField, defineType } from "sanity";

export const webinarPricing = defineType({
  name: "webinarPricing",
  title: "Pricing Section Webinar",
  type: "document",
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
});