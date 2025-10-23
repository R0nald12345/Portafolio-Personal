
import { Github, ExternalLink, Eye } from 'lucide-react';
import Proyecto from '../components/ListadoProyectos/Proyecto';

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  gitHubUrl: string;
  liveUrl?: string;
  VerProyecto: string;
  imagenes?: string[];
}

    // "/proyectosGitHub/GitExpertApp/CelularGitApp.png",
    // "/proyectosGitHub/GitExpertApp/laptopGitApp.png"

  // Datos de ejemplo para proyectos - puedes reemplazar con tus proyectos reales
  const projects: Project[] = [
    {
      id: 1,
      title: "Plataforma web de Gifs",
      description: "Sistema de web de generacion automatica de Gifs con implementación de CI/CD",
      technologies: ["React", "TailwindCSS", "JavaScript", "GitHub"],
      gitHubUrl: "https://github.com/ronald/proyecto1",
      VerProyecto: "https://mi-proyecto1.com",
      imagenes: [
        "/proyectosGitHub/GitExpertApp/CelularGitApp.png",
        "/proyectosGitHub/GitExpertApp/laptopGitApp.png"
      ]

    },
    {
      id: 2,
      title: "Juego de Caballito Web",
      description: "Juego creado con Js y Phaser",
      technologies: ["HTML", "JavaSScript"],
      gitHubUrl: "https://github.com/ronald/proyecto2",
      VerProyecto: "https://remarkable-gelato-f6a104.netlify.app/",
      imagenes: [
        "/proyectosGitHub/juegoCaballito/CelularJuegoCaballito.png",
        "/proyectosGitHub/juegoCaballito/laptopJuegoCaballito.png"
      ]
    },
    {
      id: 3,
      title: "API Backend con NestJS",
      description: "API REST robusta con autenticación y documentación completa",
      technologies: ["NestJS", "TypeScript", "PostgreSQL", "JWT"],
      gitHubUrl: "https://github.com/ronald/proyecto3",
      VerProyecto: "https://mi-proyecto3.com"
    },
    {
      id: 4,
      title: "Sistema Administrativo Sub-Alcaldía Distrito 7",
      description: "Sistema administrativo para gestionar información y servicios de la sub-alcaldía",
      technologies: ["NestJS", "TypeScript", "PostgreSQL", "React", "TailwindCSS", "Js"],
      gitHubUrl: "https://github.com/R0nald12345/Proyecto-Front-Sub-Distrito-7",
      VerProyecto: "https://www.youtube.com/watch?v=geTE6VAyPXs&t=923s",
      imagenes: [
        "/proyectosGitHub/sistemaDistrito7/imagenDistrito1.png",
        "/proyectosGitHub/sistemaDistrito7/imagenDistrito2.png"
      ]
    },
    {
      id: 5,
      title: "Sistema de Gestion de Ventas y Pedido de Comidas",
      description: "Sistema de gestion de ventas y pedidos de comidas con Orden y entrega",
      technologies: ["Prisma", "TypeScript", "PostgreSQL", "NEXT.js", "TailwindCSS"],
      gitHubUrl: "https://github.com/R0nald12345/Proyecto-Front-Sub-Distrito-7",
      VerProyecto: "https://www.youtube.com/watch?v=geTE6VAyPXs&t=923s",
      imagenes: [
        "/proyectosGitHub/gestionComida/imagen1.png",
      ]
    },
    
    // {
    //   id: 5,
    //   title: "API Backend con NestJS",
    //   description: "API REST robusta con autenticación y documentación completa",
    //   technologies: ["NestJS", "TypeScript", "PostgreSQL", "JWT"],
    //   gitHubUrl: "https://github.com/ronald/proyecto3",
    //   VerProyecto: "https://mi-proyecto3.com"
    // },
    
  ];


const Project = () => {
  return (
    <>
       <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-white text-center mb-12">Proyectos</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Mencion de proyectos */}
            {projects.map((project) => (
              <div key={project.id} className="bg-white/10 backdrop-blur-md rounded-lg p-6 hover:bg-white/20 transition-all">

                <Proyecto 
                    key={project.id} 
                    imagenes={project.imagenes ?? []}
                />

                <h3 className="text-xl font-semibold text-white mb-3">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                    {/* Mencion de tecnologias Usadas */}
                  {project.technologies.map((tech) => (
                    <span key={tech} className="bg-green-500/20 text-green-300 px-2 py-1 rounded text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a
                    href={project.gitHubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-300 hover:text-white transition-colors"
                  >
                    <Github size={16} className="mr-1" />
                    GitHub
                  </a>
                  <a
                    href={project.VerProyecto}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-300 hover:text-white transition-colors"
                  >
                    <Eye size={16} className="mr-1" />
                    Ver Proyecto
                  </a>
                  
                </div>
              </div>
            ))}
          </div>
        </div>
    </>
  )
}

export default Project
