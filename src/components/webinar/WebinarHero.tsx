import Image from "next/image";

export default function WebinarHero() {
  return (
    <section className="relative z-10 overflow-hidden px-6 pb-32 pt-[160px] md:pt-[200px]">
      <div className="absolute left-0 top-0 h-[600px] w-[600px] rounded-full bg-orange-500/10 blur-[180px]" />

      <div className="absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-amber-500/10 blur-[180px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div>
            <p className="mb-4 uppercase tracking-[0.3em] text-orange-400">
              ORION 6.0 PRESENTS
            </p>

            <h1 className="bg-gradient-to-r from-orange-400 via-amber-300 to-rose-400 bg-clip-text text-5xl sm:text-6xl font-black text-transparent md:text-7xl">
              Webinar Nasional
            </h1>

            <p className="mt-8 text-2xl font-semibold text-white">
              WRITE TO SELL
            </p>

            <p className="mt-3 max-w-2xl text-lg leading-relaxed text-gray-400">
              Mastering Content Writing and Copywriting
              for Your Digital Career
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSfhxqttk7pv2d6G_hldF4JfV28MtFKvpRIiAPRKzTtRrp6UYQ/viewform?usp=dialog"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-gradient-to-r from-orange-500 to-rose-500 px-8 py-4 font-bold text-white transition hover:scale-105"
              >
                Daftar Sekarang
              </a>
            </div>
          </div>

          <div>
            <div className="relative overflow-hidden rounded-[40px] border border-orange-500/20 bg-white/5 p-3 backdrop-blur-xl">
              <div className="relative h-[450px] md:h-[650px] overflow-hidden rounded-[30px]">
                <Image
                  src="/images/poster/poster-webinar.webp"
                  alt="Poster Webinar Nasional"
                  fill
                  priority
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}