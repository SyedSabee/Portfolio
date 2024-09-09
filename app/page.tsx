import About from "@/components/About";
import CEOMessage from "@/components/CEOMessage";
import Contact from "@/components/Contact";
import COOMessage from "@/components/COOMessage";
import Hero from "@/components/Hero";
import Message from "@/components/Message";
import Phase from "@/components/Phase";
import Portfolio from "@/components/Portfolio";
import Services from "@/components/Services";
import Team from "@/components/Team";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { navItems } from "@/data";

export default function Home() {
  return (
    <main
      className="relative bg-black-100 flex justify-center items-center 
    flex-col overflow-hidden mx-auto sm:px-10 px-5"
    >
      <div className="max-w--7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <About />
        <Services />
        <Phase />
        <Message />
        <Portfolio />
        <COOMessage />
        <CEOMessage />
        <Team />
        <Contact />
      </div>
    </main>
  );
}
