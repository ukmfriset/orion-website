export default function RPKGallery() {
  return (
    <section className="px-6 py-24">

      <div className="mx-auto max-w-7xl">

        <div className="text-center">

          <p className="mb-4 uppercase tracking-[0.3em] text-emerald-400">
            Memories
          </p>

          <h2 className="text-5xl font-bold">
            Memories Through The Years
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-gray-400">
            Kilas balik perjalanan dan kenangan keluarga
            besar UKMF RISET dari berbagai generasi.
          </p>

        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

          {[1, 2, 3, 4].map((item) => (
            <div
              key={item}
              className="h-72 rounded-3xl border border-white/10 bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 backdrop-blur-xl"
            />
          ))}

        </div>

      </div>

    </section>
  );
}