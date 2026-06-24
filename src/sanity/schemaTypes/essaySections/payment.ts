import { defineField, defineType } from "sanity";

export const essayPayment = defineType({
  name: "essayPayment",
  title: "Payment Section",
  type: "document",

  fields: [
    defineField({ name: "bankName", title: "Nama Bank", type: "string" }),
    defineField({ name: "accountNumber", title: "Nomor Rekening", type: "string" }),
    defineField({ name: "accountHolder", title: "Atas Nama", type: "string" }),
    defineField({ name: "note", title: "Catatan Pembayaran", type: "text" }),
    defineField({ name: "confirmationLink", title: "Link Konfirmasi Pembayaran", type: "url" }),
  ],
});