import Link from "next/link";

type EventCardProps = {
  icon: string;
  category: string;
  title: string;
  description: string;
  color: string;
  href?: string;
};

export default function EventCard({
  icon,
  category,
  title,
  description,
  color,
  href = "#",
}: EventCardProps) {
  return (
    <Link href={href}>
      <div className="group h-full rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-white/20">

        <div className="mb-6 text-6xl">
          {icon}
        </div>

        <div
          className={`mb-5 inline-flex rounded-full px-4 py-2 text-xs font-semibold text-white ${color}`}
        >
          {category}
        </div>

        <h3 className="text-3xl font-bold">
          {title}
        </h3>

        <p className="mt-5 leading-relaxed text-gray-400">
          {description}
        </p>

        <div className="mt-8 flex items-center gap-2 font-medium text-white">
          Learn More
          <span className="transition group-hover:translate-x-1">
            →
          </span>
        </div>

      </div>
    </Link>
  );
}