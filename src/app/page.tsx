import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Timeline from "@/components/Timeline";
import TravelMap from "@/components/TravelMap";
import Personalities from "@/components/Personalities";
import WallOfLove from "@/components/WallOfLove";
import Gallery from "@/components/Gallery";
import MusicPlayer from "@/components/MusicPlayer";
import Footer from "@/components/Footer";
import SectionDivider from "@/components/SectionDivider";
export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />
      <SectionDivider />
      <Timeline />
      <SectionDivider />
      <TravelMap />
      <SectionDivider />
      <Personalities />
      <SectionDivider />
      <WallOfLove />
      <SectionDivider />
      <Gallery />
      <Footer />
      <MusicPlayer />
    </main>
  );
}
