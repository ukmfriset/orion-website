type InfoItem = {
  title: string;
  value: string;
};

export default function WebinarInfo() {
  const info: InfoItem[] = [
    {
      title: "Tanggal",
      value: "Minggu, 24 Mei 2026",
    },
    {
      title: "Waktu",
      value: "08.00 WIB – Selesai",
    },
    {
      title: "Tempat",
      value: "Online Via Zoom",
    },
    {
      title: "Peserta",
      value: "Terbuka untuk Umum",
    },
    {
      title: "Pendaftaran",
      value: "30 April – 24 Mei 2026",
    },
  ];

  return (
    <section className="px-6 py-24">

      <div className="mx-auto max-w-7xl">

        <div className="text-center">

          <p className="mb-4 uppercase tracking-[0.3em] text-orange-400">
            Event Information
          </p>

          <h2 className="text-5xl font-bold">
            Info Pelaksanaan
          </h2>

        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-5">

          {info.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-orange-500/20 bg-white/5 p-6 text-center backdrop-blur-xl"
            >
              <h3 className="font-bold text-orange-400">
                {item.title}
              </h3>

              <p className="mt-3 text-gray-300">
                {item.value}
              </p>
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}