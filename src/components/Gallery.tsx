import Image from "next/image";

const galleryImages = [
  "/images/gallery/essay1.JPG",
  "/images/gallery/essay2.JPG",
  "/images/gallery/essay3.JPG",
  "/images/gallery/essay4.JPG",
  "/images/gallery/essay5.JPG",
  "/images/gallery/webinar1.JPG",
  "/images/gallery/rpk1.jpg",
  "/images/gallery/rpk2.JPG",
  "/images/gallery/rpk3.JPG",
];

export default function Gallery() {
  return (
    <section className="relative overflow-hidden px-6 py-32">
      <div className="absolute left-0 top-0 h-[600px] w-[600px] rounded-full bg-cyan-500/10 blur-[180px]" />

      <div className="absolute right-0 bottom-0 h-[600px] w-[600px] rounded-full bg-blue-500/10 blur-[180px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="text-center">
          <p className="mb-4 uppercase tracking-[0.3em] text-cyan-400">
            Memories
          </p>

          <h2 className="text-5xl font-bold text-white">
            ORION Through The Years
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-400">
            Dokumentasi perjalanan ORION dari berbagai program,
            mulai dari National Essay Competition, Webinar Nasional,
            hingga Riset Pulang Kampus.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl"
            >
              <div className="relative aspect-[4/3]">
                <Image
                  src={image}
                  alt={`ORION Gallery ${index + 1}`}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-110"
                />
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}