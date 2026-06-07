export default function Hero() {
  return (
    <section className="relative overflow-hidden px-6 pb-24 pt-40 text-center">

      {/* Main Glow */}

      <div className="absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-purple-500/20 blur-[180px]" />

      <div className="absolute left-0 bottom-0 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[180px]" />

      <div className="absolute right-0 top-1/3 h-[500px] w-[500px] rounded-full bg-fuchsia-500/10 blur-[180px]" />

      <div className="relative z-10 mx-auto max-w-5xl">

        <p className="mb-6 uppercase tracking-[0.35em] text-purple-400">
          Annual Event of UKMF RISET
        </p>

        <h1 className="bg-gradient-to-r from-white via-purple-200 to-fuchsia-300 bg-clip-text text-7xl font-black text-transparent md:text-9xl">
          ORION 6.0
        </h1>

        <h2 className="mt-8 text-3xl font-bold md:text-5xl">

          Let's Collaborate and

          <span className="mt-2 block bg-gradient-to-r from-purple-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
            Shine Brighter
          </span>

        </h2>

        <p className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-gray-400">
          ORION hadir sebagai ruang kolaborasi,
          pengembangan kapasitas, dan lahirnya
          inovasi generasi muda melalui kompetisi,
          webinar nasional, serta jejaring alumni
          yang inspiratif.
        </p>

        <div className="mt-12 flex flex-wrap justify-center gap-4">

          <a
            href="#events"
            className="rounded-full bg-gradient-to-r from-purple-500 via-fuchsia-500 to-cyan-500 px-8 py-4 font-semibold text-white shadow-[0_0_40px_rgba(168,85,247,0.35)] transition hover:scale-105"
          >
            🚀 Explore Events
          </a>

          <a
            href="#timeline"
            className="rounded-full border border-white/10 bg-white/5 px-8 py-4 font-semibold backdrop-blur-xl transition hover:bg-white/10"
          >
            📅 View Timeline
          </a>

        </div>

      </div>

    </section>
  );
}