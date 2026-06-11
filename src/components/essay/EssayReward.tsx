type Prize = {
  _key: string;
  icon?: string;
  rank?: string;
  description?: string;
};

type EssayRewardProps = {
  data?: {
    reward?: {
      prizes?: Prize[];
      participantNote?: string;
    };
  };
};

const defaultPrizes: Prize[] = [
  { _key: "1", icon: "🥇", rank: "Juara 1", description: "Uang Pembinaan + E-Sertifikat + Trophy" },
  { _key: "2", icon: "🥈", rank: "Juara 2", description: "Uang Pembinaan + E-Sertifikat + Trophy" },
  { _key: "3", icon: "🥉", rank: "Juara 3", description: "Uang Pembinaan + E-Sertifikat + Trophy" },
  { _key: "4", icon: "✨", rank: "Best Paper", description: "E-Sertifikat + Trophy" },
  { _key: "5", icon: "💡", rank: "Best Innovation Idea", description: "E-Sertifikat + Trophy" },
  { _key: "6", icon: "🏅", rank: "Finalis 5 Besar", description: "E-Sertifikat Finalis" },
];

const defaultParticipantNote =
  "Seluruh peserta yang mengikuti National Essay Competition ORION 6.0 berhak memperoleh E-Sertifikat Kepesertaan.";

export default function EssayReward({ data }: EssayRewardProps) {
  const prizes = data?.reward?.prizes ?? defaultPrizes;
  const participantNote = data?.reward?.participantNote ?? defaultParticipantNote;

  return (
    <section className="relative z-10 px-6 py-32">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <p className="mb-4 uppercase tracking-[0.3em] text-cyan-400">
            Awards & Recognition
          </p>

          <h2 className="text-5xl font-bold">Reward Kemenangan</h2>

          <p className="mx-auto mt-6 max-w-3xl text-gray-400">
            Apresiasi bagi peserta terbaik yang berhasil menghadirkan gagasan
            inovatif dan berdampak untuk mendukung Sustainable Development
            Goals.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {prizes.map((reward) => (
            <div
              key={reward._key}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-xl transition hover:-translate-y-1 hover:border-cyan-500/40"
            >
              {reward.icon && (
                <div className="mb-5 text-6xl">{reward.icon}</div>
              )}

              <h3 className="text-2xl font-bold">{reward.rank}</h3>

              <p className="mt-4 text-gray-400">{reward.description}</p>
            </div>
          ))}
        </div>

        {/* Sertifikat Peserta */}
        <div className="mt-12 rounded-[32px] border border-cyan-500/20 bg-cyan-500/5 p-8 text-center backdrop-blur-xl">
          <div className="mb-4 text-5xl">📜</div>

          <h3 className="text-2xl font-bold">
            E-Sertifikat untuk Seluruh Peserta
          </h3>

          <p className="mt-4 text-gray-400">{participantNote}</p>
        </div>
      </div>
    </section>
  );
}