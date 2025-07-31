import { useState } from 'react';
import { Github, Linkedin, Mail, Phone, MapPin,  ExternalLink, Menu, X } from 'lucide-react';
import imagenPerfil from '../../../../public/imagenPerfil.jpg';
import Proyecto from '../components/ListadoProyectos/Proyecto';
interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
}

interface Experience {
  title: string;
  company: string;
  location: string;
  period: string;
  responsibilities: string[];
}

const Informacion: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('inicio');
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  // Datos de ejemplo para proyectos - puedes reemplazar con tus proyectos reales
  const projects: Project[] = [
    {
      id: 1,
      title: "Plataforma de Gestión Municipal",
      description: "Sistema de gestión para la Subalcaldía Distrito 7 con implementación de CI/CD",
      technologies: ["React", "TailwindCSS", "JavaScript", "GitHub Actions"],
      githubUrl: "https://github.com/ronald/proyecto1"
    },
    {
      id: 2,
      title: "Sistema de Estructuras de Datos",
      description: "Implementación de estructuras de datos avanzadas para enseñanza universitaria",
      technologies: ["C#", "Java", "Algoritmos", "Estructuras de Datos"],
      githubUrl: "https://github.com/ronald/proyecto2"
    },
    {
      id: 3,
      title: "API Backend con NestJS",
      description: "API REST robusta con autenticación y documentación completa",
      technologies: ["NestJS", "TypeScript", "PostgreSQL", "JWT"],
      githubUrl: "https://github.com/ronald/proyecto3"
    }
  ];

  const experiences: Experience[] = [
    {
      title: "Auxiliar Oficial de Cátedra – Programación y Estructuras de Datos",
      company: "Universidad Autónoma Gabriel René Moreno",
      location: "Santa Cruz - Bolivia",
      period: "2023 – 2025",
      responsibilities: [
        "Impartí clases sobre paradigmas de programación como Programación Estructurada y POO",
        "Ayudé a estudiantes con algoritmos, lógica de programación y estructuras de datos",
        "Enseñé estructuras avanzadas como Pilas, Colas, Árboles Binarios y Grafos"
      ]
    },
    {
      title: "Desarrollador Frontend",
      company: "Subalcaldía Distrito 7",
      location: "Santa Cruz - Bolivia",
      period: "Marzo 2024 – Octubre 2024",
      responsibilities: [
        "Desarrollé plataforma de gestión para mejorar la administración del Distrito 7",
        "Implementé prácticas de CI/CD para optimizar la entrega del software",
        "Trabajé con React, TailwindCSS, JavaScript y GitHub"
      ]
    }
  ];

  const skills = {
    frontend: ["React", "Next.js", "TypeScript", "JavaScript", "TailwindCSS", "HTML"],
    backend: ["NestJS", "C#", "Java", "Python", "C++"],
    tools: ["Git", "GitHub", "CI/CD", "Visual Basic", "Delphi"]
  };

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    setIsMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black/90 via-gray-900 to-gray-700"> 
 {/*<div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900"> */}
      
      {/* Header */}
      <header className="fixed top-0 w-full bg-black/20 backdrop-blur-md z-50 border-b border-white/10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-white">Ronald Camino Puma</h1>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              {['inicio', 'acerca', 'experiencia', 'proyectos', 'contacto'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize transition-colors ${
                    activeSection === section 
                      ? 'text-blue-400' 
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {section === 'acerca' ? 'Acerca de Mí' : section}
                </button>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <nav className="md:hidden mt-4 pb-4">
              {['inicio', 'acerca', 'experiencia', 'proyectos', 'contacto'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="block w-full text-left py-2 capitalize text-gray-300 hover:text-white transition-colors"
                >
                  {section === 'acerca' ? 'Acerca de Mí' : section}
                </button>
              ))}
            </nav>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="inicio" className="pt-20 min-h-screen flex items-center">
        <div className="container mx-auto px-4">
          <div className="text-center">
            {/* <div className="w-70 h-70 mx-auto mb-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-1"> */}
            <div className="w-70 h-70 mx-auto mb-8 rounded-full border-8 border-gray-500">

              <img 
                src={imagenPerfil}
                alt="Ronald Camino Puma"
                className="w-full h-full rounded-full bg-gray-800 flex items-center justify-center"
              />
                {/* <User size={80} className="text-white" /> */}
              {/* </div> */}

            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Ronald Camino Puma
            </h1>
            <p className="text-xl md:text-2xl text-yellow-400 mb-8">
              Desarrollador de Software FullStack
            </p>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto mb-12">
              Desarrollador con 3 años de experiencia, especializado en FullStack. 
              Auxiliar de Cátedra en la UAGRM, enseñando programación y estructuras de datos.
            </p>
            {/* <div className="flex justify-center space-x-6">
              <a href="tel:+59169003180" className="flex items-center text-gray-300 hover:text-white transition-colors">
                <Phone size={20} className="mr-2" />
                +591 69003180
              </a>
              <a href="mailto:pumaronal2016@gmail.com" className="flex items-center text-gray-300 hover:text-white transition-colors">
                <Mail size={20} className="mr-2" />
                pumaronal2016@gmail.com
              </a>
            </div> */}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="acerca" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-white text-center mb-12">Acerca de Mí</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Soy un desarrollador apasionado por la tecnología y la educación. Con experiencia 
                en desarrollo FullStack y como educador universitario, combino habilidades técnicas 
                sólidas con la capacidad de transmitir conocimiento de manera efectiva.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                He participado en proyectos académicos y hackatones, además de contribuir al 
                desarrollo de plataformas gubernamentales. Como creador de contenido, comparto 
                conocimientos de programación en redes sociales con más de 500 seguidores.
              </p>
              <div className="flex items-center text-gray-300 mb-4">
                <MapPin size={20} className="mr-2" />
                Santa Cruz, Bolivia
              </div>
            </div>
            <div className="grid grid-cols-1 gap-6">
              <div className="bg-white/10 backdrop-blur-md rounded-lg p-6">
                <h3 className="text-xl font-semibold text-white mb-4">Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.frontend.map((skill) => (
                    <span key={skill} className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-lg p-6">
                <h3 className="text-xl font-semibold text-white mb-4">Backend & Lenguajes</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.backend.map((skill) => (
                    <span key={skill} className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-lg p-6">
                <h3 className="text-xl font-semibold text-white mb-4">Redes Sociales</h3>
                <div className="flex flex-wrap gap-2">
                  <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer">
                    <img
                      src="/Logos/facebook.svg"
                      alt="Facebook"
                      className="w-8 h-8 hover:scale-110 transition-transform"
                    />
                  </a>
                  <a href="https://youtube.com/" target="_blank" rel="noopener noreferrer">
                    <img
                      src="/Logos/youtube.svg"
                      alt="YouTube"
                      className="w-8 h-8 hover:scale-110 transition-transform"
                    />
                  </a>
                  <a href="https://youtube.com/" target="_blank" rel="noopener noreferrer">
                    <img
                      src="/Logos/instagram.svg"
                      alt="Instagram"
                      className="w-8 h-8 hover:scale-110 transition-transform"
                    />
                  </a>
                  <a href="https://youtube.com/" target="_blank" rel="noopener noreferrer">
                    <img
                      src="/Logos/linkedin.svg"
                      alt="LinkedIn"
                      className="w-8 h-8 hover:scale-110 transition-transform"
                    />
                  </a>
                  <a href="https://youtube.com/" target="_blank" rel="noopener noreferrer">
                    <img
                      src="/Logos/tiktok.svg"
                      alt="TickTock"
                      className="w-8 h-8 hover:scale-110 transition-transform"
                    />
                  </a>

                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experiencia" className="py-20 bg-black/20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-white text-center mb-12">Experiencia</h2>
          <div className="max-w-4xl mx-auto">
            {experiences.map((exp, index) => (
              <div key={index} className="mb-12 bg-white/10 backdrop-blur-md rounded-lg p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">{exp.title}</h3>
                    <p className="text-blue-400 font-medium">{exp.company}</p>
                    <p className="text-gray-400">{exp.location}</p>
                  </div>
                  <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm">
                    {exp.period}
                  </span>
                </div>
                <ul className="text-gray-300 space-y-2">
                  {exp.responsibilities.map((responsibility, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      {responsibility}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="proyectos" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-white text-center mb-12">Proyectos</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div key={project.id} className="bg-white/10 backdrop-blur-md rounded-lg p-6 hover:bg-white/20 transition-all">
                <Proyecto key={project.id} />
                <h3 className="text-xl font-semibold text-white mb-3">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="bg-green-500/20 text-green-300 px-2 py-1 rounded text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-300 hover:text-white transition-colors"
                  >
                    <Github size={16} className="mr-1" />
                    GitHub
                  </a>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-300 hover:text-white transition-colors"
                    >
                      <ExternalLink size={16} className="mr-1" />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-20 bg-black/20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-white text-center mb-12">Contacto</h2>
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-gray-300 text-lg mb-8">
              ¿Interesado en trabajar juntos? No dudes en contactarme.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <a
                href="mailto:pumaronal2016@gmail.com"
                className="bg-white/10 backdrop-blur-md rounded-lg p-6 hover:bg-white/20 transition-all text-center"
              >
                <Mail size={40} className="mx-auto text-blue-400 mb-4" />
                <p className="text-white font-semibold">Email</p>
                <p className="text-gray-300 text-sm">pumaronal2016@gmail.com</p>
              </a>
              <a
                href="tel:+59169003180"
                className="bg-white/10 backdrop-blur-md rounded-lg p-6 hover:bg-white/20 transition-all text-center"
              >
                <Phone size={40} className="mx-auto text-green-400 mb-4" />
                <p className="text-white font-semibold">Teléfono</p>
                <p className="text-gray-300 text-sm">+591 69003180</p>
              </a>
              <a
                href="#"
                className="bg-white/10 backdrop-blur-md rounded-lg p-6 hover:bg-white/20 transition-all text-center"
              >
                <Linkedin size={40} className="mx-auto text-blue-500 mb-4" />
                <p className="text-white font-semibold">LinkedIn</p>
                <p className="text-gray-300 text-sm">Ver perfil</p>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-white/10">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">
            © 2025 Ronald Camino Puma. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Informacion;