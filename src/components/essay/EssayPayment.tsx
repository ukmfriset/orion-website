export default function EssayPayment() {
  return (
    <section className="relative z-10 px-6 py-32">
      <div className="mx-auto max-w-7xl">

        <div className="text-center">
          <p className="mb-4 uppercase tracking-[0.3em] text-cyan-400">
            Registration Payment
          </p>

          {/* Perbaikan: Ukuran judul lebih proporsional di HP */}
          <h2 className="text-4xl md:text-5xl font-bold">
            Payment Information
          </h2>
        </div>

        {/* Perbaikan: Padding p-6 untuk HP, p-10 untuk layar besar */}
        <div className="mt-16 mx-auto max-w-4xl rounded-[40px] border border-cyan-500/20 bg-white/5 p-6 md:p-10 text-center backdrop-blur-xl">

          <div className="mb-6 text-6xl">
            🏦
          </div>

          <p className="text-gray-400">
            Transfer Biaya Pendaftaran Ke
          </p>

          <h3 className="mt-4 text-3xl font-bold">
            Allo Bank
          </h3>

          {/* Perbaikan: Menambahkan break-all dan teks responsif agar tidak keluar batas */}
          <p className="mt-6 break-all text-4xl font-black text-cyan-400 md:text-5xl">
            085921637677
          </p>

          <p className="mt-4 text-xl text-gray-300">
            a.n. Cici Nur Ausyah
          </p>

          <div className="mt-8 rounded-2xl border border-white/10 bg-black/20 p-5 text-sm text-gray-400">
            Setelah melakukan pembayaran silakan konfirmasi kepada panitia.
          </div>

        </div>

      </div>
    </section>
  );
}