import EventCard from "./EventCard";

export default function Events() {
  return (
    <section
      id="events"
      className="relative overflow-hidden px-6 py-32"
    >
      <div className="absolute left-0 top-0 h-[600px] w-[600px] rounded-full bg-purple-500/10 blur-[180px]" />

      <div className="absolute right-0 bottom-0 h-[600px] w-[600px] rounded-full bg-cyan-500/10 blur-[180px]" />

      <div className="relative z-10 mx-auto max-w-7xl">

        <div className="text-center">

          <p className="mb-4 uppercase tracking-[0.3em] text-purple-400">
            Main Programs
          </p>

          <h2 className="text-5xl font-bold">
            Explore ORION 6.0
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-gray-400">
            Tiga program utama yang dirancang untuk
            mendorong kolaborasi, pengembangan kapasitas,
            serta lahirnya gagasan kritis dan inovatif
            bagi generasi muda Indonesia.
          </p>

        </div>

        <div className="mt-20 grid gap-8 lg:grid-cols-3">

          <EventCard
            icon="🏆"
            category="Competition"
            title="National Essay Competition"
            description="Gagasan Kritis dan Inovatif untuk Mendukung Pencapaian SDGs 2030."
            color="bg-gradient-to-r from-cyan-500 to-indigo-500"
            href="/essay-competition"
          />

          <EventCard
            icon="🎙️"
            category="Webinar"
            title="Webinar Nasional"
            description="Write To Sell: Mastering Content Writing and Copywriting For Your Digital Career."
            color="bg-gradient-to-r from-orange-500 to-rose-500"
            href="/webinar"
          />

          <EventCard
            icon="🐋"
            category="Alumni Program"
            title="Riset Pulang Kampus"
            description="Alumni UKMF RISET kembali berbagi inspirasi, pengalaman, dan motivasi kepada anggota."
            color="bg-gradient-to-r from-emerald-500 to-teal-500"
            href="/riset-pulang-kampus"
          />

        </div>

      </div>

    </section>
  );
}