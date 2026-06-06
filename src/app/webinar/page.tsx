import ProgramNavbar from "@/components/program/ProgramNavbar";
import WebinarHero from "@/components/webinar/WebinarHero";
import WebinarInfo from "@/components/webinar/WebinarInfo";
import WebinarPricing from "@/components/webinar/WebinarPricing";
import WebinarSpeakers from "@/components/webinar/WebinarSpeakers";
import WebinarBenefits from "@/components/webinar/WebinarBenefits";
import WebinarPayment from "@/components/webinar/WebinarPayment";
import WebinarContact from "@/components/webinar/WebinarContact";
import WebinarCTA from "@/components/webinar/WebinarCTA";
import Footer from "@/components/Footer";

export default function WebinarPage() {
  return (
    <>
      <ProgramNavbar theme="webinar" />

      <main className="min-h-screen overflow-hidden bg-[#0B1026] text-white">

        <div className="absolute left-0 top-0 h-[800px] w-[800px] rounded-full bg-orange-500/10 blur-[220px]" />

        <div className="absolute right-0 top-[20%] h-[700px] w-[700px] rounded-full bg-amber-500/10 blur-[220px]" />

        <div className="absolute left-[20%] bottom-0 h-[700px] w-[700px] rounded-full bg-rose-500/10 blur-[220px]" />

        <WebinarHero />

        <WebinarInfo />

        <WebinarPricing />

        <div id="speakers">
          <WebinarSpeakers />
        </div>

        <WebinarBenefits />

        <WebinarPayment />

        <div id="contact">
          <WebinarContact />
        </div>

        <WebinarCTA />

        <Footer />

      </main>
    </>
  );
}