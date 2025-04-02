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
      <section className=" py-25 px-6 sm:px-12 lg:px-30">
        <Hero />
        <About />
        <Skills />
        <WorkExperience />
        <Contact />
      </section>
      <footer className="mt-12">
        <Footer />
      </footer>
    </main>
  );
}
