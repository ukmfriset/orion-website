type Activity = {
  title: string;
  description: string;
};

export default function RPKActivities() {
  const activities: Activity[] = [
    {
      title: "Sharing Alumni",
      description:
        "Berbagi pengalaman kuliah, karier, dan perjalanan setelah lulus.",
    },

    {
      title: "Games & Ice Breaking",
      description:
        "Mencairkan suasana dan mempererat hubungan antar peserta.",
    },

    {
      title: "Networking Session",
      description:
        "Membangun relasi dan memperluas jaringan keluarga besar RISET.",
    },

    {
      title: "Makan Bersama",
      description:
        "Menikmati kebersamaan dalam suasana santai dan hangat.",
    },

    {
      title: "Foto & Dokumentasi",
      description:
        "Mengabadikan momen kebersamaan yang penuh kenangan.",
    },
  ];

  return (
    <section className="relative px-6 py-24">

      <div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-teal-500/10 blur-[180px]" />

      <div className="mx-auto max-w-7xl">

        <div className="text-center">

          <p className="mb-4 uppercase tracking-[0.3em] text-cyan-400">
            Activities
          </p>

          <h2 className="text-5xl font-bold">
            Agenda Kegiatan
          </h2>

        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {activities.map((activity) => (
            <div
              key={activity.title}
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