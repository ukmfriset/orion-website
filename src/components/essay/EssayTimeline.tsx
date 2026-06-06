const timeline: {
  date: string;
  title: string;
}[] = [
  {
    date: "13–20 April 2026",
    title: "Gelombang 1",
  },
  {
    date: "21–30 April 2026",
    title: "Gelombang 2",
  },
  {
    date: "1–12 Mei 2026",
    title: "Gelombang 3",
  },
  {
    date: "13–15 Mei 2026",
    title: "Pengumpulan Karya",
  },
  {
    date: "16–24 Mei 2026",
    title: "Penilaian Karya",
  },
  {
    date: "25 Mei 2026",
    title: "Pengumuman Finalis",
  },
  {
    date: "26 Mei 2026",
    title: "Technical Meeting",
  },
  {
    date: "30 Mei 2026",
    title: "Presentasi Finalis",
  },
  {
    date: "5 Juni 2026",
    title: "Pengumuman Juara",
  },
];

export default function EssayTimeline() {
  return (
    <section
      className="relative overflow-hidden px-6 py-32"
      id="timeline"
    >
      <div className="absolute left-0 top-0 h-[600px] w-[600px] rounded-full bg-cyan-500/10 blur-[180px]" />

      <div className="absolute right-0 bottom-0 h-[600px] w-[600px] rounded-full bg-indigo-500/10 blur-[180px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="text-center">
          <p className="mb-4 uppercase tracking-[0.3em] text-cyan-400">
            Competition Schedule
          </p>

          <h2 className="text-5xl font-bold">
            Essay Competition

            <span className="mt-2 block bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-500 bg-clip-text text-transparent">
              Timeline
            </span>
          </h2>
        </div>

        <div className="mt-20 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {timeline.map(
            (
              item: {
                date: string;
                title: string;
              },
              index: number,
            ) => (
              <div
                key={index}
                className="rounded-[28px] border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-cyan-400/30"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 font-bold text-white">
                  {index + 1}
                </div>

                <p className="text-sm font-medium text-cyan-400">
                  {item.date}
                </p>

                <h3 className="mt-3 text-xl font-bold text-white">
                  {item.title}
                </h3>
              </div>
            ),
          )}
        </div>
      </div>
    </section>
  );
}