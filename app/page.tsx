import Navbar from "./components/landing/Navbar";
import Hero from "./components/landing/Hero";
import Stats from "./components/landing/Stats";
import LogoCloud from "./components/landing/LogoCloud";
import Problem from "./components/landing/Problem";
import CritiqueCurrentWay from "./components/landing/CritiqueCurrentWay";
import CritiqueCompetitors from "./components/landing/CritiqueCompetitors";
import CostOfInaction from "./components/landing/CostOfInaction";
import Services from "./components/landing/Services";
import SolutionSteps from "./components/landing/SolutionSteps";
import RSE from "./components/landing/RSE";
import Testimonials from "./components/landing/Testimonials";
import About from "./components/landing/About";
import UrgencyCTA from "./components/landing/UrgencyCTA";
import Contact from "./components/landing/Contact";
import Footer from "./components/landing/Footer";

export default function Home() {
  return (
    <main className="relative bg-[#0F1C35] min-h-screen">
      <Navbar />
      <Hero />
      <Stats />
      <LogoCloud />
      <Problem />
      <CritiqueCurrentWay />
      <CritiqueCompetitors />
      <CostOfInaction />
      <Services />
      <SolutionSteps />
      <RSE />
      <Testimonials />
      <About />
      <UrgencyCTA />
      <Contact />
      <Footer />
    </main>
  );
}
