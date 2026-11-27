/**
 * Fuente única de datos del portafolio — sincronizada con el CV de Ronald Camino Puma.
 *
 * Cómo agregar capturas de pantalla a cualquier proyecto:
 * 1. Guarda las capturas reales (PNG/JPG/WebP) en `public/proyectos/<slug>/`
 *    Ejemplo: `public/proyectos/fremar/home.png`
 * 2. Añade las rutas en la propiedad `images` del proyecto correspondiente:
 *    `images: ['/proyectos/fremar/home.png', '/proyectos/fremar/servicios.png']`
 * La tarjeta reemplaza automáticamente la cabecera técnica por el visor de capturas con zoom.
 */

export type ProjectCategory = 'erp-infra' | 'web-ecommerce' | 'academico';

export interface SocialLink {
  id: 'github' | 'linkedin' | 'youtube';
  label: string;
  handle: string;
  href: string;
}

export interface SkillGroup {
  id: string;
  label: string;
  items: string[];
}

export interface ExperienceHighlight {
  topic: string;
  detail: string;
}

export interface ExperienceItem {
  id: string;
  period: string;
  company: string;
  location: string;
  role: string;
  highlights: ExperienceHighlight[];
}

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  category: ProjectCategory;
  categoryLabel: string;
  status: string;
  environment: string;
  architectureNote: string;
  description: string;
  stack: string[];
  repoVisibility: 'private' | 'public';
  repoUrl?: string;
  liveUrl?: string;
  demoUrl?: string;
  /**
   * Rutas relativas dentro de `public/`, ej: '/proyectos/fremar/home.png'.
   * Dejar vacío mientras el proyecto no tenga capturas cargadas.
   */
  images: string[];
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  period: string;
}

export const PROFILE = {
  name: 'Ronald Camino Puma',
  shortName: 'Ronald Camino',
  location: 'Santa Cruz, Bolivia',
  role: 'Desarrollador FullStack & Odoo (v17/18)',
  specialty: 'Kubernetes (K3s), Infraestructura Cloud & DevSecOps',
  headline:
    'Diseño, implemento y opero plataformas SaaS multi-tenant en Kubernetes (K3s), ecosistemas ERP sobre Odoo 17/18 y aplicaciones web en producción.',
  summary:
    'Enfocado en Clean Architecture, TDD/SDD, integración segura de APIs y pasarelas bancarias (REST, JWT HS256, webhooks idempotentes) y pipelines CI/CD alineados a OWASP Top 10, NIST SSDF e ISO 27001.',
  photo: '/imagenPerfil.jpg',
  quickFacts: [
    {
      label: 'Foco actual',
      value: 'SaaS multi-tenant en K3s, Odoo 17/18 y automatización DevSecOps',
    },
    {
      label: 'Stack principal',
      value: 'Python, FastAPI, PostgreSQL, TypeScript, React, Next.js y NestJS',
    },
    {
      label: 'Idiomas',
      value: 'Español (Nativo) · Inglés (Técnico / Intermedio)',
    },
  ],
  aboutParagraphs: [
    'Trabajo en Ribentek SRL desarrollando módulos ERP personalizados en Odoo 17/18 y operando infraestructura Kubernetes (K3s) para despliegues SaaS multi-tenant, con automatización de entornos en Docker, Traefik, Cloudflare Tunnels y GitHub Actions.',
    'En paralelo construyo y mantengo proyectos web en producción de forma independiente —desde sitios corporativos en Next.js y Vercel hasta plataformas e-commerce contenedorizadas con NestJS y Docker— cuidando rendimiento, migraciones DNS sin cortes y entregas reproducibles.',
    'Entre 2023 y 2026 fui Auxiliar Oficial de Cátedra en la UAGRM en Programación y Estructuras de Datos, acompañando a estudiantes en POO, algoritmos y estructuras avanzadas, además de publicar material práctico en YouTube.',
  ],
  contact: {
    email: 'pumaronal2016@gmail.com',
    phoneDisplay: '+591 69003180',
    phoneHref: '+59169003180',
  },
} as const;

export const SOCIAL_LINKS: SocialLink[] = [
  {
    id: 'github',
    label: 'GitHub',
    handle: 'github.com/R0nald12345',
    href: 'https://github.com/R0nald12345',
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    handle: '/in/ronald-camino-puma',
    href: 'https://www.linkedin.com/in/ronald-camino-puma-608261217/',
  },
  {
    id: 'youtube',
    label: 'YouTube',
    handle: 'Buscando el Código',
    href: 'https://www.youtube.com/@buscandoelcodigo3350/playlists',
  },
];

export const SKILL_GROUPS: SkillGroup[] = [
  {
    id: 'infra',
    label: 'Infraestructura y Contenedores',
    items: [
      'Kubernetes (K3s)',
      'Docker',
      'Docker Compose',
      'Traefik',
      'Cloudflare Tunnels',
      'Vercel',
      'Gestión DNS',
      'Linux',
      'WSL2',
      'SSH',
    ],
  },
  {
    id: 'devsecops',
    label: 'DevOps y DevSecOps',
    items: [
      'Git',
      'GitHub Actions (CI/CD)',
      'Trivy (IaC / Docker)',
      'Gitleaks',
      'Bandit (SAST)',
      'Semgrep (OWASP Top 10)',
      'pip-audit (SCA)',
      'OWASP Top 10',
      'NIST SSDF',
      'ISO 27001',
      'Staging / Producción',
    ],
  },
  {
    id: 'backend-erp',
    label: 'Backend, ERP e Integraciones',
    items: [
      'Python',
      'Odoo 17 / 18 (ORM, OWL, QWeb)',
      'Custom Modules',
      'Payment Providers',
      'FastAPI',
      'PostgreSQL',
      'Node.js',
      'NestJS',
      'Next.js API Routes',
      'REST APIs',
      'Webhooks',
      'JSON-RPC',
      'JWT (HS256)',
      'Meta WhatsApp Cloud API',
      'MCP',
    ],
  },
  {
    id: 'frontend',
    label: 'Frontend',
    items: [
      'TypeScript',
      'JavaScript (ES6+)',
      'React',
      'Next.js (App Router)',
      'Tailwind CSS',
      'Bootstrap 5',
      'HTML5',
      'CSS3',
    ],
  },
  {
    id: 'architecture',
    label: 'Arquitectura y Calidad',
    items: [
      'Clean Architecture',
      'Arquitectura en Capas (Domain / Services / Policies)',
      'SOLID',
      'TDD',
      'SDD',
      'Optimización SQL/ORM (sin N+1)',
    ],
  },
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: 'ribentek',
    period: '2026 — Presente',
    company: 'Ribentek SRL',
    location: 'Santa Cruz, Bolivia',
    role: 'Desarrollador FullStack, Infraestructura K8s & Odoo',
    highlights: [
      {
        topic: 'Infraestructura SaaS Multi-Tenant en Kubernetes (K3s) — AEI Software',
        detail:
          'Operé, depuré y desplegué una plataforma Odoo 18 SaaS multi-tenant en clústeres K3s (local y staging), gestionando aprovisionamiento automático de tenants aislados (Namespace, Secret, PVC, ResourceQuota, NetworkPolicy, Deployment e Ingress en Traefik) vía orquestador FastAPI, exposición segura con Cloudflare Tunnels, separación de entornos (main → staging, 18.0 → producción) y troubleshooting de pods y PostgreSQL.',
      },
      {
        topic: 'Pasarela QR Bancaria y Checkout SaaS (Odoo 18)',
        detail:
          'Implementé los módulos payment_qr_ganadero y aei_website para la pasarela QR Empresarial de Banco Ganadero, certificada en QA del banco y conectada a checkout en 3 pasos, facturación automática, suscripciones y despliegue automático del tenant en K3s.',
      },
      {
        topic: 'CI/CD, DevSecOps y Contenedorización',
        detail:
          'Implementé pipelines CI/CD en GitHub Actions alineados a OWASP Top 10, NIST SSDF e ISO 27001 (Gitleaks, Bandit bloqueante, Semgrep, pip-audit, Trivy IaC/Docker, Supply-Chain Guard y gates de calidad), junto a despliegues contenedorizados en Docker Compose (Odoo 18 + PostgreSQL 15) y K3s vía SSH.',
      },
      {
        topic: 'ERP en Odoo 18 (Telko Vision, Uruguay)',
        detail:
          'Desarrollé módulos personalizados integrados con Inventario, Compras, Ventas y Facturación: grillas matriciales OWL con carga Excel en RAM sin N+1, motor de recetas RX con PDF térmicos ReportLab, facturación masiva atómica y módulo personalizado de desechos por grilla.',
      },
      {
        topic: 'Gestión Clínica en Odoo 17 (Clínica WellnessBase)',
        detail:
          'Desarrollé módulos personalizados (agenda, protocolos clínicos, antropometría ISAK, laboratorio QWeb PDF y dietas en OWL) bajo arquitectura en capas e integraciones con Meta WhatsApp Cloud API, Email y MCP.',
      },
    ],
  },
  {
    id: 'freelance',
    period: '2023 — Presente',
    company: 'Independiente',
    location: 'Santa Cruz, Bolivia',
    role: 'Desarrollador FullStack Freelance',
    highlights: [
      {
        topic: 'Plataforma Web en Producción (FREMAR Ltda. — fremar.com.bo)',
        detail:
          'Desarrollé y desplegué en Vercel con Next.js (App Router), React, TypeScript y Tailwind CSS, API Route server-side + webhook a Google Apps Script/Sheets, optimización multimedia (next/image, IntersectionObserver) y migración DNS sin caída de correo corporativo (MX/SPF) ni cPanel/Webmail.',
      },
      {
        topic: 'E-commerce en Producción (Yulicell — yulicellbolivia.com)',
        detail:
          'Desarrollé y desplegué con Docker una tienda online completa con Next.js, NestJS y notificaciones automatizadas de pedidos vía Telegram, junto con Cloudflare para el dominio y servidor.',
      },
      {
        topic: 'Gestión Administrativa (Distrito 7) y Prototipo IA',
        detail:
          'Desarrollé una aplicación web en React y Tailwind CSS con CI/CD en GitHub Actions durante pasantía en la Subalcaldía del Distrito 7, además de un prototipo con IA para convertir diseños de Figma en código Flutter y Angular.',
      },
    ],
  },
  {
    id: 'uagrm',
    period: '2023 — 2026',
    company: 'Universidad Autónoma Gabriel René Moreno (UAGRM)',
    location: 'Santa Cruz, Bolivia',
    role: 'Auxiliar Oficial de Cátedra — Programación y Estructuras de Datos',
    highlights: [
      {
        topic: 'Docencia y Mentoría Técnica',
        detail:
          'Impartí clases prácticas de Programación Estructurada, POO, algoritmos y estructuras de datos avanzadas (Pilas, Colas, Árboles Binarios y Grafos) y generé contenido técnico en YouTube (Buscando el Código).',
      },
    ],
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'aei-software',
    title: 'AEI Software',
    subtitle: 'Odoo 18 SaaS Multi-Tenant & Cobro QR',
    category: 'erp-infra',
    categoryLabel: 'ERP & Infraestructura',
    status: 'Staging / Producción',
    environment: 'K3s · FastAPI · Traefik · Cloudflare Tunnels',
    architectureNote:
      'Aislamiento por tenant (Namespace, PVC, NetworkPolicy) + pasarela QR certificada en QA con JWT HS256.',
    description:
      'Aprovisionamiento automático de instancias aisladas de Odoo 18 en K3s, checkout en 3 pasos con QR Banco Ganadero (JWT HS256) y pipeline DevSecOps.',
    stack: [
      'Odoo 18',
      'Kubernetes (K3s)',
      'FastAPI',
      'Traefik',
      'Cloudflare',
      'DevSecOps',
    ],
    repoVisibility: 'private',
    // Agrega tus capturas aquí: ['/proyectos/aei-software/panel.png']
    images: [],
  },
  {
    id: 'telko-vision',
    title: 'Telko Vision',
    subtitle: 'Ecosistema Óptico ERP (Uruguay)',
    category: 'erp-infra',
    categoryLabel: 'ERP & Infraestructura',
    status: 'En producción',
    environment: 'Odoo 18 · PostgreSQL 15 · Docker · GitHub Actions',
    architectureNote:
      'Grillas matriciales OWL con carga Excel en RAM sin consultas N+1, PDF térmicos ReportLab y TDD.',
    description:
      'Módulos custom en Odoo 18 con grillas matriciales OWL sin N+1, recetas RX en PDF térmico ReportLab, facturación masiva atómica y TDD.',
    stack: [
      'Odoo 18',
      'OWL',
      'Python',
      'ReportLab',
      'PostgreSQL',
      'Docker',
    ],
    repoVisibility: 'private',
    // Agrega tus capturas aquí: ['/proyectos/telko-vision/grilla.png']
    images: [],
  },
  {
    id: 'wellnessbase',
    title: 'Clínica WellnessBase',
    subtitle: 'Plataforma de Gestión Clínica',
    category: 'erp-infra',
    categoryLabel: 'ERP & Infraestructura',
    status: 'En producción',
    environment: 'Odoo 17 · OWL · QWeb PDF · Meta WhatsApp Cloud API · MCP',
    architectureNote:
      'Arquitectura en capas (Domain / Services / Policies) con reportes clínicos QWeb y mensajería multicanal.',
    description:
      'Módulos clínicos en Odoo 17 (agenda, protocolos, antropometría ISAK, laboratorio QWeb PDF y dietas OWL) integrados con WhatsApp Cloud API y MCP.',
    stack: [
      'Odoo 17',
      'OWL',
      'QWeb PDF',
      'WhatsApp Cloud API',
      'MCP',
      'PostgreSQL',
    ],
    repoVisibility: 'private',
    // Agrega tus capturas aquí: ['/proyectos/wellnessbase/agenda.png']
    images: [],
  },
  {
    id: 'fremar',
    title: 'FREMAR Ltda.',
    subtitle: 'Plataforma Web Corporativa',
    category: 'web-ecommerce',
    categoryLabel: 'Web & E-commerce',
    status: 'En producción',
    environment: 'Next.js App Router · Vercel · API Routes · DNS MX/SPF',
    architectureNote:
      'Captación server-side de leads hacia Google Sheets, carga diferida multimedia y migración DNS sin cortes.',
    description:
      'Sitio corporativo en Vercel con captación automática de leads (API Routes + Google Sheets), carga diferida multimedia y migración DNS sin cortes.',
    stack: [
      'Next.js',
      'React',
      'TypeScript',
      'Tailwind CSS',
      'Vercel',
      'Google Sheets',
    ],
    repoVisibility: 'private',
    liveUrl: 'https://www.fremar.com.bo',
    // Agrega tus capturas aquí: ['/proyectos/fremar/home.png']
    images: [],
  },
  {
    id: 'yulicell',
    title: 'YULICELL',
    subtitle: 'Plataforma E-commerce',
    category: 'web-ecommerce',
    categoryLabel: 'Web & E-commerce',
    status: 'En producción',
    environment: 'Next.js · NestJS · Docker · Cloudflare · Telegram Bot',
    architectureNote:
      'Arquitectura frontend/backend contenedorizada en producción con alertas inmediatas de pedidos por Telegram.',
    description:
      'Tienda online contenedorizada con Docker, catálogo y carrito en Next.js + NestJS, alertas de pedidos vía Telegram y dominio en Cloudflare.',
    stack: [
      'Next.js',
      'NestJS',
      'TypeScript',
      'Docker',
      'Telegram',
      'Cloudflare',
    ],
    repoVisibility: 'private',
    liveUrl: 'https://www.yulicellbolivia.com',
    // Agrega tus capturas aquí: ['/proyectos/yulicell/tienda.png']
    images: [],
  },
  {
    id: 'distrito-7',
    title: 'Subalcaldía Distrito 7',
    subtitle: 'Sistema de Gestión Administrativa',
    category: 'academico',
    categoryLabel: 'Pasantía / Open Source',
    status: 'Código público',
    environment: 'React · Tailwind CSS · NestJS · PostgreSQL · GitHub Actions',
    architectureNote:
      'Aplicación administrativa desarrollada en pasantía con flujo CI/CD automatizado en GitHub Actions.',
    description:
      'Aplicación administrativa desarrollada en pasantía con React, Tailwind CSS, NestJS y flujo CI/CD automatizado en GitHub Actions.',
    stack: [
      'React',
      'TypeScript',
      'Tailwind CSS',
      'NestJS',
      'PostgreSQL',
      'GitHub Actions',
    ],
    repoVisibility: 'public',
    repoUrl: 'https://github.com/R0nald12345/Proyecto-Front-Sub-Distrito-7',
    demoUrl: 'https://www.youtube.com/watch?v=geTE6VAyPXs&t=923s',
    // Agrega tus capturas reales aquí: ['/proyectos/distrito-7/vista1.png']
    images: [],
  },
];

export const EDUCATION: EducationItem[] = [
  {
    id: 'ing-sistemas',
    degree: 'Ingeniería en Sistemas',
    institution: 'Universidad Autónoma Gabriel René Moreno (UAGRM)',
    period: 'Finalización 2026',
  },
  {
    id: 'dip-arq-sw',
    degree: 'Diplomado en Arquitectura de Software',
    institution: 'Universidad Autónoma de Chile',
    period: 'Finalización 2026',
  },
  {
    id: 'dip-devops',
    degree: 'Diplomado en DevOps',
    institution: 'Universidad Autónoma Gabriel René Moreno (UAGRM)',
    period: 'Finalización 2026',
  },
  {
    id: 'operador-pc',
    degree: 'Curso Técnico: Operador en Computadoras',
    institution: 'Instituto Técnico San Pablo del Oriente',
    period: '2018',
  },
];
