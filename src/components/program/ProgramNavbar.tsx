"use client";

import { useState } from "react";
import Link from "next/link";

type ProgramNavbarProps = {
  theme: "essay" | "webinar" | "rpk";
};

export default function ProgramNavbar({
  theme,
}: ProgramNavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const config = {
    essay: {
      cta: "Daftar Essay",
      ctaLink: "#payment",
      button:
        "bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500",
      navbar:
        "bg-gradient-to-r from-cyan-950/90 via-blue-950/90 to-indigo-950/90 border-cyan-500/20",
    },

    webinar: {
      cta: "Daftar Webinar",
      ctaLink:
        "https://docs.google.com/forms/d/e/1FAIpQLSfhxqttk7pv2d6G_hldF4JfV28MtFKvpRIiAPRKzTtRrp6UYQ/viewform?usp=dialog",
      button:
        "bg-gradient-to-r from-orange-500 to-rose-500 hover:from-orange-400 hover:to-rose-400",
      navbar:
        "bg-gradient-to-r from-orange-950/90 via-amber-950/90 to-rose-950/90 border-orange-500/20",
    },

    rpk: {
      cta: "Daftar RPK",
      ctaLink:
        "https://forms.gle/UtCQcTLxZvgzbmdU7",
      button:
        "bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400",
      navbar:
        "bg-gradient-to-r from-emerald-950/90 via-teal-950/90 to-lime-950/90 border-emerald-500/20",
    },
  };

  const current = config[theme];

  return (
    <header className="fixed top-0 z-50 w-full px-4 py-4">
      <div
        className={`mx-auto max-w-7xl rounded-2xl border backdrop-blur-xl ${current.navbar}`}
      >
        {/* Desktop */}
        <div className="hidden md:flex items-center justify-between px-6 py-4">
          <Link
            href="/"
            className="font-bold tracking-wider text-white"
          >
            ORION 6.0
          </Link>

          <nav className="flex items-center gap-8">
            <Link
              href="/essay-competition"
              className={`text-sm transition ${
                theme === "essay"
                  ? "font-semibold text-white"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              Essay Competition
            </Link>

            <Link
              href="/webinar"
              className={`text-sm transition ${
                theme === "webinar"
                  ? "font-semibold text-white"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              Webinar Nasional
            </Link>

            <Link
              href="/riset-pulang-kampus"
              className={`text-sm transition ${
                theme === "rpk"
                  ? "font-semibold text-white"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              Riset Pulang Kampus
            </Link>
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="rounded-full border border-white/10 px-4 py-2 text-sm text-gray-300 transition hover:bg-white/10 hover:text-white"
            >
              Home
            </Link>

            <a
              href={current.ctaLink}
              target="_blank"
              rel="noopener noreferrer"
              className={`rounded-full px-5 py-2 text-sm font-semibold text-white transition hover:scale-105 ${current.button}`}
            >
              {current.cta}
            </a>
          </div>
        </div>

        {/* Mobile */}
        <div className="md:hidden">
          <div className="flex items-center justify-between px-5 py-4">
            <Link
              href="/"
              className="font-bold tracking-wider text-white"
            >
              ORION 6.0
            </Link>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex flex-col gap-1.5"
            >
              <span className="h-0.5 w-6 bg-white"></span>
              <span className="h-0.5 w-6 bg-white"></span>
              <span className="h-0.5 w-6 bg-white"></span>
            </button>
          </div>

          {isOpen && (
            <div className="border-t border-white/10 px-5 py-5">
              <nav className="flex flex-col gap-4 text-center">
                <Link
                  href="/essay-competition"
                  className={`${
                    theme === "essay"
                      ? "font-semibold text-white"
                      : "text-gray-300"
                  }`}
                >
                  Essay Competition
                </Link>

                <Link
                  href="/webinar"
                  className={`${
                    theme === "webinar"
                      ? "font-semibold text-white"
                      : "text-gray-300"
                  }`}
                >
                  Webinar Nasional
                </Link>

                <Link
                  href="/riset-pulang-kampus"
                  className={`${
                    theme === "rpk"
                      ? "font-semibold text-white"
                      : "text-gray-300"
                  }`}
                >
                  Riset Pulang Kampus
                </Link>

                <div className="mt-4 flex flex-col gap-3">
                  <Link
                    href="/"
                    className="rounded-full border border-white/10 px-4 py-3 text-center text-gray-300"
                  >
                    Home
                  </Link>

                  <a
                    href={current.ctaLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`rounded-full px-4 py-3 text-center font-semibold text-white ${current.button}`}
                  >
                    {current.cta}
                  </a>
                </div>
              </nav>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}