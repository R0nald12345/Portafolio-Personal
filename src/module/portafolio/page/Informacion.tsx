
import Header from '../layout/Header';
import AboutMe from './AboutMe';
import Presentation from './Presentation';
import Experience from './Experience';
import Footer from './Footer';
import Contact from './Contact';
import Project from './Project';




const Informacion: React.FC = () => {




  return (
    <div className="min-h-screen bg-gradient-to-b from-black/90 via-gray-900 to-gray-700">
      {/*<div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900"> */}



      <Header />

      {/* Hero Section */}
      <section id="inicio" className="pt-20 min-h-screen flex items-center">
        <Presentation />
      </section>

      {/* About Section */}
      <section id="acerca" className="py-20">
        <AboutMe />
      </section>

      {/* Experience Section */}
      <section id="experiencia" className="py-20 bg-black/20">
        <Experience />
      </section>

      {/* Projects Section */}
      <section id="proyectos" className="py-20">

        <Project />
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-20 bg-black/20">
        <Contact />
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Informacion;