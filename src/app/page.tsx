import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Timeline from "@/components/Timeline";
import TravelMap from "@/components/TravelMap";
import Personalities from "@/components/Personalities";
import WallOfLove from "@/components/WallOfLove";
import Gallery from "@/components/Gallery";
import MusicPlayer from "@/components/MusicPlayer";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />
      <div className="section-divider" />
      <Timeline />
      <div className="section-divider" />
      <TravelMap />
      <div className="section-divider" />
      <Personalities />
      <div className="section-divider" />
      <WallOfLove />
      <div className="section-divider" />
      <Gallery />
      <Footer />
      <MusicPlayer />
    </main>
  );
}
