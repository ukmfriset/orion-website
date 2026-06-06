export default function Gallery() {
  return (
    <section className="relative overflow-hidden px-6 py-32">
      <div className="absolute left-0 top-0 h-[600px] w-[600px] rounded-full bg-cyan-500/10 blur-[180px]" />
      <div className="absolute right-0 bottom-0 h-[600px] w-[600px] rounded-full bg-blue-500/10 blur-[180px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="text-center">
          <p className="mb-4 uppercase tracking-[0.3em] text-cyan-400">
            Memories
          </p>

          <h2 className="text-5xl font-bold">
            ORION Through The Years
          </h2>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          <div className="h-72 rounded-3xl bg-gradient-to-br from-purple-500/20 to-blue-500/20" />

          <div className="h-72 rounded-3xl bg-gradient-to-br from-pink-500/20 to-purple-500/20" />

          <div className="h-72 rounded-3xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20" />
        </div>
      </div>
    </section>
  );
}