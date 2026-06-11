type AboutProps = {
  data?: {
    about?: {
      heading?: string;
      headingHighlight?: string;
      description?: string;
    };
  };
};

export default function About({ data }: AboutProps) {
  const about = data?.about;

  const heading = about?.heading ?? "On Birthday RISET";
  const headingHighlight = about?.headingHighlight ?? "Goes On";
  const description =
    about?.description ??
    "ORION (On Birthday RISET Goes On) merupakan rangkaian acara tahunan dalam rangka memperingati Hari Ulang Tahun UKMF RISET. Mengusung semangat kolaborasi, inovasi, dan pengembangan kapasitas, ORION menjadi wadah bagi generasi muda untuk bertukar gagasan, mengembangkan potensi, serta memberikan kontribusi nyata bagi masyarakat melalui berbagai kegiatan akademik dan non-akademik.";

  return (
    <section
      id="about"
      className="relative overflow-hidden px-6 py-32"
    >
      <div className="absolute left-0 top-0 h-[600px] w-[600px] rounded-full bg-purple-500/10 blur-[180px]" />
      <div className="absolute right-0 bottom-0 h-[600px] w-[600px] rounded-full bg-fuchsia-500/10 blur-[180px]" />

      <div className="relative z-10 mx-auto max-w-5xl text-center">
        <p className="mb-4 uppercase tracking-[0.3em] text-purple-400">
          About ORION
        </p>

        <h2 className="text-5xl font-bold leading-tight">
          {heading}
          <span className="block bg-gradient-to-r from-purple-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
            {headingHighlight}
          </span>
        </h2>

        <p className="mx-auto mt-10 max-w-4xl text-lg leading-relaxed text-gray-400">
          {description}
        </p>
      </div>
    </section>
  );
}