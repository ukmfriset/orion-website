import ProgramNavbar from "@/components/program/ProgramNavbar";
import EssayHero from "@/components/essay/EssayHero";
import EssayInfo from "@/components/essay/EssayInfo";
import EssayTimeline from "@/components/essay/EssayTimeline";
import EssayJudges from "@/components/essay/EssayJudges";
import EssayReward from "@/components/essay/EssayReward";
import EssayPayment from "@/components/essay/EssayPayment";
import EssayUpload from "@/components/essay/EssayUpload";
import EssayContact from "@/components/essay/EssayContact";
import EssayCTA from "@/components/essay/EssayCTA";
import Footer from "@/components/Footer";

import { client } from "@/sanity/lib/client";

async function getSiteSettings() {
  return await client.fetch(`*[_type == "siteSettings"][0]{
    version
  }`);
}

async function getEssayPage() {
  return await client.fetch(`*[_type == "essay"][0]`);
}

export default async function EssayCompetitionPage() {
  const settings = await getSiteSettings();
  const essay = await getEssayPage();

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#07111F] text-white">
      <ProgramNavbar theme="essay" version={settings?.version ?? "6.0"} ctaLink={essay?.hero?.registrationLink} />

      <div className="absolute left-0 top-0 h-[800px] w-[800px] rounded-full bg-cyan-500/10 blur-[220px]" />

      <div className="absolute right-0 top-[30%] h-[700px] w-[700px] rounded-full bg-blue-500/10 blur-[220px]" />

      <div className="absolute left-[20%] bottom-0 h-[700px] w-[700px] rounded-full bg-indigo-500/10 blur-[220px]" />

      <EssayHero data={essay} />

      <EssayInfo data={essay} />

      <EssayTimeline data={essay} />

      <EssayJudges data={essay} />

      <EssayReward data={essay} />

      <EssayPayment data={essay} />

      <EssayUpload data={essay} />

      <EssayContact data={essay} />

      <EssayCTA data={essay} />

      <Footer />
    </main>
  );
}