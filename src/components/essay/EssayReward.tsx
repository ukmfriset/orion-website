export default function EssayReward() {
  const rewards = [
    {
      icon: "🥇",
      title: "Juara 1",
      description: "Uang Pembinaan + E-Sertifikat + Trophy",
    },
    {
      icon: "🥈",
      title: "Juara 2",
      description: "Uang Pembinaan + E-Sertifikat + Trophy",
    },
    {
      icon: "🥉",
      title: "Juara 3",
      description: "Uang Pembinaan + E-Sertifikat + Trophy",
    },
    {
      icon: "✨",
      title: "Best Paper",
      description: "E-Sertifikat + Trophy",
    },
    {
      icon: "💡",
      title: "Best Innovation Idea",
      description: "E-Sertifikat + Trophy",
    },
    {
      icon: "🏅",
      title: "Finalis 5 Besar",
      description: "E-Sertifikat Finalis",
    },
  ];

  return (
    <section className="relative z-10 px-6 py-32">

      <div className="mx-auto max-w-7xl">

        <div className="text-center">

          <p className="mb-4 uppercase tracking-[0.3em] text-cyan-400">
            Awards & Recognition
          </p>

          <h2 className="text-5xl font-bold">
            Reward Kemenangan
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-gray-400">
            Apresiasi bagi peserta terbaik yang berhasil
            menghadirkan gagasan inovatif dan berdampak
            untuk mendukung Sustainable Development Goals.
          </p>

        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {rewards.map((reward, index) => (
            <div
              key={index}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-xl transition hover:border-cyan-500/40 hover:-translate-y-1"
            >
              <div className="mb-5 text-6xl">
                {reward.icon}
              </div>

              <h3 className="text-2xl font-bold">
                {reward.title}
              </h3>

              <p className="mt-4 text-gray-400">
                {reward.description}
              </p>
            </div>
          ))}

        </div>

        {/* Sertifikat Peserta */}

        <div className="mt-12 rounded-[32px] border border-cyan-500/20 bg-cyan-500/5 p-8 text-center backdrop-blur-xl">

          <div className="mb-4 text-5xl">
            📜
          </div>

          <h3 className="text-2xl font-bold">
            E-Sertifikat untuk Seluruh Peserta
          </h3>

          <p className="mt-4 text-gray-400">
            Seluruh peserta yang mengikuti National Essay
            Competition ORION 6.0 berhak memperoleh
            E-Sertifikat Kepesertaan.
          </p>

        </div>

      </div>

    </section>
  );
}