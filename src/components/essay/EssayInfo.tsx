type RegistrationFee = {
  _key: string;
  wave?: string;
  price?: string;
};

type EssayInfoProps = {
  data?: {
    info?: {
      educationLevels?: string[];
      subtheme?: string[];
      registrationFees?: RegistrationFee[];
      feeNote?: string;
    };
  };
};

const feeColors = [
  "text-green-400",
  "text-yellow-400",
  "text-red-400",
  "text-cyan-400",
  "text-purple-400",
];

export default function EssayInfo({ data }: EssayInfoProps) {
  const info = data?.info;

  const educationLevels = info?.educationLevels ?? [
    "SMA / SMK / MA",
    "Mahasiswa Se-Indonesia",
  ];

  const subthemes = info?.subtheme ?? [
    "Mengacu pada buku panduan kompetisi.",
  ];

  const registrationFees = info?.registrationFees ?? [
    { _key: "1", wave: "Gelombang 1", price: "Rp30.000" },
    { _key: "2", wave: "Gelombang 2", price: "Rp45.000" },
    { _key: "3", wave: "Gelombang 3", price: "Rp55.000" },
  ];

  const feeNote =
    info?.feeNote ?? "Biaya berlaku untuk setiap karya yang didaftarkan.";

  return (
    <section className="relative z-10 px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-3">

          {/* Jenjang */}
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
            <h3 className="mb-5 text-2xl font-bold text-cyan-400">Jenjang</h3>
            <ul className="space-y-3">
              {educationLevels.map((level, i) => (
                <li key={i}>
                  <p>{level}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* Subtema */}
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
            <h3 className="mb-5 text-2xl font-bold text-cyan-400">Subtema</h3>
            <ul className="space-y-3">
              {subthemes.map((item, i) => (
                <li key={i}>
                  <p>{item}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* Biaya Pendaftaran */}
          <div className="rounded-3xl border border-cyan-500/20 bg-white/5 p-8 backdrop-blur-xl">
            <h3 className="mb-6 text-2xl font-bold text-cyan-400">
              Biaya Pendaftaran
            </h3>

            <div className="space-y-5">
              {registrationFees.map((fee, i) => (
                <div
                  key={fee._key}
                  className="flex items-center justify-between rounded-2xl bg-white/5 p-4"
                >
                  <span className="text-gray-300">{fee.wave}</span>
                  <span
                    className={`text-xl font-bold ${feeColors[i % feeColors.length]}`}
                  >
                    {fee.price}
                  </span>
                </div>
              ))}
            </div>

            <p className="mt-6 text-sm text-gray-500">{feeNote}</p>
          </div>

        </div>
      </div>
    </section>
  );
}