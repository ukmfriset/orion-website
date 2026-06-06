type ScheduleItem = {
  title: string;
  value: string;
};

export default function RPKSchedule() {
  const items: ScheduleItem[] = [
    {
      title: "Tanggal",
      value: "6 Juni 2026",
    },
    {
      title: "Waktu",
      value: "08.00 WIB - Selesai",
    },
    {
      title: "Lokasi",
      value: "RKB E-303",
    },
  ];

  return (
    <section className="px-6 py-24">

      <div className="mx-auto max-w-7xl">

        <div className="text-center">

          <p className="mb-4 uppercase tracking-[0.3em] text-cyan-400">
            Schedule
          </p>

          <h2 className="text-5xl font-bold">
            Info Pelaksanaan
          </h2>

        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">

          {items.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-xl"
            >
              <h3 className="text-xl font-semibold text-emerald-400">
                {item.title}
              </h3>

              <p className="mt-4 text-2xl font-bold">
                {item.value}
              </p>
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}