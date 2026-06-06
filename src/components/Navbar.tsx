"use client";

const menus = [
  "About",
  "Events",
  "Timeline",
  "Blog",
  "Winners",
];

export default function Navbar() {
  return (
    <header className="fixed top-0 z-50 w-full px-4 py-4">
      <div className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/10 bg-[#111936]/80 px-6 py-4 backdrop-blur-xl">
        <div>
          <h1 className="font-bold tracking-wider">
            ORION 6.0
          </h1>
        </div>

        <nav className="hidden gap-8 md:flex">
          {menus.map((menu) => (
            <a
              key={menu}
              href={`#${menu.toLowerCase()}`}
              className="text-sm text-gray-300 transition hover:text-white"
            >
              {menu}
            </a>
          ))}
        </nav>

        <a
  href="#events"
  className="rounded-full bg-purple-600 px-5 py-2 text-sm font-semibold transition hover:bg-purple-500"
>
  🎯 Join The Journey
</a>
      </div>
    </header>
  );
}