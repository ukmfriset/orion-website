import ProgramNavbar from "@/components/program/ProgramNavbar";
import RPKHero from "@/components/rpk/RPKHero";
import RPKInfo from "@/components/rpk/RPKInfo";
import RPKSchedule from "@/components/rpk/RPKSchedule";
import RPKDresscode from "@/components/rpk/RPKDresscode";
import RPKActivities from "@/components/rpk/RPKActivities";
import RPKGallery from "@/components/rpk/RPKGallery";
import RPKLocation from "@/components/rpk/RPKLocation";
import RPKContact from "@/components/rpk/RPKContact";
import RPKCTA from "@/components/rpk/RPKCTA";
import Footer from "@/components/Footer";
import { client } from "@/sanity/lib/client";

async function getSiteSettings() {
  return await client.fetch(`*[_type == "siteSettings"][0]{
    version
  }`);
}

async function getRPKPage() {
  return await client.fetch(`*[_type == "rpk"][0]`);
}

export default async function RPKPage() {
  const settings = await getSiteSettings();
  const rpk = await getRPKPage();

  return (
    <>
      <ProgramNavbar theme="rpk" version={settings?.version ?? "6.0"} ctaLink={rpk?.hero?.registrationLink} />
      <main className="min-h-screen overflow-hidden bg-[#08151A] text-white">
        <RPKHero data={rpk} />
        <RPKInfo data={rpk} />
        <RPKSchedule data={rpk} />
        <RPKDresscode data={rpk} />
        <RPKActivities data={rpk} />
        <RPKGallery data={rpk} />
        <RPKLocation data={rpk} />
        <RPKContact data={rpk} />
        <RPKCTA data={rpk} />
        <Footer />
      </main>
    </>
  );
}