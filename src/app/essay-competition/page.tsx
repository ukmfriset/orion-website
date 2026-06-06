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

export default function EssayCompetitionPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#07111F] text-white">

      <ProgramNavbar theme="essay" />

      <div className="absolute left-0 top-0 h-[800px] w-[800px] rounded-full bg-cyan-500/10 blur-[220px]" />
      <div className="absolute right-0 top-[30%] h-[700px] w-[700px] rounded-full bg-blue-500/10 blur-[220px]" />
      <div className="absolute left-[20%] bottom-0 h-[700px] w-[700px] rounded-full bg-indigo-500/10 blur-[220px]" />

      <EssayHero />
      <EssayInfo />
      <EssayTimeline />
      <EssayJudges />
      <EssayReward />
      <EssayPayment />
      <EssayUpload />
      <EssayContact />
      <EssayCTA />
      <Footer />

    </main>
  );
}