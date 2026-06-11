type Contact = {
  _key: string;
  title?: string;
  name?: string;
  phone?: string;
};

type WebinarContactProps = {
  data?: {
    contact?: {
      contacts?: Contact[];
    };
  };
};

const defaultContacts: Contact[] = [
  { _key: "1", title: "Informasi Umum", name: "Arik", phone: "0858-0849-1215" },
  { _key: "2", title: "Konfirmasi Pembayaran", name: "Mega", phone: "0858-1660-1065" },
];

export default function WebinarContact({ data }: WebinarContactProps) {
  const contacts =
    data?.contact?.contacts && data.contact.contacts.length > 0
      ? data.contact.contacts
      : defaultContacts;

  return (
    <section className="px-6 py-32">
      <div className="mx-auto max-w-5xl">
        <div className="text-center">
          <p className="mb-4 uppercase tracking-[0.3em] text-orange-400">
            Contact Person
          </p>

          <h2 className="text-5xl font-bold">Hubungi Kami</h2>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {contacts.map((contact) => {
            const waLink = contact.phone
              ? `https://wa.me/${contact.phone.replace(/^0/, "62").replace(/\D/g, "")}`
              : undefined;

            return (
              <div
                key={contact._key}
                className="rounded-3xl border border-orange-500/20 bg-white/5 p-8 text-center backdrop-blur-xl"
              >
                <h3 className="text-xl font-bold text-orange-400">
                  {contact.title}
                </h3>

                <p className="mt-6 text-2xl font-bold">{contact.name}</p>

                {waLink ? (
                  <a
                    href={waLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-block text-gray-400 transition hover:text-orange-400 hover:underline"
                  >
                    {contact.phone}
                  </a>
                ) : (
                  <p className="mt-3 text-gray-400">{contact.phone}</p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}