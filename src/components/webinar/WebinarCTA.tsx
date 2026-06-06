export default function WebinarCTA() {
  return (
    <section
      id="register"
      className="relative overflow-hidden px-6 py-32"
    >

      <div className="absolute left-0 top-0 h-[600px] w-[600px] rounded-full bg-orange-500/10 blur-[180px]" />

      <div className="absolute right-0 bottom-0 h-[600px] w-[600px] rounded-full bg-rose-500/10 blur-[180px]" />

      <div className="relative z-10 mx-auto max-w-4xl text-center">

        <h2 className="text-5xl font-bold leading-tight">
          Siap Mengembangkan Karier Digitalmu Melalui
          <span className="block bg-gradient-to-r from-orange-400 via-amber-400 to-rose-400 bg-clip-text text-transparent">
            Content Writing & Copywriting?
          </span>
        </h2>

        <p className="mx-auto mt-8 max-w-2xl text-lg text-gray-400">
          Dapatkan insight langsung dari praktisi,
          pelajari strategi menulis yang relevan dengan
          industri, dan bangun personal brandingmu.
        </p>

        <div className="mt-12">

          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSfhxqttk7pv2d6G_hldF4JfV28MtFKvpRIiAPRKzTtRrp6UYQ/viewform?usp=dialog"
            className="rounded-full bg-gradient-to-r from-orange-500 to-rose-500 px-8 py-4 font-semibold text-white transition hover:scale-105"
          >
            Daftar Sekarang
          </a>

        </div>

      </div>

    </section>
  );
}