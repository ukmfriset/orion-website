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
import { client } from "@/sanity/lib/client";

async function getSiteSettings() {
  return await client.fetch(`*[_type == "siteSettings"][0]{
    version
  }`);
}

async function getWebinarPage() {
  return await client.fetch(`*[_type == "webinar"][0]`);
}

export default async function WebinarPage() {
  const settings = await getSiteSettings();
  const webinar = await getWebinarPage();

  return (
    <>
      <ProgramNavbar
        theme="webinar"
        version={settings?.version ?? "6.0"}
        ctaLink={webinar?.hero?.registrationLink}
      />

      <main className="relative min-h-screen overflow-x-hidden bg-[#0B1026] text-white">
        <div className="absolute left-0 top-0 h-[800px] w-[800px] rounded-full bg-orange-500/10 blur-[220px]" />
        <div className="absolute right-0 top-[20%] h-[700px] w-[700px] rounded-full bg-amber-500/10 blur-[220px]" />
        <div className="absolute left-[20%] bottom-0 h-[700px] w-[700px] rounded-full bg-rose-500/10 blur-[220px]" />

        <WebinarHero data={webinar} />
        <WebinarInfo data={webinar} />
        <WebinarPricing data={webinar} />

        <div id="speakers">
          <WebinarSpeakers data={webinar} />
        </div>

        <WebinarBenefits data={webinar} />
        <WebinarPayment data={webinar} />

        <div id="contact">
          <WebinarContact data={webinar} />
        </div>

        <WebinarCTA data={webinar} />
        <Footer />
      </main>
    </>
  );
}