export default function Timeline() {
  const timeline = [
    {
      date: "13 Apr – 12 Mei 2026",
      title: "Essay Competition",
      description: "Pendaftaran & Seleksi",
    },
    {
      date: "13 – 24 Mei 2026",
      title: "Essay Competition",
      description: "Pengumpulan & Penilaian Karya",
    },
    {
      date: "30 Mei 2026",
      title: "Essay Final",
      description: "Presentasi Finalis",
    },
    {
      date: "24 Mei 2026",
      title: "Webinar Nasional",
      description: "Pelaksanaan Webinar",
    },
    {
      date: "6 Juni 2026",
      title: "Riset Pulang Kampus",
      description: "Gathering Alumni RISET",
    },
  ];

  return (
    <section
      id="timeline"
      className="relative overflow-hidden px-6 py-32"
    >
      <div className="absolute right-0 top-0 h-[600px] w-[600px] rounded-full bg-blue-500/10 blur-[180px]" />

      <div className="absolute left-0 bottom-0 h-[600px] w-[600px] rounded-full bg-indigo-500/10 blur-[180px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="text-center">
          <p className="mb-4 uppercase tracking-[0.3em] text-purple-400">
            Important Dates
          </p>

          <h2 className="text-5xl font-bold">
            Timeline ORION 6.0
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-gray-400">
            Ringkasan jadwal utama seluruh rangkaian kegiatan
            ORION 6.0 mulai dari kompetisi, webinar nasional,
            hingga program alumni RISET Pulang Kampus.
          </p>
        </div>

        <div className="mt-24">
          <div className="relative mx-auto hidden max-w-6xl xl:block">
            <div className="absolute left-0 top-5 h-[2px] w-full bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500" />
          </div>

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-5">
            {timeline.map((item, index) => (
              <div
                key={index}
                className="relative text-center"
              >
                <div className="mx-auto mb-8 h-10 w-10 rounded-full border border-purple-400 bg-[#0B1026] shadow-[0_0_30px_rgba(168,85,247,0.8)]" />

                <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition hover:border-purple-500/40">
                  <p className="text-sm uppercase tracking-wider text-purple-400">
                    {item.date}
                  </p>

                  <h3 className="mt-4 text-xl font-bold">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm text-gray-400">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}