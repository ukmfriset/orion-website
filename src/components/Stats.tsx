export default function Stats() {
  return (
    <section className="relative overflow-hidden px-6 py-24">
      <div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[180px]" />
      <div className="absolute right-0 bottom-0 h-[500px] w-[500px] rounded-full bg-purple-500/10 blur-[180px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="grid gap-8 rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur-xl md:grid-cols-4">
          <div>
            <h3 className="text-5xl font-bold text-purple-400">
              6+
            </h3>

            <p className="mt-2 text-gray-400">
              Tahun ORION
            </p>
          </div>

          <div>
            <h3 className="text-5xl font-bold text-purple-400">
              1000+
            </h3>

            <p className="mt-2 text-gray-400">
              Peserta
            </p>
          </div>

          <div>
            <h3 className="text-5xl font-bold text-purple-400">
              34
            </h3>

            <p className="mt-2 text-gray-400">
              Provinsi
            </p>
          </div>

          <div>
            <h3 className="text-5xl font-bold text-purple-400">
              3
            </h3>

            <p className="mt-2 text-gray-400">
              Main Events
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}