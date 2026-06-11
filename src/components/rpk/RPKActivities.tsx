type Activity = {
  _key: string;
  title?: string;
  description?: string;
};

type RPKActivitiesProps = {
  data?: {
    activities?: {
      items?: Activity[];
    };
  };
};

const defaultActivities: Activity[] = [
  { _key: "1", title: "Sharing Alumni", description: "Berbagi pengalaman kuliah, karier, dan perjalanan setelah lulus." },
  { _key: "2", title: "Games & Ice Breaking", description: "Mencairkan suasana dan mempererat hubungan antar peserta." },
  { _key: "3", title: "Networking Session", description: "Membangun relasi dan memperluas jaringan keluarga besar RISET." },
  { _key: "4", title: "Makan Bersama", description: "Menikmati kebersamaan dalam suasana santai dan hangat." },
  { _key: "5", title: "Foto & Dokumentasi", description: "Mengabadikan momen kebersamaan yang penuh kenangan." },
];

export default function RPKActivities({ data }: RPKActivitiesProps) {
  const items =
    data?.activities?.items && data.activities.items.length > 0
      ? data.activities.items
      : defaultActivities;

  return (
    <section className="relative px-6 py-24">
      <div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-teal-500/10 blur-[180px]" />

      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <p className="mb-4 uppercase tracking-[0.3em] text-cyan-400">
            Activities
          </p>
          <h2 className="text-5xl font-bold">Agenda Kegiatan</h2>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {items.map((activity) => (
            <div
              key={activity._key}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
            >
              <h3 className="text-2xl font-bold text-emerald-400">
                {activity.title}
              </h3>
              <p className="mt-4 leading-relaxed text-gray-400">
                {activity.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}