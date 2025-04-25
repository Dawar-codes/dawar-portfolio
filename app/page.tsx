import { FloatingNav } from "./components/ui/FloatingNav";
import { navItems } from "./data/data";

import Hero from "./components/Hero";
import About from "./components/About";
import StickySocials from "./components/ui/StickySocials";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="relative flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 md:px-24 px-5">
      <div className="max-w-7xl w-full">
        <StickySocials />
        <FloatingNav
          navItems={navItems}
        />
        <Hero />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
