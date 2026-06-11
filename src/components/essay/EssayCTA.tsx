type EssayCTAProps = {
  data?: {
    cta?: {
      heading?: string;
      subheading?: string;
      buttonLabel?: string;
      buttonLink?: string;
    };
  };
};

export default function EssayCTA({ data }: EssayCTAProps) {
  const cta = data?.cta;

  const heading = cta?.heading ?? "Siap Menjadi Bagian Dari National Essay Competition?";
  const subheading =
    cta?.subheading ??
    "Tuangkan gagasan terbaikmu, berikan solusi inovatif untuk Indonesia, dan jadilah bagian dari generasi yang membawa perubahan.";
  const buttonLabel = cta?.buttonLabel ?? "Daftar Sekarang";
  const buttonLink = cta?.buttonLink ?? "#payment";

  return (
    <section
      id="upload"
      className="relative overflow-hidden px-6 py-32"
    >
      <div className="absolute left-0 top-0 h-[600px] w-[600px] rounded-full bg-cyan-500/10 blur-[180px]" />
      <div className="absolute right-0 bottom-0 h-[600px] w-[600px] rounded-full bg-indigo-500/10 blur-[180px]" />

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <h2 className="text-5xl font-bold leading-tight">
          <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
            {heading}
          </span>
        </h2>

        <p className="mx-auto mt-8 max-w-2xl text-lg text-gray-400">
          {subheading}
        </p>

        <div className="mt-12">
          <a
            href={buttonLink}
            className="rounded-full bg-gradient-to-r from-cyan-500 to-indigo-500 px-8 py-4 font-semibold text-white transition hover:scale-105"
          >
            {buttonLabel}
          </a>
        </div>
      </div>
    </section>
  );
}