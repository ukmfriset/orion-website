type DresscodeColor = {
  name: string;
  color: string;
};

export default function RPKDresscode() {
  const colors: DresscodeColor[] = [
    {
      name: "Biru",
      color: "bg-blue-500",
    },
    {
      name: "Putih",
      color: "bg-white",
    },
    {
      name: "Coksu",
      color: "bg-[#D6B38A]",
    },
  ];

  return (
    <section className="px-6 py-24">

      <div className="mx-auto max-w-5xl">

        <div className="text-center">

          <p className="mb-4 uppercase tracking-[0.3em] text-emerald-400">
            Dresscode
          </p>

          <h2 className="text-5xl font-bold">
            Tema Pakaian
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-gray-400">
            Gunakan dresscode sesuai ketentuan agar
            kebersamaan dan dokumentasi acara terlihat
            lebih seragam dan berkesan.
          </p>

        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">

          {colors.map((item) => (
            <div
              key={item.name}
              className="rounded-3xl border border-white/10 bg-white/5 p-10 text-center backdrop-blur-xl"
            >
              <div
                className={`mx-auto h-24 w-24 rounded-full ${item.color}`}
              />

              <h3 className="mt-6 text-2xl font-bold">
                {item.name}
              </h3>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}