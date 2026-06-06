export default function RPKCTA() {
  return (
    <section
      id="register"
      className="relative overflow-hidden px-6 py-32"
    >

      <div className="absolute left-0 top-0 h-[600px] w-[600px] rounded-full bg-emerald-500/10 blur-[180px]" />

      <div className="absolute right-0 bottom-0 h-[600px] w-[600px] rounded-full bg-cyan-500/10 blur-[180px]" />

      <div className="relative z-10 mx-auto max-w-4xl text-center">

        <h2 className="text-5xl font-bold leading-tight">
          Siap Bernostalgia Bersama
          <span className="block bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Keluarga Besar UKMF RISET?
          </span>
        </h2>

        <p className="mx-auto mt-8 max-w-2xl text-lg text-gray-400">
          Mari kembali pulang, berbagi cerita,
          mempererat silaturahmi, dan mengukir
          kenangan bersama keluarga besar RISET.
        </p>

        <div className="mt-12">

          <a
            href="https://forms.gle/UtCQcTLxZvgzbmdU7"
            className="rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 px-8 py-4 font-semibold text-white transition hover:scale-105"
          >
            Daftar Sekarang
          </a>

        </div>

      </div>

    </section>
  );
}