import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";

type Judge = {
  _key: string;
  name?: string;
  title?: string;
  role?: string;
  description?: string;
  photo?: {
    asset?: any;
    alt?: string;
    hotspot?: any;
    crop?: any;
  };
};

type EssayJudgesProps = {
  data?: {
    judges?: {
      judgeList?: Judge[];
    };
  };
};

const defaultJudges: Judge[] = [
  {
    _key: "1",
    title: "Imamah, S.Kom., M.Kom.",
    role: "Dosen Sistem Informasi UTM | Data Science Expert",
    description:
      "Pakar Data Science bersertifikasi BNSP dengan fokus riset pada Machine Learning. Karya ilmiah beliau telah diakui melalui publikasi di jurnal internasional seperti IEEE Access.",
  },
  {
    _key: "2",
    title: "Ir. Ach. Dafid, S.T., M.T., I.P.P.",
    role: "Dosen Mekatronika UTM | Direktur PT. Mitra Amila Nusantara",
    description:
      "Akademisi dan praktisi profesional dengan kepakaran di bidang AI, IoT, dan Robotika. Beliau merupakan reviewer jurnal internasional bereputasi (Scopus Q3).",
  },
  {
    _key: "3",
    title: "Yuliana Windi Sari, S.Sos., M.Sos.",
    role: "Dosen Sosiologi UTM | Peneliti Sosial & Penulis Buku",
    description:
      "Lulusan terbaik Sosiologi UNAIR (2014) dengan fokus riset pada isu sosial. Beliau aktif mempublikasikan berbagai buku sosiologi kontemporer nasional.",
  },
];

export default function EssayJudges({ data }: EssayJudgesProps) {
  const judgeList = data?.judges?.judgeList ?? defaultJudges;

  return (
    <section className="relative overflow-hidden px-6 py-32">
      <div className="absolute left-0 top-0 h-[600px] w-[600px] rounded-full bg-cyan-500/10 blur-[180px]" />
      <div className="absolute right-0 bottom-0 h-[600px] w-[600px] rounded-full bg-indigo-500/10 blur-[180px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="text-center">
          <p className="mb-4 uppercase tracking-[0.3em] text-cyan-400">
            Meet Our Judges
          </p>

          <h2 className="text-5xl font-bold">
            Dewan Juri Kompetisi
            <span className="mt-2 block bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-500 bg-clip-text text-transparent">
              National Essay Competition
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-gray-400">
            Penilaian dilakukan oleh akademisi dan praktisi profesional yang
            memiliki pengalaman riset, publikasi ilmiah, serta kontribusi nyata
            di bidangnya.
          </p>
        </div>

        <div className="mt-20 grid gap-8 lg:grid-cols-3">
          {judgeList.map((judge) => (
            <div
              key={judge._key}
              className="overflow-hidden rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-cyan-400/30"
            >
              <div className="relative h-[380px] w-full overflow-hidden">
                {judge.photo ? (
                  <Image
                    src={urlFor(judge.photo).width(800).url()}
                    alt={judge.photo.alt ?? judge.title ?? "Foto Juri"}
                    fill
                    className="object-cover transition duration-500 hover:scale-105"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center bg-white/5">
                    <span className="text-4xl text-gray-600">👤</span>
                  </div>
                )}
              </div>

              <div className="p-8">
                <div className="mb-6 h-1 w-20 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500" />

                <h3 className="text-2xl font-bold leading-snug">
                  {judge.title}
                </h3>

                <p className="mt-4 font-medium text-cyan-400">{judge.role}</p>

                <div className="mt-6 h-px bg-white/10" />

                <p className="mt-6 leading-relaxed text-gray-400">
                  {judge.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}