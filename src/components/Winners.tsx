type Winner = {
  icon: string;
  title: string;
  team: string;
  school: string;
};

export default function Winners() {
  const smaWinners: Winner[] = [
    {
      icon: "🥇",
      title: "Juara 1",
      team: "Esyen",
      school: "SMA Unggulan Rushd",
    },
    {
      icon: "🥈",
      title: "Juara 2",
      team: "Rahmat Allah",
      school: "MAN Bangkalan",
    },
    {
      icon: "🥉",
      title: "Juara 3",
      team: "Nanti Aja Nama Timnya",
      school: "SMAN 1 Pamekasan",
    },
    {
      icon: "📄",
      title: "Best Paper",
      team: "Wanto Gankz",
      school: "SMA Trensains Muhammadiyah Sragen",
    },
    {
      icon: "💡",
      title: "Best Innovation Idea",
      team: "Foursma No Counter",
      school: "SMAN 4 Denpasar",
    },
  ];

  const universityWinners: Winner[] = [
    {
      icon: "🥇",
      title: "Juara 1",
      team: "Rafichem-Unand",
      school: "Universitas Andalas",
    },
    {
      icon: "🥈",
      title: "Juara 2",
      team: "Ngejar KPI",
      school: "Institut Teknologi Sepuluh Nopember",
    },
    {
      icon: "🥉",
      title: "Juara 3",
      team: "Penghuni Surga Pak RM",
      school: "Universitas Gadjah Mada",
    },
    {
      icon: "📄",
      title: "Best Paper",
      team: "Institut Pantang Bobok",
      school: "Institut Pertanian Bogor",
    },
    {
      icon: "💡",
      title: "Best Innovation Idea",
      team: "Almara Team",
      school: "Universitas Udayana",
    },
  ];

  return (
    <section
      id="winners"
      className="relative overflow-hidden px-6 py-32"
    >
      <div className="absolute left-0 top-0 h-[600px] w-[600px] rounded-full bg-purple-500/10 blur-[180px]" />

      <div className="absolute right-0 bottom-0 h-[600px] w-[600px] rounded-full bg-cyan-500/10 blur-[180px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="text-center">
          <p className="mb-4 uppercase tracking-[0.3em] text-purple-400">
            Hall of Fame
          </p>

          <h2 className="text-5xl font-bold">
            Essay Competition

            <span className="mt-2 block bg-gradient-to-r from-purple-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
              Winners
            </span>
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-gray-400">
            Apresiasi kepada para peserta terbaik yang
            berhasil menghadirkan gagasan inovatif dan
            solusi inspiratif melalui National Essay
            Competition ORION.
          </p>
        </div>

        <div className="mt-20">
          <h3 className="mb-10 text-center text-3xl font-bold">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-500 bg-clip-text text-transparent">
              🎓 SMA / Sederajat
            </span>
          </h3>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-5">
            {smaWinners.map((winner: Winner) => (
              <div
                key={winner.team}
                className="rounded-[28px] border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-cyan-400/30"
              >
                <div className="text-5xl">{winner.icon}</div>

                <h4 className="mt-4 text-sm font-semibold uppercase tracking-wider text-cyan-400">
                  {winner.title}
                </h4>

                <p className="mt-3 text-lg font-bold text-white">
                  {winner.team}
                </p>

                <p className="mt-2 text-sm text-gray-400">
                  {winner.school}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-24">
          <h3 className="mb-10 text-center text-3xl font-bold">
            <span className="bg-gradient-to-r from-purple-400 via-fuchsia-400 to-pink-500 bg-clip-text text-transparent">
              🏛️ Perguruan Tinggi
            </span>
          </h3>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-5">
            {universityWinners.map((winner: Winner) => (
              <div
                key={winner.team}
                className="rounded-[28px] border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-fuchsia-400/30"
              >
                <div className="text-5xl">{winner.icon}</div>

                <h4 className="mt-4 text-sm font-semibold uppercase tracking-wider text-fuchsia-400">
                  {winner.title}
                </h4>

                <p className="mt-3 text-lg font-bold text-white">
                  {winner.team}
                </p>

                <p className="mt-2 text-sm text-gray-400">
                  {winner.school}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}