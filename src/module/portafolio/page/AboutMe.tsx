import { ArrowUpRight } from 'lucide-react';
import { PROFILE, SKILL_GROUPS, SOCIAL_LINKS } from '../data/portfolioData';
import Reveal from '../components/Reveal';
import { SocialBrandIcon, TechBadge } from '../components/TechBadge';

const youtubeLink = SOCIAL_LINKS.find((link) => link.id === 'youtube');

const AboutMe = () => {
  return (
    <div className="mx-auto max-w-5xl px-6">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
        <Reveal className="lg:col-span-4">
          <p className="font-mono-tech text-xs uppercase tracking-wider text-[#d99b43]">
            01 / Perfil
          </p>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight text-zinc-100 sm:text-3xl">
            Acerca de mí
          </h2>
          <p className="mt-3 font-mono-tech text-xs text-zinc-500">
            {PROFILE.location}
          </p>
        </Reveal>

        <Reveal
          className="space-y-4 text-sm leading-relaxed text-zinc-300 sm:text-base lg:col-span-8"
          delay={1}
        >
          {PROFILE.aboutParagraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}

          {youtubeLink && (
            <div className="pt-2">
              <a
                href={youtubeLink.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 text-sm font-medium text-zinc-200 transition-colors hover:text-white"
              >
                <SocialBrandIcon id="youtube" className="h-4 w-4 shrink-0" />
                Ver playlists en {youtubeLink.handle}
                <ArrowUpRight
                  size={14}
                  className="text-zinc-400 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-zinc-100"
                />
              </a>
            </div>
          )}
        </Reveal>
      </div>

      <div className="mt-16 border-t border-zinc-800/80 pt-12">
        <Reveal className="mb-8">
          <p className="font-mono-tech text-xs uppercase tracking-wider text-zinc-500">
            Stack técnico
          </p>
          <h3 className="mt-1.5 text-xl font-semibold tracking-tight text-zinc-100">
            Habilidades y herramientas
          </h3>
        </Reveal>

        <div className="divide-y divide-zinc-800/80 border-y border-zinc-800/80">
          {SKILL_GROUPS.map((group, index) => (
            <Reveal key={group.id} delay={((index % 3) + 1) as 1 | 2 | 3}>
              <div className="grid grid-cols-1 gap-4 py-5 md:grid-cols-12 md:items-start md:gap-8">
                <h4 className="font-mono-tech text-xs font-medium text-zinc-400 md:col-span-4 md:pt-1">
                  {group.label}
                </h4>
                <div className="flex flex-wrap gap-2 md:col-span-8">
                  {group.items.map((skill) => (
                    <TechBadge key={skill} name={skill} size="md" />
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
