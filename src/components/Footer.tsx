"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  FaInstagram,
  FaTiktok,
  FaYoutube,
  FaFacebook,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

type FooterProps = {
  version?: string;
  taglineLine1?: string;
  taglineLine2?: string;
  copyrightYear?: string;
};

const socialLinks = [
  {
    icon: FaInstagram,
    label: "@ukmfriset",
    href: "https://www.instagram.com/ukmfriset",
  },
  {
    icon: FaXTwitter,
    label: "@ukmfriset",
    href: "https://www.x.com/ukmfriset",
  },
  {
    icon: FaTiktok,
    label: "@ukmfriset",
    href: "https://www.tiktok.com/@ukmfriset",
  },
  {
    icon: FaYoutube,
    label: "@ukmfriset",
    href: "https://www.youtube.com/@ukmfriset",
  },
  {
    icon: FaFacebook,
    label: "UKMF Riset FISIB UTM",
    href: "https://www.facebook.com/ukmfriset",
  },
  {
    icon: FaLinkedin,
    label: "UKMF Riset FISIB UTM",
    href: "https://www.linkedin.com/company/ukmfriset",
  },
];

export default function Footer({
  version = "6.0",
  taglineLine1 = "Let's Collaborate and",
  taglineLine2 = "Shine Brighter",
  copyrightYear = "2026",
}: FooterProps) {
  const pathname = usePathname();

  const theme =
    pathname === "/essay-competition"
      ? {
          glow1: "bg-cyan-500/10",
          glow2: "bg-blue-500/10",
          accent: "text-cyan-400",
          gradient: "from-cyan-400 via-blue-400 to-indigo-500",
        }
      : pathname === "/webinar"
      ? {
          glow1: "bg-orange-500/10",
          glow2: "bg-rose-500/10",
          accent: "text-orange-400",
          gradient: "from-orange-400 via-amber-400 to-rose-500",
        }
      : pathname === "/riset-pulang-kampus"
      ? {
          glow1: "bg-emerald-500/10",
          glow2: "bg-cyan-500/10",
          accent: "text-emerald-400",
          gradient: "from-emerald-400 via-cyan-400 to-blue-400",
        }
      : {
          glow1: "bg-purple-500/10",
          glow2: "bg-cyan-500/10",
          accent: "text-purple-400",
          gradient: "from-purple-400 via-fuchsia-400 to-cyan-400",
        };

  return (
    <footer className="relative overflow-hidden border-t border-white/10 px-6 py-24">
      <div
        className={`absolute left-0 top-0 h-[600px] w-[600px] rounded-full ${theme.glow1} blur-[180px]`}
      />
      <div
        className={`absolute right-0 bottom-0 h-[600px] w-[600px] rounded-full ${theme.glow2} blur-[180px]`}
      />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="grid gap-16 lg:grid-cols-4">
          <div>
            <Image
              src="/images/sponsors/semangat-berkarya.png"
              alt="UKMF RISET"
              width={350}
              height={350}
              priority
              className="object-contain"
            />

            <h3 className="mt-10 text-3xl font-bold">
              UKM-F RISET FISIB UTM
            </h3>

            <p className="mt-8 leading-relaxed text-gray-400">
              Unit Kegiatan Mahasiswa Fakultas Riset Fakultas Ilmu Sosial dan
              Ilmu Budaya Universitas Trunojoyo Madura.
            </p>
          </div>

          <div>
            <h4 className="mb-8 text-2xl font-bold">Kontak</h4>

            <div className="space-y-5">
              <a
                href="https://wa.me/6285161153723"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-300 transition hover:text-white"
              >
                <FaWhatsapp />
                <span>+62 851-6115-3723</span>
              </a>

              <a
                href="mailto:halo@ukmfriset.or.id"
                className="flex items-center gap-3 text-gray-300 transition hover:text-white"
              >
                <MdEmail />
                <span>halo@ukmfriset.or.id</span>
              </a>
            </div>
          </div>

          <div>
            <h4 className="mb-8 text-2xl font-bold">Sekretariat</h4>

            <p className="leading-relaxed text-gray-400">
              Sekretariat Bersama FISIB UTM
              <br />
              Jl. Raya Telang PO BOX 2
              <br />
              Kamal – Bangkalan
              <br />
              Jawa Timur
            </p>
          </div>

          <div>
            <h4 className="mb-8 text-2xl font-bold">Media Sosial</h4>

            <div className="space-y-5">
              {socialLinks.map(({ icon: Icon, label, href }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-gray-300 transition hover:text-white"
                >
                  <Icon />
                  <span>{label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-20 border-t border-white/10 pt-10 text-center">
          <h4
            className={`bg-gradient-to-r ${theme.gradient} bg-clip-text text-3xl font-bold text-transparent`}
          >
            {taglineLine1}
            <br />
            {taglineLine2}
          </h4>

          <p className="mt-6 text-gray-500">
            © {copyrightYear} ORION {version} • UKM-F RISET FISIB UTM
          </p>
        </div>
      </div>
    </footer>
  );
}