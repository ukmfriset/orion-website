type WebinarBenefitsProps = {
  data?: {
    benefits?: {
      items?: string[];
      bonusTitle?: string;
      bonusText?: string;
    };
  };
};

const defaultBenefits = [
  "Wawasan mendalam tentang strategi penulisan konten dan copywriting yang relevan dengan kebutuhan industri saat ini.",
  "Motivasi dan tips praktis untuk mengembangkan potensi menulis serta menghadapi dunia kerja digital.",
  "Rekaman kegiatan dan file materi PPT content writing & copywriting.",
  "E-Sertifikat keikutsertaan sebagai peserta webinar.",
];

const defaultBonusTitle = "🔥 Bonus Spesial";
const defaultBonusText =
  "Hadiah e-wallet untuk peserta terpilih yang paling aktif selama kegiatan berlangsung.";

export default function WebinarBenefits({ data }: WebinarBenefitsProps) {
  const items =
    data?.benefits?.items && data.benefits.items.length > 0
      ? data.benefits.items
      : defaultBenefits;

  const bonusTitle = data?.benefits?.bonusTitle ?? defaultBonusTitle;
  const bonusText = data?.benefits?.bonusText ?? defaultBonusText;

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
          {items.map((benefit, i) => (
            <div
              key={i}
              className="rounded-3xl border border-orange-500/20 bg-white/5 p-6 backdrop-blur-xl"
            >
              <p className="text-lg text-gray-300">📌 {benefit}</p>
            </div>
          ))}

          {/* Bonus Spesial */}
          <div className="rounded-3xl border border-rose-500/20 bg-rose-500/5 p-8 text-center">
            <h3 className="text-2xl font-bold text-rose-400">{bonusTitle}</h3>
            <p className="mt-4 text-gray-300">{bonusText}</p>
          </div>
        </div>
      </div>
    </section>
  );
}