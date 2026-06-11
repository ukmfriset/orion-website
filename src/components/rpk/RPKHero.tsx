import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";

type RPKHeroProps = {
  data?: {
    hero?: {
      title?: string;
      subtitle?: string;
      tagline?: string;
      date?: string;
      time?: string;
      location?: string;
      registrationLink?: string;
      poster?: {
        asset?: any;
        alt?: string;
        hotspot?: any;
        crop?: any;
      };
    };
  };
};

export default function RPKHero({ data }: RPKHeroProps) {
  const hero = data?.hero;

  return (
    <section className="relative overflow-hidden px-6 pb-24 pt-40">
      <div className="absolute left-0 top-0 h-[700px] w-[700px] rounded-full bg-emerald-500/10 blur-[180px]" />
      <div className="absolute right-0 top-0 h-[700px] w-[700px] rounded-full bg-cyan-500/10 blur-[180px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* LEFT */}
          <div>
            <p className="mb-6 uppercase tracking-[0.35em] text-emerald-400">
              ORION 6.0 PRESENTS
            </p>

            <h1 className="text-6xl font-black leading-tight md:text-8xl">
              {hero?.title ?? "RISET"}
              <span className="block bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
                {hero?.subtitle ?? "Pulang Kampus"}
              </span>
            </h1>

            <p className="mt-8 max-w-3xl text-xl text-gray-300">
              {hero?.tagline ?? (
                <>
                  Mengukir Kenangan Bersama,
                  <br />
                  Merangkai Cerita Dalam Sejuta Cinta.
                </>
              )}
            </p>

            <div className="mt-12 flex flex-wrap gap-4">
              <div className="rounded-2xl border border-white/10 bg-white/5 px-6 py-4 backdrop-blur-xl">
                📅 {hero?.date ?? "6 Juni 2026"}
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 px-6 py-4 backdrop-blur-xl">
                🕗 {hero?.time ?? "08.00 WIB - Selesai"}
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 px-6 py-4 backdrop-blur-xl">
                📍 {hero?.location ?? "RKB E-303"}
              </div>
            </div>

            <div className="mt-10">
              <a
                href={hero?.registrationLink ?? "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 px-8 py-4 font-semibold text-white transition hover:scale-105"
              >
                Daftar Sekarang
              </a>
            </div>
          </div>

          {/* RIGHT */}
          <div>
            <div className="relative overflow-hidden rounded-[40px] border border-emerald-500/20 bg-white/5 p-3 backdrop-blur-xl">
              <div className="relative h-[650px] overflow-hidden rounded-[30px]">
                <Image
                  src={
                    hero?.poster
                      ? urlFor(hero.poster).width(1200).url()
                      : "/images/poster/poster-rpk.webp"
                  }
                  alt={hero?.poster?.alt ?? "Poster Riset Pulang Kampus"}
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