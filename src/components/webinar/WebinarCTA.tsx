export default function WebinarCTA() {
  return (
    <section
      id="register"
      className="relative overflow-hidden px-6 py-24 md:py-32"
    >
      <div className="absolute left-0 top-0 h-[600px] w-[600px] rounded-full bg-orange-500/10 blur-[180px]" />

      <div className="absolute bottom-0 right-0 h-[600px] w-[600px] rounded-full bg-rose-500/10 blur-[180px]" />

      <div className="relative z-10 mx-auto max-w-4xl overflow-hidden text-center">
        <h2 className="text-3xl font-bold leading-tight break-words md:text-5xl">
          Siap Mengembangkan Karier Digitalmu Melalui
          <span className="mt-2 block bg-gradient-to-r from-orange-400 via-amber-400 to-rose-400 bg-clip-text text-transparent">
            Content Writing & Copywriting?
          </span>
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-base text-gray-400 md:mt-8 md:text-lg">
          Dapatkan insight langsung dari praktisi, pelajari strategi menulis
          yang relevan dengan industri, dan bangun personal brandingmu.
        </p>

        <div className="mt-10 md:mt-12">
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSfhxqttk7pv2d6G_hldF4JfV28MtFKvpRIiAPRKzTtRrp6UYQ/viewform?usp=dialog"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex rounded-full bg-gradient-to-r from-orange-500 to-rose-500 px-8 py-4 font-semibold text-white transition hover:scale-105"
          >
            Daftar Sekarang
          </a>
        </div>
      </div>
    </section>
  );
}