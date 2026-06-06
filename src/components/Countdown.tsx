"use client";

import { useEffect, useState } from "react";

export default function Countdown() {
  const targetDate = new Date("2026-08-01T00:00:00");

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (distance % (1000 * 60 * 60 * 24)) /
            (1000 * 60 * 60)
        ),
        minutes: Math.floor(
          (distance % (1000 * 60 * 60)) /
            (1000 * 60)
        ),
        seconds: Math.floor(
          (distance % (1000 * 60)) / 1000
        ),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mt-16 flex justify-center gap-6">
      {Object.entries(timeLeft).map(([label, value]) => (
        <div
          key={label}
          className="rounded-2xl border border-white/10 bg-white/5 p-5 min-w-[90px]"
        >
          <div className="text-3xl font-bold">
            {value}
          </div>
          <div className="text-sm text-gray-400 capitalize">
            {label}
          </div>
        </div>
      ))}
    </div>
  );
}