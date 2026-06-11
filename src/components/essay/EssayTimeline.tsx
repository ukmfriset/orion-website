type TimelineEvent = {
  _key: string;
  label?: string;
  date?: string;
  status?: "upcoming" | "ongoing" | "done";
};

type EssayTimelineProps = {
  data?: {
    timeline?: {
      events?: TimelineEvent[];
    };
  };
};

const statusStyles: Record<string, string> = {
  done: "border-green-500/30 bg-green-500/5",
  ongoing: "border-cyan-400/40 bg-cyan-500/10",
  upcoming: "border-white/10 bg-white/5",
};

const statusBadge: Record<string, string> = {
  done: "bg-green-500/20 text-green-400",
  ongoing: "bg-cyan-500/20 text-cyan-400",
  upcoming: "bg-white/10 text-gray-400",
};

const statusLabel: Record<string, string> = {
  done: "Selesai",
  ongoing: "Berlangsung",
  upcoming: "Akan Datang",
};

const defaultEvents: TimelineEvent[] = [
  { _key: "1", label: "Gelombang 1", date: "13–20 April 2026", status: "done" },
  { _key: "2", label: "Gelombang 2", date: "21–30 April 2026", status: "done" },
  { _key: "3", label: "Gelombang 3", date: "1–12 Mei 2026", status: "done" },
  { _key: "4", label: "Pengumpulan Karya", date: "13–15 Mei 2026", status: "upcoming" },
  { _key: "5", label: "Penilaian Karya", date: "16–24 Mei 2026", status: "upcoming" },
  { _key: "6", label: "Pengumuman Finalis", date: "25 Mei 2026", status: "upcoming" },
  { _key: "7", label: "Technical Meeting", date: "26 Mei 2026", status: "upcoming" },
  { _key: "8", label: "Presentasi Finalis", date: "30 Mei 2026", status: "upcoming" },
  { _key: "9", label: "Pengumuman Juara", date: "5 Juni 2026", status: "upcoming" },
];

export default function EssayTimeline({ data }: EssayTimelineProps) {
  const events = data?.timeline?.events ?? defaultEvents;

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
          {events.map((item, index) => {
            const status = item.status ?? "upcoming";

            return (
              <div
                key={item._key}
                className={`rounded-[28px] border p-6 backdrop-blur-xl transition duration-300 hover:-translate-y-2 ${statusStyles[status]}`}
              >
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 font-bold text-white">
                    {index + 1}
                  </div>

                  <span
                    className={`rounded-full px-3 py-1 text-xs font-medium ${statusBadge[status]}`}
                  >
                    {statusLabel[status]}
                  </span>
                </div>

                <p className="text-sm font-medium text-cyan-400">
                  {item.date}
                </p>

                <h3 className="mt-3 text-xl font-bold text-white">
                  {item.label}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}