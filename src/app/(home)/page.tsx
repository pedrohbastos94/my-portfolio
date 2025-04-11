import Contact from "../components/Contact-form/contact";
import Footer from "../components/Footer/Footer";
import NavBar from "../components/navBar/navBar";
import Toaster from "../components/toaster/toaster";
import About from "./sections/About/About";
import Hero from "./sections/Hero/Hero";
import Skills from "./sections/Skills/Skills";
import WorkExperience from "./sections/workExperience/experience";

export default function Home() {
  return (
    <main>
      <Toaster />
      <NavBar />

      <section id="hero" className="py-24 px-6 sm:px-12 lg:px-30">
        <Hero />
      </section>

      <section id="about" className="scroll-mt-24 py-20 px-6 sm:px-12 lg:px-30">
        <About />
      </section>

      <section
        id="skills"
        className="scroll-mt-24 py-20 px-6 sm:px-12 lg:px-30"
      >
        <Skills />
      </section>

      <section
        id="experience"
        className="scroll-mt-24 py-20 px-6 sm:px-12 lg:px-30"
      >
        <WorkExperience />
      </section>

      <section
        id="contact"
        className="scroll-mt-24 py-20 px-6 sm:px-12 lg:px-30"
      >
        <Contact />
      </section>

      <footer className="mt-12">
        <Footer />
      </footer>
    </main>
  );
}
