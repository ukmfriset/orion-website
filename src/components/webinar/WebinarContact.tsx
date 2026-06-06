type Contact = {
  title: string;
  name: string;
  phone: string;
};

export default function WebinarContact() {
  const contacts: Contact[] = [
    {
      title: "Informasi Umum",
      name: "Arik",
      phone: "0858-0849-1215",
    },
    {
      title: "Konfirmasi Pembayaran",
      name: "Mega",
      phone: "0858-1660-1065",
    },
  ];

  return (
    <section className="px-6 py-32">

      <div className="mx-auto max-w-5xl">

        <div className="text-center">

          <p className="mb-4 uppercase tracking-[0.3em] text-orange-400">
            Contact Person
          </p>

          <h2 className="text-5xl font-bold">
            Hubungi Kami
          </h2>

        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2">

          {contacts.map((contact) => (
            <div
              key={contact.phone}
              className="rounded-3xl border border-orange-500/20 bg-white/5 p-8 text-center backdrop-blur-xl"
            >

              <h3 className="text-xl font-bold text-orange-400">
                {contact.title}
              </h3>

              <p className="mt-6 text-2xl font-bold">
                {contact.name}
              </p>

              <p className="mt-3 text-gray-400">
                {contact.phone}
              </p>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}