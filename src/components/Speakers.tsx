import Image from "next/image";

type Speaker = {
  name: string;
  role: string;
  desc: string;
  image: string;
};

export default function Speakers() {
  const speakers: Speaker[] = [
    {
      name: "Nadya Poernamasari",
      role: "Pemateri 1",
      desc: "Lecturer of Communication Science, Trunojoyo University Madura",
      image: "/images/speakers/pemateri1.jpeg",
    },
    {
      name: "Louise Shania Sabela",
      role: "Pemateri 2",
      desc: "Founder Writeyuk! & Cast Clash of Champions S2, Mapres Utama UPH",
      image: "/images/speakers/pemateri2.jpeg",
    },
    {
      name: "Thoyyibatul Insani",
      role: "Moderator 1",
      desc: "Duta Psikologi UTM 2024, Putra Putri UTM",
      image: "/images/speakers/moderator1.jpeg",
    },
    {
      name: "Monica Christiani H.",
      role: "Moderator 2",
      desc: "Duta Pendidikan Nusantara, Duta Budaya FISIB UTM",
      image: "/images/speakers/moderator2.jpeg",
    },
  ];

  return (
    <section
      id="speakers"
      className="relative overflow-hidden px-6 py-32"
    >
      <div className="absolute left-0 top-0 h-[600px] w-[600px] rounded-full bg-purple-500/10 blur-[180px]" />

      <div className="absolute right-0 bottom-0 h-[600px] w-[600px] rounded-full bg-cyan-500/10 blur-[180px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="text-center">
          <p className="mb-4 uppercase tracking-[0.3em] text-purple-400">
            Featured Speakers
          </p>

          <h2 className="text-5xl font-bold">
            Pemateri & Moderator

            <span className="mt-2 block bg-gradient-to-r from-purple-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
              Webinar Nasional ORION 6.0
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-gray-400">
            Hadir bersama para pemateri inspiratif dan moderator
            berprestasi yang siap berbagi pengalaman, wawasan,
            serta strategi membangun karier di era digital.
          </p>
        </div>

        <div className="mt-20 grid gap-8 lg:grid-cols-4">
          {speakers.map((speaker: Speaker) => (
            <div
              key={speaker.name}
              className="overflow-hidden rounded-[32px] border border-purple-500/20 bg-white/5 backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-purple-400/40"
            >
              <div className="relative h-[320px] overflow-hidden">
                <Image
                  src={speaker.image}
                  alt={speaker.name}
                  fill
                  className="object-cover transition duration-500 hover:scale-105"
                />
              </div>

              <div className="p-8">
                <div className="mb-4 inline-flex rounded-full bg-gradient-to-r from-purple-500 via-fuchsia-500 to-cyan-500 px-4 py-2 text-xs font-semibold text-white">
                  {speaker.role}
                </div>

                <h3 className="text-xl font-bold">
                  {speaker.name}
                </h3>

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