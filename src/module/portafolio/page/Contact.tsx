import { useState } from 'react';
import {
  ArrowUpRight,
  Check,
  Copy,
  Github,
  Linkedin,
  Mail,
  Phone,
  Youtube,
} from 'lucide-react';
import { PROFILE, SOCIAL_LINKS } from '../data/portfolioData';
import Reveal from '../components/Reveal';

const SOCIAL_ICONS = {
  github: Github,
  linkedin: Linkedin,
  youtube: Youtube,
} as const;

const Contact = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PROFILE.contact.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div className="mx-auto max-w-5xl px-6">
      <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12">
        <Reveal className="lg:col-span-5">
          <p className="font-mono-tech text-xs uppercase tracking-wider text-[#d99b43]">
            05 / Contacto
          </p>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight text-zinc-100 sm:text-3xl">
            Hablemos de tu proyecto
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-zinc-400">
            Disponible para proyectos freelance, implementaciones Odoo 17/18, infraestructura Kubernetes/Docker, automatización DevSecOps y roles FullStack.
          </p>
          <p className="mt-4 font-mono-tech text-xs text-zinc-500">
            {PROFILE.location} · Trabajo remoto y presencial.
          </p>
        </Reveal>

        <Reveal className="lg:col-span-7" delay={1}>
          {/* TODO(security): Public recruiter contact details (email and phone) are intentionally displayed per portfolio owner request. */}
          <div className="divide-y divide-zinc-800/80 rounded-xl border border-zinc-800/90 bg-[#141417]">
            <div className="flex flex-wrap items-center justify-between gap-3 px-5 py-4">
              <a
                href={`mailto:${PROFILE.contact.email}`}
                className="flex items-center gap-3 text-sm text-zinc-100 transition-colors hover:text-[#d99b43]"
              >
                <Mail size={16} className="shrink-0 text-zinc-500" />
                <span>
                  <span className="block font-mono-tech text-[11px] text-zinc-500">
                    Correo electrónico
                  </span>
                  <span className="font-medium">{PROFILE.contact.email}</span>
                </span>
              </a>

              <button
                type="button"
                onClick={handleCopyEmail}
                className="inline-flex cursor-pointer items-center gap-1.5 rounded-md border border-zinc-800 bg-zinc-900 px-2.5 py-1.5 font-mono-tech text-xs text-zinc-300 transition-colors hover:border-zinc-700 hover:text-white"
              >
                {copied ? <Check size={13} /> : <Copy size={13} />}
                {copied ? 'Copiado' : 'Copiar'}
              </button>
            </div>

            <a
              href={`tel:${PROFILE.contact.phoneHref}`}
              className="group flex items-center justify-between gap-3 px-5 py-4 text-sm text-zinc-100 transition-colors hover:bg-zinc-900/60"
            >
              <span className="flex items-center gap-3">
                <Phone size={16} className="shrink-0 text-zinc-500" />
                <span>
                  <span className="block font-mono-tech text-[11px] text-zinc-500">
                    Teléfono / WhatsApp
                  </span>
                  <span className="font-medium">
                    {PROFILE.contact.phoneDisplay}
                  </span>
                </span>
              </span>
              <ArrowUpRight
                size={15}
                className="text-zinc-500 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-zinc-200"
              />
            </a>

            {SOCIAL_LINKS.map((link) => {
              const Icon = SOCIAL_ICONS[link.id];
              return (
                <a
                  key={link.id}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between gap-3 px-5 py-4 text-sm text-zinc-100 transition-colors hover:bg-zinc-900/60"
                >
                  <span className="flex items-center gap-3">
                    <Icon size={16} className="shrink-0 text-zinc-500" />
                    <span>
                      <span className="block font-mono-tech text-[11px] text-zinc-500">
                        {link.label}
                      </span>
                      <span className="font-medium">{link.handle}</span>
                    </span>
                  </span>
                  <ArrowUpRight
                    size={15}
                    className="text-zinc-500 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-zinc-200"
                  />
                </a>
              );
            })}
          </div>
        </Reveal>
      </div>
    </div>
  );
};

export default Contact;
