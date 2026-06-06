export default function Sponsors() {
  return (
    <section className="relative overflow-hidden px-6 py-32">
      <div className="absolute left-0 top-0 h-[600px] w-[600px] rounded-full bg-cyan-500/10 blur-[180px]" />
      <div className="absolute right-0 bottom-0 h-[600px] w-[600px] rounded-full bg-purple-500/10 blur-[180px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="text-center">
          <p className="mb-4 uppercase tracking-[0.3em] text-cyan-400">
            Sponsors & Partners
          </p>

          <h2 className="text-5xl font-bold">
            Supported By
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-gray-400">
            Terima kasih kepada seluruh sponsor, media partner,
            dan institusi yang telah mendukung terselenggaranya
            ORION 6.0.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-5">
          {[1, 2, 3, 4, 5].map((item) => (
            <div
              key={item}
              className="flex h-32 items-center justify-center rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl transition hover:border-cyan-500/40"
            >
              <span className="text-gray-400">
                Logo Sponsor
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}