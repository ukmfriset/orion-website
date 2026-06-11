type ContactPerson = {
  _key: string;
  role?: string;
  name?: string;
  phone?: string;
};

type RPKContactProps = {
  data?: {
    contact?: {
      contacts?: ContactPerson[];
    };
  };
};

const defaultContacts: ContactPerson[] = [
  { _key: "1", role: "Informasi Umum", name: "Nama PIC", phone: "08xxxxxxxxxx" },
];

export default function RPKContact({ data }: RPKContactProps) {
  const contacts =
    data?.contact?.contacts && data.contact.contacts.length > 0
      ? data.contact.contacts
      : defaultContacts;

  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <div className="rounded-[32px] border border-white/10 bg-white/5 p-12 text-center backdrop-blur-xl">
          <p className="mb-4 uppercase tracking-[0.3em] text-emerald-400">
            Contact Person
          </p>

          <h2 className="text-5xl font-bold">Butuh Bantuan?</h2>

          <div className="mt-12 space-y-6">
            {contacts.map((cp) => {
              const waLink = cp.phone
                ? `https://wa.me/${cp.phone.replace(/^0/, "62").replace(/\D/g, "")}`
                : undefined;

              return (
                <div key={cp._key}>
                  <p className="text-lg text-gray-400">{cp.role}</p>

                  <p className="mt-2 text-2xl font-bold">{cp.name}</p>

                  {waLink ? (
                    <a
                      href={waLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-300 transition hover:text-emerald-400 hover:underline"
                    >
                      {cp.phone}
                    </a>
                  ) : (
                    <p className="text-gray-300">{cp.phone}</p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}