import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { Hero } from "@/components/hero";
import { Services } from "@/components/services";
import { Strategy } from "@/components/strategy";
import { WhyUs } from "@/components/why-us";

export default function HomePage() {
  return (
    <main id="top">
      <Hero />
      <About />
      <Services />
      <WhyUs />
      <Strategy />
      <Contact />
    </main>
  );
}
