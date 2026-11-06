import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import ResinGallery from "./components/ResinGallery";
import PaintingsGallery from "./components/PaintingsGallery";
import WebProjects from "./components/WebProjects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

// =====================================================
// App
// Puts the whole website together, from top to bottom.
// The order of the lines below is the order of the page.
// =====================================================

export default function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <ResinGallery />
        <PaintingsGallery />
        <WebProjects />
        <Skills />
        <Contact />
      </main>

      <Footer />
    </>
  );
}