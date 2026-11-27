import { ArrowDownRight, MapPin } from 'lucide-react';
import { PROFILE, SOCIAL_LINKS } from '../data/portfolioData';
import Reveal from '../components/Reveal';
import { SocialBrandIcon } from '../components/TechBadge';

const Presentation = () => {
  return (
    <div className="mx-auto max-w-5xl px-6">
      <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-12">
        <div className="animate-editorial-enter lg:col-span-8">
          <div className="mb-5 flex flex-wrap items-center gap-x-3 gap-y-1.5 font-mono-tech text-xs text-zinc-400">
            <span className="inline-flex items-center gap-1.5">
              <MapPin size={13} className="text-[#d99b43]" />
              {PROFILE.location}
            </span>
            <span aria-hidden="true" className="text-zinc-700">
              /
            </span>
            <span>{PROFILE.specialty}</span>
          </div>

          <h1 className="text-4xl font-semibold tracking-tight text-zinc-50 sm:text-5xl sm:leading-[1.08]">
            {PROFILE.name}
          </h1>

          <p className="mt-4 text-lg font-medium text-[#d99b43] sm:text-xl">
            {PROFILE.role}
          </p>

          <p className="mt-5 max-w-2xl text-base leading-relaxed text-zinc-200 sm:text-lg">
            {PROFILE.headline}
          </p>

          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-zinc-400 sm:text-base">
            {PROFILE.summary}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#proyectos"
              className="group inline-flex items-center gap-2 rounded-lg bg-zinc-100 px-4 py-2.5 text-sm font-medium text-zinc-950 transition-all duration-200 hover:-translate-y-0.5 hover:bg-white"
            >
              Ver proyectos
              <ArrowDownRight
                size={16}
                className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:translate-y-0.5"
              />
            </a>

            <a
              href="#contacto"
              className="inline-flex items-center gap-2 rounded-lg border border-zinc-700 bg-zinc-900/60 px-4 py-2.5 text-sm font-medium text-zinc-100 transition-all duration-200 hover:-translate-y-0.5 hover:border-zinc-500 hover:bg-zinc-900"
            >
              Contactar
            </a>
          </div>

          <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-zinc-400">
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.id}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 transition-colors hover:text-zinc-100"
              >
                <SocialBrandIcon id={link.id} className="h-4 w-4 shrink-0" />
                {link.label === 'YouTube' ? link.handle : link.label}
              </a>
            ))}
          </div>
        </div>

        <figure className="animate-editorial-enter-delay mx-auto w-full max-w-[260px] lg:col-span-4 lg:mx-0 lg:max-w-none">
          <div className="overflow-hidden rounded-xl border border-zinc-800 bg-[#141417] transition-colors duration-200 hover:border-zinc-700">
            <img
              src={PROFILE.photo}
              alt={`Retrato de ${PROFILE.name}`}
              className="aspect-[4/4.3] w-full object-cover object-top"
            />
            <figcaption className="flex items-center justify-between border-t border-zinc-800 px-4 py-3 font-mono-tech text-xs text-zinc-400">
              <span>Ribentek SRL · Freelance</span>
              <span className="text-zinc-500">SCZ, BO</span>
            </figcaption>
          </div>
        </figure>
      </div>

      <div className="mt-14 grid grid-cols-1 gap-6 border-t border-zinc-800/80 pt-10 md:grid-cols-3 md:gap-8">
        {PROFILE.quickFacts.map((fact, index) => (
          <Reveal key={fact.label} delay={((index % 3) + 1) as 1 | 2 | 3}>
            <p className="font-mono-tech text-xs uppercase tracking-wider text-[#d99b43]">
              {fact.label}
            </p>
            <p className="mt-2 text-sm leading-relaxed text-zinc-300">
              {fact.value}
            </p>
          </Reveal>
        ))}
      </div>
    </div>
  );
};

export default Presentation;
