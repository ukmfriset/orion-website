type RPKLocationProps = {
  data?: {
    hero?: {
      location?: string;
    };
    location?: {
      venueName?: string;
      universityName?: string;
      address?: string;
      mapEmbedUrl?: string;
    };
  };
};

export default function RPKLocation({ data }: RPKLocationProps) {
  const loc = data?.location;

  const venueName = loc?.venueName ?? data?.hero?.location ?? "RKB E-303";
  const universityName = loc?.universityName ?? "Universitas Trunojoyo Madura";
  const address = loc?.address ?? "Jl. Raya Telang, Bangkalan";
  const mapEmbedUrl = loc?.mapEmbedUrl;

  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <div className="rounded-[32px] border border-white/10 bg-white/5 p-12 backdrop-blur-xl">
          <div className="text-center">
            <p className="mb-4 uppercase tracking-[0.3em] text-cyan-400">
              Location
            </p>

            <h2 className="text-5xl font-bold">Lokasi Kegiatan</h2>

            <p className="mt-8 text-lg text-gray-300">{venueName}</p>
            <p className="mt-2 text-gray-400">{universityName}</p>
            <p className="text-gray-400">{address}</p>
          </div>

          <div className="mt-10 overflow-hidden rounded-3xl">
            {mapEmbedUrl ? (
              <iframe
                src={mapEmbedUrl}
                width="100%"
                height="320"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-3xl"
              />
            ) : (
              <div className="flex h-80 items-center justify-center rounded-3xl bg-gradient-to-br from-emerald-500/20 to-cyan-500/20">
                <p className="text-sm text-gray-500">
                  Tambahkan URL embed Google Maps di Sanity Studio
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}