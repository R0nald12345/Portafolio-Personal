import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { PROFILE } from '../data/portfolioData';

interface NavItem {
  id: string;
  label: string;
}

const NAV_ITEMS: NavItem[] = [
  { id: 'inicio', label: 'Inicio' },
  { id: 'acerca', label: 'Perfil' },
  { id: 'experiencia', label: 'Experiencia' },
  { id: 'proyectos', label: 'Proyectos' },
  { id: 'formacion', label: 'Formación' },
  { id: 'contacto', label: 'Contacto' },
];

const Header = () => {
  const [activeSection, setActiveSection] = useState<string>('inicio');
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const sections = NAV_ITEMS.map((item) => document.getElementById(item.id)).filter(
      (el): el is HTMLElement => el !== null,
    );

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible.length > 0) {
          setActiveSection(visible[0].target.id);
        }
      },
      {
        rootMargin: '-25% 0px -60% 0px',
        threshold: [0.1, 0.25, 0.5],
      },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    setIsMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 inset-x-0 z-50 border-b border-zinc-800/80 bg-[#0e0e10]/90 backdrop-blur-sm">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <button
          type="button"
          onClick={() => scrollToSection('inicio')}
          className="text-left text-sm font-medium tracking-tight text-zinc-100 hover:text-white transition-colors cursor-pointer"
        >
          {PROFILE.shortName}
        </button>

        <nav aria-label="Navegación principal" className="hidden md:flex items-center gap-7">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => scrollToSection(item.id)}
                className={`text-sm transition-colors cursor-pointer ${
                  isActive
                    ? 'text-[#d99b43] font-medium'
                    : 'text-zinc-400 hover:text-zinc-100'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        <button
          type="button"
          className="md:hidden p-2 -mr-2 text-zinc-300 hover:text-white transition-colors"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {isMenuOpen && (
        <nav
          aria-label="Navegación móvil"
          className="md:hidden border-t border-zinc-800/80 bg-[#0e0e10] px-6 py-4"
        >
          <div className="flex flex-col gap-1">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => scrollToSection(item.id)}
                  className={`w-full text-left py-2.5 text-sm transition-colors ${
                    isActive
                      ? 'text-[#d99b43] font-medium'
                      : 'text-zinc-300 hover:text-white'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>
        </nav>
      )}
      <div aria-hidden="true" className="scroll-progress-track">
        <span className="scroll-progress-bar" />
      </div>
    </header>
  );
};

export default Header;
