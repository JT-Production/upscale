import Main  from "./components/Main";
import Hero from "./components/CTA";
import CTA from "./components/HeroSection";
import InfiniteSection from "./components/InfiniteSection";
import ProcessSection from "./components/ProcessSection";
import Testimonial from "./components/Testimonial";
import FAQ from "./components/FAQ";



export default function Home() {
  return (
    <Main>
      <Hero/>
      <CTA/>
      <InfiniteSection/>
      <ProcessSection/>
      <Testimonial/>
      <FAQ/>
    </Main>
  );
}
