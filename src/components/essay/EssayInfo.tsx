export default function EssayInfo() {
  return (
    <section className="relative z-10 px-6 py-24">

      <div className="mx-auto max-w-7xl">

        <div className="grid gap-8 lg:grid-cols-3">

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
            <h3 className="mb-5 text-2xl font-bold text-cyan-400">
              Jenjang
            </h3>

            <p>SMA / SMK / MA</p>
            <p className="mt-3">Mahasiswa Se-Indonesia</p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
            <h3 className="mb-5 text-2xl font-bold text-cyan-400">
              Subtema
            </h3>

            <p>Mengacu pada buku panduan kompetisi.</p>
          </div>

          <div className="rounded-3xl border border-cyan-500/20 bg-white/5 p-8 backdrop-blur-xl">
  <h3 className="mb-6 text-2xl font-bold text-cyan-400">
    Biaya Pendaftaran
  </h3>

  <div className="space-y-5">

    <div className="flex items-center justify-between rounded-2xl bg-white/5 p-4">
      <span className="text-gray-300">
        Gelombang 1
      </span>

      <span className="text-xl font-bold text-green-400">
        Rp30.000
      </span>
    </div>

    <div className="flex items-center justify-between rounded-2xl bg-white/5 p-4">
      <span className="text-gray-300">
        Gelombang 2
      </span>

      <span className="text-xl font-bold text-yellow-400">
        Rp45.000
      </span>
    </div>

    <div className="flex items-center justify-between rounded-2xl bg-white/5 p-4">
      <span className="text-gray-300">
        Gelombang 3
      </span>

      <span className="text-xl font-bold text-red-400">
        Rp55.000
      </span>
    </div>

  </div>

  <p className="mt-6 text-sm text-gray-500">
    Biaya berlaku untuk setiap karya yang didaftarkan.
  </p>
</div>

        </div>

      </div>

    </section>
  );
}