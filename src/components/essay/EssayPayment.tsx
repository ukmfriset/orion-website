type EssayPaymentProps = {
  data?: {
    payment?: {
      bankName?: string;
      accountNumber?: string;
      accountHolder?: string;
      note?: string;
      confirmationLink?: string;
    };
  };
};

export default function EssayPayment({ data }: EssayPaymentProps) {
  const payment = data?.payment;

  const bankName = payment?.bankName ?? "Allo Bank";
  const accountNumber = payment?.accountNumber ?? "085921637677";
  const accountHolder = payment?.accountHolder ?? "Cici Nur Ausyah";
  const note =
    payment?.note ??
    "Setelah melakukan pembayaran silakan konfirmasi kepada panitia.";
  const confirmationLink = payment?.confirmationLink;

  return (
    <section className="relative z-10 px-6 py-32">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <p className="mb-4 uppercase tracking-[0.3em] text-cyan-400">
            Registration Payment
          </p>

          <h2 className="text-4xl font-bold md:text-5xl">
            Payment Information
          </h2>
        </div>

        <div className="mx-auto mt-16 max-w-4xl rounded-[40px] border border-cyan-500/20 bg-white/5 p-6 text-center backdrop-blur-xl md:p-10">
          <div className="mb-6 text-6xl">🏦</div>

          <p className="text-gray-400">Transfer Biaya Pendaftaran Ke</p>

          <h3 className="mt-4 text-3xl font-bold">{bankName}</h3>

          <p className="mt-6 break-all text-4xl font-black text-cyan-400 md:text-5xl">
            {accountNumber}
          </p>

          <p className="mt-4 text-xl text-gray-300">a.n. {accountHolder}</p>

          <div className="mt-8 rounded-2xl border border-white/10 bg-black/20 p-5 text-sm text-gray-400">
            {note}
          </div>

          {confirmationLink && (
            <a
              href={confirmationLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 px-8 py-4 font-bold text-white transition hover:scale-105"
            >
              Konfirmasi Pembayaran
            </a>
          )}
        </div>
      </div>
    </section>
  );
}