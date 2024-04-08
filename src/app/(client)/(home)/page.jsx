import Hero from "./Hero";
import About from "./About";
import FAQ from "./FAQ";
import Testimonial from "./Testimonial";
import Services from "./Services";
import Process from "./Process";
import Contact from "@/components/shared/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <Process />
      <FAQ />
      <Testimonial />
      <Contact className="bg-backgroundlight" />
    </main>
  );
}
