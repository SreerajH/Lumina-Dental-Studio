import Nav from "@/components/Nav";
import MouseTrail from "@/components/MouseTrail";
import Hero from "@/components/Hero";
import Treatments from "@/components/Treatments";
import WhyUs from "@/components/WhyUs";
import Doctors from "@/components/Doctors";
import Reviews from "@/components/Reviews";
import InteriorStrip from "@/components/InteriorStrip";
import Visit from "@/components/Visit";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <MouseTrail />
      <Nav />
      <Hero />
      <Treatments />
      <WhyUs />
      <Doctors />
      <Reviews />
      <InteriorStrip />
      <Visit />
      <Footer />
    </main>
  );
}
