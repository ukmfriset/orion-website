export default function Blog() {
  return (
    <section
      id="blog"
      className="relative overflow-hidden px-6 py-32"
    >
      <div className="absolute left-0 top-0 h-[600px] w-[600px] rounded-full bg-violet-500/10 blur-[180px]" />
      <div className="absolute right-0 bottom-0 h-[600px] w-[600px] rounded-full bg-fuchsia-500/10 blur-[180px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="text-center">
          <p className="mb-4 uppercase tracking-[0.3em] text-purple-400">
            Latest Updates
          </p>

          <h2 className="text-5xl font-bold">
            ORION News & Articles
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-gray-400">
            Informasi terbaru, artikel inspiratif, serta berbagai
            kabar seputar kegiatan ORION dan UKMF RISET.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition hover:border-purple-500/40">
            <div className="mb-5 h-52 rounded-2xl bg-gradient-to-br from-purple-500/20 to-blue-500/20" />

            <p className="text-sm text-purple-400">
              15 Juni 2026
            </p>

            <h3 className="mt-3 text-2xl font-bold">
              ORION 6.0 Officially Launches
            </h3>

            <p className="mt-4 text-gray-400">
              ORION kembali hadir sebagai wadah kolaborasi,
              inovasi, dan pengembangan kapasitas generasi muda.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition hover:border-blue-500/40">
            <div className="mb-5 h-52 rounded-2xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20" />

            <p className="text-sm text-blue-400">
              20 Juni 2026
            </p>

            <h3 className="mt-3 text-2xl font-bold">
              National Essay Registration Open
            </h3>

            <p className="mt-4 text-gray-400">
              Pendaftaran kompetisi esai nasional resmi dibuka
              untuk mahasiswa seluruh Indonesia.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition hover:border-pink-500/40">
            <div className="mb-5 h-52 rounded-2xl bg-gradient-to-br from-pink-500/20 to-purple-500/20" />

            <p className="text-sm text-pink-400">
              1 Juli 2026
            </p>

            <h3 className="mt-3 text-2xl font-bold">
              Webinar Speaker Announcement
            </h3>

            <p className="mt-4 text-gray-400">
              Nantikan pengumuman narasumber inspiratif yang akan
              hadir pada Webinar Nasional ORION 6.0.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}