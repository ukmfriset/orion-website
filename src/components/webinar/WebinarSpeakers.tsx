import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";

type Speaker = {
  _key: string;
  name?: string;
  role?: string;
  desc?: string;
  image?: {
    asset?: any;
    alt?: string;
    hotspot?: any;
    crop?: any;
  };
};

type WebinarSpeakersProps = {
  data?: {
    speakers?: {
      speakerList?: Speaker[];
    };
  };
};

const defaultSpeakers: Speaker[] = [
  {
    _key: "1",
    name: "Nadya Poernamasari",
    role: "Pemateri 1",
    desc: "Lecturer of Communication Science, Trunojoyo University Madura",
  },
  {
    _key: "2",
    name: "Louise Shania Sabela",
    role: "Pemateri 2",
    desc: "Founder Writeyuk! & Cast Clash of Champions S2, Mapres Utama UPH",
  },
  {
    _key: "3",
    name: "Thoyyibatul Insani",
    role: "Moderator 1",
    desc: "Duta Psikologi UTM 2024, Putra Putri UTM",
  },
  {
    _key: "4",
    name: "Monica Christiani H.",
    role: "Moderator 2",
    desc: "Duta Pendidikan Nusantara, Duta Budaya FISIB UTM",
  },
];

export default function WebinarSpeakers({ data }: WebinarSpeakersProps) {
  const speakerList =
    data?.speakers?.speakerList && data.speakers.speakerList.length > 0
      ? data.speakers.speakerList
      : defaultSpeakers;

  return (
    <section className="relative overflow-hidden px-6 py-32">
      <div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-orange-500/10 blur-[180px]" />
      <div className="absolute right-0 bottom-0 h-[500px] w-[500px] rounded-full bg-rose-500/10 blur-[180px]" />

      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <p className="mb-4 uppercase tracking-[0.3em] text-orange-400">
            Speakers & Moderator
          </p>

          <h2 className="text-5xl font-bold">
            Pemateri & Moderator
            <span className="mt-2 block bg-gradient-to-r from-orange-400 via-amber-400 to-rose-500 bg-clip-text text-transparent">
              Webinar Nasional
            </span>
          </h2>
        </div>

        <div className="mt-20 grid gap-8 lg:grid-cols-4">
          {speakerList.map((speaker) => (
            <div
              key={speaker._key}
              className="overflow-hidden rounded-[32px] border border-orange-500/20 bg-white/5 backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-orange-400/40"
            >
              <div className="relative h-[320px] overflow-hidden">
                {speaker.image ? (
                  <Image
                    src={urlFor(speaker.image).width(600).url()}
                    alt={speaker.image.alt ?? speaker.name ?? "Foto Speaker"}
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
                <div className="mb-4 inline-flex rounded-full bg-gradient-to-r from-orange-500 to-rose-500 px-4 py-2 text-xs font-semibold text-white">
                  {speaker.role}
                </div>

                <h3 className="text-xl font-bold">{speaker.name}</h3>

                <p className="mt-4 text-sm leading-relaxed text-gray-400">
                  {speaker.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}