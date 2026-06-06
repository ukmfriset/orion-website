type Benefit = {
  text: string;
};

export default function WebinarBenefits() {
  const benefits: Benefit[] = [
    {
      text: "Wawasan mendalam tentang strategi penulisan konten dan copywriting yang relevan dengan kebutuhan industri saat ini.",
    },
    {
      text: "Motivasi dan tips praktis untuk mengembangkan potensi menulis serta menghadapi dunia kerja digital.",
    },
    {
      text: "Rekaman kegiatan dan file materi PPT content writing & copywriting.",
    },
    {
      text: "E-Sertifikat keikutsertaan sebagai peserta webinar.",
    },
    {
      text: "Hadiah e-wallet untuk peserta terpilih yang paling aktif selama kegiatan berlangsung.",
    },
  ];

  return (
    <section className="px-6 py-32">

      <div className="mx-auto max-w-6xl">

        <div className="text-center">

          <p className="mb-4 uppercase tracking-[0.3em] text-orange-400">
            Benefits
          </p>

          <h2 className="text-5xl font-bold">
            Benefit yang Akan Kamu Dapatkan
          </h2>

        </div>

        <div className="mt-16 grid gap-6">

          {benefits.map((benefit) => (
            <div
              key={benefit.text}
              className="rounded-3xl border border-orange-500/20 bg-white/5 p-6 backdrop-blur-xl"
            >
              <p className="text-lg text-gray-300">
                📌 {benefit.text}
              </p>
            </div>
          ))}

          <div className="rounded-3xl border border-rose-500/20 bg-rose-500/5 p-8 text-center">

            <h3 className="text-2xl font-bold text-rose-400">
              🔥 Bonus Spesial
            </h3>

            <p className="mt-4 text-gray-300">
              Hadiah e-wallet untuk peserta terpilih yang paling aktif selama kegiatan berlangsung.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}