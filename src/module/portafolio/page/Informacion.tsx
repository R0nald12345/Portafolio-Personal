import Header from '../layout/Header';
import AboutMe from './AboutMe';
import Contact from './Contact';
import Education from './Education';
import Experience from './Experience';
import Footer from './Footer';
import Presentation from './Presentation';
import Project from './Project';

const Informacion = () => {
  return (
    <div className="min-h-screen bg-[#0e0e10] text-zinc-100">
      <Header />

      <main>
        <section id="inicio" className="scroll-mt-20 pt-28 pb-16 sm:pt-36 sm:pb-24">
          <Presentation />
        </section>

        <section
          id="acerca"
          className="scroll-mt-20 border-t border-zinc-800/80 py-16 sm:py-24"
        >
          <AboutMe />
        </section>

        <section
          id="experiencia"
          className="scroll-mt-20 border-t border-zinc-800/80 py-16 sm:py-24"
        >
          <Experience />
        </section>

        <section
          id="proyectos"
          className="scroll-mt-20 border-t border-zinc-800/80 py-16 sm:py-24"
        >
          <Project />
        </section>

        <section
          id="formacion"
          className="scroll-mt-20 border-t border-zinc-800/80 py-16 sm:py-24"
        >
          <Education />
        </section>

        <section
          id="contacto"
          className="scroll-mt-20 border-t border-zinc-800/80 py-16 sm:py-24"
        >
          <Contact />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Informacion;
