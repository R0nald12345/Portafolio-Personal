import { useState } from 'react';
import { ArrowUpRight, Github, Lock, PlayCircle, Youtube } from 'lucide-react';
import {
  PROJECTS,
  SOCIAL_LINKS,
  type ProjectCategory,
} from '../data/portfolioData';
import Proyecto from '../components/ListadoProyectos/Proyecto';
import Reveal from '../components/Reveal';

type FilterValue = 'all' | ProjectCategory;

const FILTERS: { value: FilterValue; label: string }[] = [
  { value: 'all', label: 'Todos' },
  { value: 'erp-infra', label: 'ERP & Infraestructura' },
  { value: 'web-ecommerce', label: 'Web & E-commerce' },
  { value: 'academico', label: 'Pasantía / Open Source' },
];

const formatHost = (url: string): string => {
  try {
    return new URL(url).hostname.replace(/^www\./, '');
  } catch {
    return 'Visitar sitio';
  }
};

const githubProfile = SOCIAL_LINKS.find((link) => link.id === 'github');
const youtubeProfile = SOCIAL_LINKS.find((link) => link.id === 'youtube');

const Project = () => {
  const [activeFilter, setActiveFilter] = useState<FilterValue>('all');

  const visibleProjects =
    activeFilter === 'all'
      ? PROJECTS
      : PROJECTS.filter((project) => project.category === activeFilter);

  return (
    <div className="mx-auto max-w-5xl px-6">
      <Reveal>
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <p className="font-mono-tech text-xs uppercase tracking-wider text-[#d99b43]">
              03 / Proyectos
            </p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight text-zinc-100 sm:text-3xl">
              Proyectos destacados
            </h2>
          </div>

          <div
            role="tablist"
            aria-label="Filtrar proyectos por categoría"
            className="flex flex-wrap gap-2"
          >
            {FILTERS.map((filter) => {
              const isSelected = activeFilter === filter.value;
              return (
                <button
                  key={filter.value}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  onClick={() => setActiveFilter(filter.value)}
                  className={`cursor-pointer rounded-md px-3 py-1.5 text-xs font-medium transition-colors ${
                    isSelected
                      ? 'bg-zinc-100 text-zinc-950'
                      : 'border border-zinc-800 bg-[#141417] text-zinc-400 hover:border-zinc-700 hover:text-zinc-100'
                  }`}
                >
                  {filter.label}
                </button>
              );
            })}
          </div>
        </div>
      </Reveal>

      <div
        key={activeFilter}
        className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-2"
      >
        {visibleProjects.map((project, index) => (
          <Reveal
            key={project.id}
            delay={((index % 2) + 1) as 1 | 2}
            className="flex"
          >
            <article className="flex w-full flex-col overflow-hidden rounded-xl border border-zinc-800/90 bg-[#141417] transition-all duration-200 hover:-translate-y-0.5 hover:border-zinc-700">
              {project.images.length > 0 && (
                <Proyecto imagenes={project.images} title={project.title} />
              )}

              <div className="flex flex-1 flex-col p-6">
                <div className="flex flex-wrap items-center justify-between gap-2 font-mono-tech text-[11px]">
                  <span className="text-[#d99b43]">{project.categoryLabel}</span>
                  <span className="rounded border border-zinc-800 bg-zinc-900 px-2 py-0.5 text-zinc-400">
                    {project.status}
                  </span>
                </div>

                <h3 className="mt-3 text-xl font-semibold tracking-tight text-zinc-100">
                  {project.title}
                </h3>
                <p className="mt-0.5 text-sm text-zinc-400">
                  {project.subtitle}
                </p>

                <p className="mt-3 text-sm leading-relaxed text-zinc-300">
                  {project.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-1.5 border-t border-zinc-800/70 pt-4">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded border border-zinc-800 bg-zinc-900/70 px-2 py-0.5 font-mono-tech text-[11px] text-zinc-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-auto flex flex-wrap items-center justify-between gap-3 pt-5 text-xs">
                  {project.repoVisibility === 'public' && project.repoUrl ? (
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 font-medium text-zinc-200 transition-colors hover:text-white"
                    >
                      <Github size={14} />
                      Código fuente
                    </a>
                  ) : (
                    <span className="inline-flex items-center gap-1.5 font-mono-tech text-zinc-500">
                      <Lock size={13} />
                      Repositorio privado
                    </span>
                  )}

                  <div className="flex items-center gap-4">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center gap-1 font-medium text-[#d99b43] transition-colors hover:text-[#e6ae5c]"
                      >
                        {formatHost(project.liveUrl)}
                        <ArrowUpRight
                          size={14}
                          className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        />
                      </a>
                    )}

                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center gap-1 font-medium text-[#d99b43] transition-colors hover:text-[#e6ae5c]"
                      >
                        <PlayCircle size={14} />
                        Ver demo
                        <ArrowUpRight
                          size={13}
                          className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-10">
        <div className="flex flex-col items-start justify-between gap-4 rounded-xl border border-zinc-800/80 bg-[#141417] px-6 py-4 sm:flex-row sm:items-center">
          <p className="text-sm text-zinc-400">
            Más código abierto y material de programación en GitHub y YouTube.
          </p>
          <div className="flex shrink-0 flex-wrap items-center gap-4 text-xs font-medium">
            {githubProfile && (
              <a
                href={githubProfile.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-1.5 text-zinc-200 transition-colors hover:text-white"
              >
                <Github size={14} />
                GitHub
                <ArrowUpRight
                  size={13}
                  className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
            )}
            {youtubeProfile && (
              <a
                href={youtubeProfile.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-1.5 text-[#d99b43] transition-colors hover:text-[#e6ae5c]"
              >
                <Youtube size={14} />
                {youtubeProfile.handle}
                <ArrowUpRight
                  size={13}
                  className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
            )}
          </div>
        </div>
      </Reveal>
    </div>
  );
};

export default Project;
