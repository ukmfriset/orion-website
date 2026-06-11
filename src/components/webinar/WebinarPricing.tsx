type PricingPackage = {
  _key: string;
  title?: string;
  price?: string;
};

type WebinarPricingProps = {
  data?: {
    pricing?: {
      packages?: PricingPackage[];
    };
  };
};

const priceColors = [
  "text-orange-400",
  "text-rose-400",
  "text-amber-400",
  "text-cyan-400",
];

const defaultPackages: PricingPackage[] = [
  { _key: "1", title: "Satu Orang", price: "10K" },
  { _key: "2", title: "Lima Orang", price: "40K" },
];

export default function WebinarPricing({ data }: WebinarPricingProps) {
  const packages =
    data?.pricing?.packages && data.pricing.packages.length > 0
      ? data.pricing.packages
      : defaultPackages;

  return (
    <section className="px-6 py-32">
      <div className="mx-auto max-w-5xl">
        <div className="text-center">
          <p className="mb-4 uppercase tracking-[0.3em] text-orange-400">
            Registration Fee
          </p>

          <h2 className="text-5xl font-bold">Tiket Webinar</h2>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {packages.map((item, i) => (
            <div
              key={item._key}
              className="rounded-[32px] border border-orange-500/20 bg-white/5 p-10 text-center backdrop-blur-xl"
            >
              <h3 className="text-3xl font-bold">{item.title}</h3>

              <p className={`mt-8 text-6xl font-black ${priceColors[i % priceColors.length]}`}>
                {item.price}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}