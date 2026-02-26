import Hero from "../components/Hero";
import About from "../components/About";
import VideoShowcase from "../components/VideoShowcase";
import Services from "../components/Services";
import Properties from "../components/Properties";
import Stats from "../components/Stats";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";
import Pricing from "../components/Pricing";
import FAQ from "../components/FAQ";
import CTABanner from "../components/CTABanner";

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <VideoShowcase />
      <Services />
      <Properties />
      <Stats />
      <Pricing />
      <Testimonials />
      <FAQ />
      <CTABanner />
      <Contact />
    </>
  );
};

export default Home;
