export default function WebinarPayment() {
  return (
    <section
      id="payment"
      className="relative overflow-hidden px-6 py-32"
    >

      <div className="absolute right-0 top-0 h-[600px] w-[600px] rounded-full bg-rose-500/10 blur-[200px]" />

      <div className="mx-auto max-w-5xl">

        <div className="text-center">

          <p className="mb-4 uppercase tracking-[0.3em] text-orange-400">
            Payment
          </p>

          <h2 className="text-5xl font-bold">
            Rekening Pembayaran
          </h2>

        </div>

        <div className="mt-16 rounded-[40px] border border-orange-500/20 bg-white/5 p-12 text-center backdrop-blur-xl">

          <h3 className="text-3xl font-bold text-orange-400">
            Allo Bank
          </h3>

          <p className="mt-8 text-5xl font-black">
            085921637677
          </p>

          <p className="mt-6 text-xl text-gray-300">
            A.N. Cici Nur Ausyah
          </p>

        </div>

      </div>

    </section>
  );
}