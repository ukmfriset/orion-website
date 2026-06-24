import { defineField, defineType } from "sanity";

export const webinarPayment = defineType({
  name: "webinarPayment",
  title: "Payment Section Webinar",
  type: "document",
  fields: [
    defineField({ name: "bankName", title: "Nama Bank", type: "string" }),
    defineField({ name: "accountNumber", title: "Nomor Rekening", type: "string" }),
    defineField({ name: "accountHolder", title: "Atas Nama", type: "string" }),
  ],
});