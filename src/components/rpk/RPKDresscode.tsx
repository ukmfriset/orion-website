type DresscodeColor = {
  _key: string;
  name?: string;
  hex?: string;
};

type RPKDresscodeProps = {
  data?: {
    dresscode?: {
      note?: string;
      colors?: DresscodeColor[];
    };
  };
};

const defaultColors: DresscodeColor[] = [
  { _key: "1", name: "Biru", hex: "#3B82F6" },
  { _key: "2", name: "Putih", hex: "#FFFFFF" },
  { _key: "3", name: "Coksu", hex: "#D6B38A" },
];

const defaultNote =
  "Gunakan dresscode sesuai ketentuan agar kebersamaan dan dokumentasi acara terlihat lebih seragam dan berkesan.";

export default function RPKDresscode({ data }: RPKDresscodeProps) {
  const colors =
    data?.dresscode?.colors && data.dresscode.colors.length > 0
      ? data.dresscode.colors
      : defaultColors;

  const note = data?.dresscode?.note ?? defaultNote;

  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <div className="text-center">
          <p className="mb-4 uppercase tracking-[0.3em] text-emerald-400">
            Dresscode
          </p>

          <h2 className="text-5xl font-bold">Tema Pakaian</h2>

          <p className="mx-auto mt-6 max-w-2xl text-gray-400">{note}</p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {colors.map((item) => (
            <div
              key={item._key}
              className="rounded-3xl border border-white/10 bg-white/5 p-10 text-center backdrop-blur-xl"
            >
              <div
                className="mx-auto h-24 w-24 rounded-full border border-white/20"
                style={{ backgroundColor: item.hex ?? "#CCCCCC" }}
              />

              <h3 className="mt-6 text-2xl font-bold">{item.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}