
interface Experience {
  title: string;
  company: string;
  location: string;
  period: string;
  responsibilities: string[];
}


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
  },
  {
    title: "Desarrollador FullStack & Implementador Odoo",
    company: "Ribentek SRL",
    location: "Santa Cruz - Bolivia",
    period: "2024 – Presente",
    responsibilities: [
      "Desarrollé un ERP completo en Odoo 17 con módulos custom para la clínica WellnessBase, incluyendo gestión de tratamientos clínicos con categorías (Sueros, Oral, Subcutáneos, Intramusculares) y órdenes de venta asociadas por semana",
      "Desarrollé módulos personalizados en Odoo 18 para una óptica: grillas de lentes Semiterminados y Terminados clasificados por tipo (Monofocal, Bifocal, Progresivos), gestión de recetas RX y asignación de Encargado de Taller",
      "Adquirí manejo del flujo nativo de Odoo en módulos de Ventas, Contactos e Inventario, integrando la lógica estándar con desarrollos personalizados",
      "Diseñé arquitecturas de despliegue con Docker, Nginx, SSL y VPS (Hetzner) con backups automatizados de PostgreSQL",
      "Gestioné simultáneamente múltiples proyectos cliente aplicando prácticas de CI/CD y DevOps"
    ]
  },
  {
    title: "Desarrollador Freelance FullStack",
    company: "Independiente",
    location: "Santa Cruz - Bolivia",
    period: "2025 – Presente",
    responsibilities: [
      "Desarrollando un e-commerce completo para tienda de celulares con cliente real, usando Next.js (frontend) y NestJS (backend), con despliegue en producción",
      "Desarrollando plataforma LinkUP: aplicación web B2C para descubrimiento de becas y oportunidades para jóvenes, usando Next.js, NestJS y PostgreSQL",
      "Desarrollando catálogo de motos con integración de plugin WhatsApp para gestión de consultas de clientes",
    ]
  }
];


const Experience = () => {
  return (
    <>
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
    </>
  )
}

export default Experience
