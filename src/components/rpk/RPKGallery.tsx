import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";

type GalleryImage = {
  _key: string;
  asset?: any;
  alt?: string;
  hotspot?: any;
  crop?: any;
};

type RPKGalleryProps = {
  data?: {
    gallery?: {
      images?: GalleryImage[];
    };
  };
};

const defaultImages = [
  "/images/gallery/rpk1.jpg",
  "/images/gallery/rpk2.JPG",
  "/images/gallery/rpk3.JPG",
  "/images/gallery/rpk4.JPG",
];

export default function RPKGallery({ data }: RPKGalleryProps) {
  const sanityImages = data?.gallery?.images;
  const hasSanityImages = sanityImages && sanityImages.length > 0;

  return (
    <section>
      <div className="absolute right-0 bottom-0 h-[600px] w-[600px] rounded-full bg-cyan-500/10 blur-[180px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="text-center">
          <p className="mb-4 uppercase tracking-[0.3em] text-emerald-400">
            Memories
          </p>

          <h2 className="text-5xl font-bold">Memories Through The Years</h2>

          <p className="mx-auto mt-6 max-w-2xl text-gray-400">
            Kilas balik perjalanan dan kenangan keluarga besar UKMF RISET dari
            berbagai generasi.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {hasSanityImages
            ? sanityImages.map((image, index) => (
                <div
                  key={image._key}
                  className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl"
                >
                  <div className="relative aspect-[4/5]">
                    <Image
                      src={urlFor(image).width(600).url()}
                      alt={image.alt ?? `RPK Gallery ${index + 1}`}
                      fill
                      className="object-cover transition duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />
                </div>
              ))
            : defaultImages.map((src, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl"
                >
                  <div className="relative aspect-[4/5]">
                    <Image
                      src={src}
                      alt={`RPK Gallery ${index + 1}`}
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