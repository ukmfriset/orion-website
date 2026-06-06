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

export default function RPKPage() {
  return (
    <>
      <ProgramNavbar theme="rpk" />

      <main className="min-h-screen overflow-hidden bg-[#08151A] text-white">

        <RPKHero />

        <RPKInfo />

        <RPKSchedule />

        <RPKDresscode />

        <RPKActivities />

        <RPKGallery />

        <RPKLocation />

        <RPKContact />

        <RPKCTA />

        <Footer />

      </main>
    </>
  );
}