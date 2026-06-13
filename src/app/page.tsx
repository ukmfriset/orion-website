import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Events from "@/components/Events";
import Stats from "@/components/Stats";
import Timeline from "@/components/Timeline";
import Speakers from "@/components/Speakers";
import Gallery from "@/components/Gallery";
import Winners from "@/components/Winners";
import Sponsors from "@/components/Sponsors";
import Footer from "@/components/Footer";
import { client } from "@/sanity/lib/client";

async function getSiteSettings() {
  return await client.fetch(`*[_type == "siteSettings"][0]{
    version,
    taglineLine1,
    taglineLine2,
    copyrightYear
  }`);
}

async function getEvents() {
  return await client.fetch(`*[_type == "events"][0]{
    sectionTitle,
    sectionDescription,
    eventList
  }`);
}

async function getSpeakers() {
  return await client.fetch(`*[_type == "speakers"][0]{
    sectionTitle,
    sectionDescription,
    speakerList[]{
      name,
      role,
      description,
      image{
        asset->,
        alt
      }
    }
  }`);
}

async function getGallery() {
  return await client.fetch(`*[_type == "gallery"][0]{
    sectionTitle,
    sectionDescription,
    galleryList[]{
      image{
        asset->,
        alt
      }
    }
  }`);
}

export default async function HomePage() {
  const settings = await getSiteSettings();
  const eventsData = await getEvents();
  const speakersData = await getSpeakers();
  const galleryData = await getGallery();

  return (
    <>
      <Navbar version={settings?.version ?? "6.0"} />

      <main className="min-h-screen bg-[#0B1026] text-white">
        <Hero
          version={settings?.version ?? "6.0"}
          taglineLine1={settings?.taglineLine1 ?? "Let's Collaborate and"}
          taglineLine2={settings?.taglineLine2 ?? "Shine Brighter"}
        />

        <About />

        <Events
          sectionTitle={eventsData?.sectionTitle}
          sectionDescription={eventsData?.sectionDescription}
          eventList={eventsData?.eventList}
        />

        <Stats />

        <Timeline />

        <Speakers
          sectionTitle={speakersData?.sectionTitle}
          sectionDescription={speakersData?.sectionDescription}
          speakerList={speakersData?.speakerList}
        />

        <Gallery
          sectionTitle={galleryData?.sectionTitle}
          sectionDescription={galleryData?.sectionDescription}
          galleryList={galleryData?.galleryList}
        />

        <Winners />

        <Sponsors />

        <Footer
          version={settings?.version}
          taglineLine1={settings?.taglineLine1}
          taglineLine2={settings?.taglineLine2}
          copyrightYear={settings?.copyrightYear}
        />
      </main>
    </>
  );
}