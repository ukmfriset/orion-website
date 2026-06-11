import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";

type EssayHeroProps = {
  data?: {
    hero?: {
      title?: string;
      description?: string;
      registrationLink?: string;
      uploadLink?: string;
      guidebookLink?: string;
      category?: string;
      level?: string;
      theme?: string;
      poster?: {
        asset?: any;
        alt?: string;
        hotspot?: any;
        crop?: any;
      };
    };
  };
};

export default function EssayHero({ data }: EssayHeroProps) {
  const hero = data?.hero;

  return (
    <section className="relative z-10 overflow-hidden px-6 pb-32 pt-[160px] md:pt-[200px]">
      <div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[180px]" />
      <div className="absolute right-0 bottom-0 h-[500px] w-[500px] rounded-full bg-indigo-500/10 blur-[180px]" />

      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* LEFT */}
          <div>
            <p className="mb-6 uppercase tracking-[0.4em] text-cyan-400">
              ORION 6.0 PRESENTS
            </p>

            <h1 className="text-5xl font-black leading-none sm:text-6xl md:text-8xl">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-500 bg-clip-text text-transparent">
                {hero?.title ?? "National Essay Competition"}
              </span>
            </h1>

            <p className="mt-8 max-w-2xl text-xl text-gray-300">
              {hero?.description ??
                "Gagasan Kritis dan Inovatif untuk Mendukung Pencapaian Sustainable Development Goals (SDGs) 2030."}
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href={hero?.registrationLink ?? "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 px-8 py-4 font-bold text-white transition hover:scale-105"
              >
                Daftar Sekarang
              </a>

              <a
                href={hero?.uploadLink ?? "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-white/20 px-8 py-4 transition hover:bg-white/10"
              >
                Upload Karya
              </a>

              <a
                href={hero?.guidebookLink ?? "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-white/20 px-8 py-4 transition hover:bg-white/10"
              >
                Buku Panduan
              </a>
            </div>

            <div className="mt-12 flex flex-wrap gap-8">
              <div>
                <p className="text-sm text-gray-500">Kategori</p>
                <p className="font-semibold text-cyan-400">
                  {hero?.category ?? "SMA & Perguruan Tinggi"}
                </p>
              </div>

              <div>
                <p className="text-sm text-gray-500">Tingkat</p>
                <p className="font-semibold text-cyan-400">
                  {hero?.level ?? "Nasional"}
                </p>
              </div>

              <div>
                <p className="text-sm text-gray-500">Tema</p>
                <p className="font-semibold text-cyan-400">
                  {hero?.theme ?? "SDGs 2030"}
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div>
            <div className="overflow-hidden rounded-[40px] border border-cyan-500/20 bg-white/5 p-3 backdrop-blur-xl">
              <div className="relative h-[450px] overflow-hidden rounded-[30px] md:h-[650px]">
                <Image
                  src={
                    hero?.poster
                      ? urlFor(hero.poster).width(1200).url()
                      : "/images/poster/poster-essay.webp"
                  }
                  alt={hero?.poster?.alt ?? "Poster Essay Competition"}
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