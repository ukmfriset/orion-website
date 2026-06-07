import Image from "next/image";

export default function EssayHero() {
  return (
    <section>

      {/* Perbaikan: Menambahkan px-4 untuk memberi jarak tepi pada layar HP */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* LEFT */}
          <div>
            <p className="mb-6 uppercase tracking-[0.4em] text-cyan-400">
              ORION 6.0 PRESENTS
            </p>

            {/* Perbaikan: Menurunkan ukuran teks agar lebih ramah mobile (mirip WebinarHero) */}
            <h1 className="text-5xl font-black leading-none sm:text-6xl md:text-8xl">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-500 bg-clip-text text-transparent">
                National
              </span>
              <br />
              Essay
              <br />
              Competition
            </h1>

            <p className="mt-8 max-w-2xl text-xl text-gray-300">
              Gagasan Kritis dan Inovatif untuk Mendukung Pencapaian Sustainable
              Development Goals (SDGs) 2030.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="https://example.com/register"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 px-8 py-4 font-bold text-white transition hover:scale-105"
              >
                Daftar Sekarang
              </a>

              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSdnCyB3ZSvkf5VpOdaFiP6fltC1PXYve38hAwxtZI-s7sVaYg/viewform?usp=dialog"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-white/20 px-8 py-4 transition hover:bg-white/10"
              >
                Upload Karya
              </a>

              <a
                href="https://drive.google.com/file/d/1pPnA0jM4OlTpmxf82D5wUaZuiAxAjGDY/view?usp=drivesdk"
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
                  SMA & Perguruan Tinggi
                </p>
              </div>

              <div>
                <p className="text-sm text-gray-500">Tingkat</p>
                <p className="font-semibold text-cyan-400">Nasional</p>
              </div>

              <div>
                <p className="text-sm text-gray-500">Tema</p>
                <p className="font-semibold text-cyan-400">SDGs 2030</p>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div>
            <div className="relative overflow-hidden rounded-[40px] border border-cyan-500/20 bg-white/5 p-3 backdrop-blur-xl">
              {/* Perbaikan: Membuat tinggi poster responsif agar tidak memaksa lebar */}
              <div className="relative h-[450px] overflow-hidden rounded-[30px] sm:h-[550px] lg:h-[650px]">
                <Image
                  src="/images/poster/poster-essay.webp"
                  alt="Poster National Essay Competition"
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