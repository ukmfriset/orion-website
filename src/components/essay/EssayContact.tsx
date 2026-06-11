type ContactPerson = {
  _key: string;
  name?: string;
  whatsapp?: string;
  role?: string;
};

type EssayContactProps = {
  data?: {
    contact?: {
      contacts?: ContactPerson[];
    };
  };
};

const defaultContacts: ContactPerson[] = [
  { _key: "1", role: "Pendaftaran", name: "Navisa", whatsapp: "085738468626" },
  { _key: "2", role: "Konfirmasi Pembayaran", name: "Eka", whatsapp: "081249528198" },
];

export default function EssayContact({ data }: EssayContactProps) {
  const contacts =
    data?.contact?.contacts && data.contact.contacts.length > 0
      ? data.contact.contacts
      : defaultContacts;

  return (
    <section className="relative z-10 px-6 py-32">
      <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-2">
        {contacts.map((cp) => {
          const waLink = cp.whatsapp
            ? `https://wa.me/${cp.whatsapp.replace(/^0/, "62").replace(/\D/g, "")}`
            : undefined;

          return (
            <div
              key={cp._key}
              className="rounded-3xl border border-white/10 bg-white/5 p-10 text-center"
            >
              <h3 className="text-2xl font-bold">{cp.role}</h3>

              {waLink ? (
                <a
                  href={waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block text-cyan-400 transition hover:text-cyan-300 hover:underline"
                >
                  {cp.whatsapp} ({cp.name})
                </a>
              ) : (
                <p className="mt-4">
                  {cp.whatsapp} ({cp.name})
                </p>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}