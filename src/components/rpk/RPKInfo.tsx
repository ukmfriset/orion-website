type RPKInfoProps = {
  data?: {
    info?: {
      heading?: string;
      body?: string[];
    };
  };
};

const defaultHeading = "Tentang Riset Pulang Kampus";
const defaultBody = [
  "Riset Pulang Kampus merupakan program silaturahmi dan reuni keluarga besar UKMF RISET FISIB UTM.",
  "Kegiatan ini menjadi ruang untuk mempererat hubungan antar alumni, anggota aktif, dan pengurus lintas generasi melalui berbagai aktivitas inspiratif, sharing pengalaman, networking, serta momen kebersamaan yang penuh makna.",
];

export default function RPKInfo({ data }: RPKInfoProps) {
  const heading = data?.info?.heading ?? defaultHeading;
  const body =
    data?.info?.body && data.info.body.length > 0
      ? data.info.body
      : defaultBody;

  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-5xl text-center">
        <p className="mb-4 uppercase tracking-[0.3em] text-emerald-400">
          About Event
        </p>

        <h2 className="text-5xl font-bold">{heading}</h2>

        {body.map((paragraph, i) => (
          <p
            key={i}
            className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-gray-400"
          >
            {paragraph}
          </p>
        ))}
      </div>
    </section>
  );
}