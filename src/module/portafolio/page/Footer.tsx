import { PROFILE, SOCIAL_LINKS } from '../data/portfolioData';
import { SocialBrandIcon } from '../components/TechBadge';

const Footer = () => {
  return (
    <footer className="border-t border-zinc-800/80 py-8">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-6 text-xs text-zinc-500 sm:flex-row">
        <p>
          © 2026 {PROFILE.name} · {PROFILE.location}
        </p>

        <div className="flex items-center gap-5">
          {SOCIAL_LINKS.map((link) => (
            <a
              key={link.id}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              title={link.label}
              className="opacity-80 transition-opacity hover:opacity-100"
            >
              <SocialBrandIcon id={link.id} className="h-4 w-4 shrink-0" />
            </a>
          ))}
          <a
            href="#inicio"
            className="font-mono-tech text-zinc-500 transition-colors hover:text-zinc-300"
          >
            Volver arriba ↑
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
