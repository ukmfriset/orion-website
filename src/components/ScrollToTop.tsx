"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);
  const pathname = usePathname();

  const gradient =
    pathname === "/essay-competition"
      ? "from-cyan-500 to-blue-500"
      : pathname === "/webinar"
      ? "from-orange-500 to-rose-500"
      : pathname === "/riset-pulang-kampus"
      ? "from-emerald-500 to-teal-500"
      : "from-purple-500 to-cyan-500";

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className={`fixed bottom-8 right-8 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r ${gradient} text-white shadow-lg transition hover:scale-110`}
    >
      ↑
    </button>
  );
}