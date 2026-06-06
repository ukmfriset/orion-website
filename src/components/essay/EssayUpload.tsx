export default function EssayUpload() {
  return (
    <section className="relative z-10 px-6 py-32">

      <div className="mx-auto max-w-7xl">

        <div className="rounded-[40px] border border-cyan-500/20 bg-white/5 p-16 text-center backdrop-blur-xl">

          <p className="mb-4 uppercase tracking-[0.3em] text-cyan-400">
            Submission Portal
          </p>

          <h2 className="text-5xl font-bold">
            Upload Your Essay
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-gray-400">
            Pastikan karya telah sesuai dengan ketentuan pada buku panduan sebelum melakukan pengunggahan.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">

            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSdnCyB3ZSvkf5VpOdaFiP6fltC1PXYve38hAwxtZI-s7sVaYg/viewform?usp=dialog"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-cyan-500 px-8 py-4 font-bold text-black transition hover:bg-cyan-400"
            >
              Upload Karya
            </a>

          </div>

        </div>

      </div>

    </section>
  );
}