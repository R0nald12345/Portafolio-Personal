import { PROFILE } from '../data/portfolioData';

const Footer = () => {
  return (
    <footer className="border-t border-zinc-800/80 py-8">
      <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-zinc-500">
        <p>
          © 2026 {PROFILE.name} · {PROFILE.location}
        </p>
        <a
          href="#inicio"
          className="font-mono text-zinc-500 hover:text-zinc-300 transition-colors"
        >
          Volver arriba ↑
        </a>
      </div>
    </footer>
  );
};

export default Footer;
