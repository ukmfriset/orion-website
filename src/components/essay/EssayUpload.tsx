type EssayUploadProps = {
  data?: {
    upload?: {
      uploadLink?: string;
      instructions?: string;
      requirements?: string[];
    };
  };
};

const defaultRequirements = [
  "Format PDF",
  "Maksimal 10MB",
  "Sesuai ketentuan buku panduan",
];

export default function EssayUpload({ data }: EssayUploadProps) {
  const upload = data?.upload;

  const uploadLink = upload?.uploadLink ?? "#";
  const instructions =
    upload?.instructions ??
    "Pastikan karya telah sesuai dengan ketentuan pada buku panduan sebelum melakukan pengunggahan.";
  const requirements =
    upload?.requirements && upload.requirements.length > 0
      ? upload.requirements
      : defaultRequirements;

  return (
    <section className="relative z-10 px-6 py-32">
      <div className="mx-auto max-w-7xl">
        <div className="rounded-[40px] border border-cyan-500/20 bg-white/5 p-10 text-center backdrop-blur-xl md:p-16">
          <p className="mb-4 uppercase tracking-[0.3em] text-cyan-400">
            Submission Portal
          </p>

          <h2 className="text-5xl font-bold">Upload Your Essay</h2>

          <p className="mx-auto mt-6 max-w-3xl text-gray-400">
            {instructions}
          </p>

          {/* Persyaratan File */}
          <div className="mx-auto mt-10 flex max-w-xl flex-wrap justify-center gap-3">
            {requirements.map((req, i) => (
              <span
                key={i}
                className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-300"
              >
                {req}
              </span>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href={uploadLink}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-cyan-500 px-8 py-4 font-bold text-black transition hover:bg-cyan-400"
            >
              Upload Karya
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}