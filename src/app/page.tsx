import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Events from "@/components/Events";
import Stats from "@/components/Stats";
import Timeline from "@/components/Timeline";
import Speakers from "@/components/Speakers";
import Blog from "@/components/Blog";
import Gallery from "@/components/Gallery";
import Winners from "@/components/Winners";
import Sponsors from "@/components/Sponsors";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#0B1026] text-white">
        <Hero />
        <About />
        <Events />
        <Stats />
        <Timeline />
        <Speakers />
        <Blog />
        <Gallery />
        <Winners />
        <Sponsors/>
        <Footer />
      </main>
    </>
  );
}