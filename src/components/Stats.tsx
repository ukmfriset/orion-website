type Stat = {
  value: string;
  label: string;
};

type StatsProps = {
  statList?: Stat[];
};

const defaultStats: Stat[] = [
  { value: "6+", label: "Tahun ORION" },
  { value: "1000+", label: "Peserta" },
  { value: "34", label: "Provinsi" },
  { value: "3", label: "Main Events" },
];

export default function Stats({ statList = defaultStats }: StatsProps) {
  return (
    <section className="relative overflow-hidden px-6 py-24">
      <div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[180px]" />
      <div className="absolute right-0 bottom-0 h-[500px] w-[500px] rounded-full bg-purple-500/10 blur-[180px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="grid gap-8 rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur-xl md:grid-cols-4">
          {statList.map((stat) => (
            <div key={stat.label}>
              <h3 className="text-5xl font-bold text-purple-400">
                {stat.value}
              </h3>
              <p className="mt-2 text-gray-400">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}