import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { client } from "@/sanity/lib/client";
import ScrollToTop from "@/components/ScrollToTop";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const space = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
});

export async function generateMetadata(): Promise<Metadata> {
  const settings = await client.fetch(`*[_type == "siteSettings"][0]{
    version,
    taglineLine1,
    taglineLine2
  }`);

  const version = settings?.version ?? "6.0";
  const tagline =
    [settings?.taglineLine1, settings?.taglineLine2]
      .filter(Boolean)
      .join(" ") || "Let's Collaborate and Shine Brighter";

  return {
    title: `ORION ${version}`,
    description: tagline,
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${space.variable} bg-[#0B1026] text-white`}
      >
        {children}
        <ScrollToTop />
      </body>
    </html>
  );
}