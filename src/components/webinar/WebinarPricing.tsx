type PricingPackage = {
  title: string;
  price: string;
  color: string;
};

export default function WebinarPricing() {
  const packages: PricingPackage[] = [
    {
      title: "Satu Orang",
      price: "10K",
      color: "text-orange-400",
    },
    {
      title: "Lima Orang",
      price: "40K",
      color: "text-rose-400",
    },
  ];

  return (
    <section className="px-6 py-32">

      <div className="mx-auto max-w-5xl">

        <div className="text-center">

          <p className="mb-4 uppercase tracking-[0.3em] text-orange-400">
            Registration Fee
          </p>

          <h2 className="text-5xl font-bold">
            Tiket Webinar
          </h2>

        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2">

          {packages.map((item) => (
            <div
              key={item.title}
              className="rounded-[32px] border border-orange-500/20 bg-white/5 p-10 text-center backdrop-blur-xl"
            >

              <h3 className="text-3xl font-bold">
                {item.title}
              </h3>

              <p className={`mt-8 text-6xl font-black ${item.color}`}>
                {item.price}
              </p>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}