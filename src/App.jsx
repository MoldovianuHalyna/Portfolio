import Header from "@/components/sections/Header.jsx";
import Hero from "@/components/sections/Hero.jsx";
import About from "@/components/sections/About.jsx";
import TechSkills from "@/components/sections/TechSkills.jsx";
import Projects from "@/components/sections/Projects.jsx";
import Benefits from "@/components/sections/Benefits.jsx";
import FAQ from "@/components/sections/FAQ.jsx";
import Reviews from "@/components/sections/Reviews.jsx";
import WorkTogether from "@/components/sections/WorkTogether.jsx";
import Footer from "@/components/sections/Footer.jsx";

function App() {
  return (
    <div className="min-h-dvh bg-background text-foreground">
      <Header />

      <main>
        <Hero />
        <About />
        <TechSkills />
        <Projects />
        <Benefits />
        <FAQ />
        <Reviews />
        <WorkTogether />
      </main>

      <Footer />
    </div>
  );
}

export default App;
