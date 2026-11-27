import type { ComponentType } from 'react';
import {
  Blocks,
  Braces,
  CheckCircle2,
  Compass,
  Cpu,
  CreditCard,
  DatabaseZap,
  FileCheck2,
  FileText,
  Globe,
  KeyRound,
  Layers,
  ScanSearch,
  Server,
  ShieldAlert,
  ShieldCheck,
  Terminal,
  Webhook,
} from 'lucide-react';
import { FaGithub, FaLinkedin, FaYoutube } from 'react-icons/fa6';
import {
  SiBootstrap,
  SiCloudflare,
  SiCss3,
  SiDocker,
  SiFastapi,
  SiGit,
  SiGithubactions,
  SiGooglesheets,
  SiHtml5,
  SiJavascript,
  SiJsonwebtokens,
  SiKubernetes,
  SiLinux,
  SiNestjs,
  SiNextdotjs,
  SiNodedotjs,
  SiOdoo,
  SiOwasp,
  SiPostgresql,
  SiPypi,
  SiPython,
  SiReact,
  SiTailwindcss,
  SiTelegram,
  SiTraefikproxy,
  SiTrivy,
  SiTypescript,
  SiVercel,
  SiWhatsapp,
} from 'react-icons/si';

type IconComponent = ComponentType<{ className?: string; 'aria-hidden'?: boolean }>;

interface IconEntry {
  icon: IconComponent;
  colorClass: string;
}

const TECH_ICON_MAP: Record<string, IconEntry> = {
  // Infraestructura y contenedores
  'kubernetes (k3s)': { icon: SiKubernetes, colorClass: 'text-[#3B82F6]' },
  docker: { icon: SiDocker, colorClass: 'text-[#2496ED]' },
  'docker compose': { icon: SiDocker, colorClass: 'text-[#38BDF8]' },
  traefik: { icon: SiTraefikproxy, colorClass: 'text-[#24A1C1]' },
  cloudflare: { icon: SiCloudflare, colorClass: 'text-[#F38020]' },
  'cloudflare tunnels': { icon: SiCloudflare, colorClass: 'text-[#F38020]' },
  vercel: { icon: SiVercel, colorClass: 'text-zinc-100' },
  'gestión dns': { icon: Globe, colorClass: 'text-sky-400' },
  linux: { icon: SiLinux, colorClass: 'text-[#FCC624]' },
  wsl2: { icon: Terminal, colorClass: 'text-cyan-400' },
  ssh: { icon: KeyRound, colorClass: 'text-amber-400' },

  // DevOps y DevSecOps
  git: { icon: SiGit, colorClass: 'text-[#F05032]' },
  'github actions': { icon: SiGithubactions, colorClass: 'text-[#3B82F6]' },
  'github actions (ci/cd)': { icon: SiGithubactions, colorClass: 'text-[#3B82F6]' },
  'trivy (iac / docker)': { icon: SiTrivy, colorClass: 'text-[#27B8E8]' },
  gitleaks: { icon: KeyRound, colorClass: 'text-rose-400' },
  'bandit (sast)': { icon: ShieldAlert, colorClass: 'text-amber-400' },
  'semgrep (owasp top 10)': { icon: ScanSearch, colorClass: 'text-emerald-400' },
  'pip-audit (sca)': { icon: SiPypi, colorClass: 'text-[#5B9BD5]' },
  'owasp top 10': { icon: SiOwasp, colorClass: 'text-zinc-200' },
  'nist ssdf': { icon: ShieldCheck, colorClass: 'text-sky-400' },
  'iso 27001': { icon: FileCheck2, colorClass: 'text-emerald-400' },
  'staging / producción': { icon: Server, colorClass: 'text-zinc-300' },
  devsecops: { icon: ShieldCheck, colorClass: 'text-emerald-400' },

  // Backend, ERP e Integraciones
  python: { icon: SiPython, colorClass: 'text-[#4B8BBE]' },
  'odoo 17': { icon: SiOdoo, colorClass: 'text-[#B565A7]' },
  'odoo 18': { icon: SiOdoo, colorClass: 'text-[#B565A7]' },
  'odoo 17 / 18 (orm, owl, qweb)': { icon: SiOdoo, colorClass: 'text-[#B565A7]' },
  owl: { icon: Blocks, colorClass: 'text-[#B565A7]' },
  'custom modules': { icon: Blocks, colorClass: 'text-violet-400' },
  'payment providers': { icon: CreditCard, colorClass: 'text-[#d99b43]' },
  fastapi: { icon: SiFastapi, colorClass: 'text-[#00BFA5]' },
  postgresql: { icon: SiPostgresql, colorClass: 'text-[#5B8FD9]' },
  'node.js': { icon: SiNodedotjs, colorClass: 'text-[#5FA04E]' },
  nestjs: { icon: SiNestjs, colorClass: 'text-[#E0234E]' },
  'next.js': { icon: SiNextdotjs, colorClass: 'text-zinc-100' },
  'next.js (app router)': { icon: SiNextdotjs, colorClass: 'text-zinc-100' },
  'next.js api routes': { icon: SiNextdotjs, colorClass: 'text-zinc-100' },
  'rest apis': { icon: Webhook, colorClass: 'text-sky-400' },
  webhooks: { icon: Webhook, colorClass: 'text-amber-400' },
  'json-rpc': { icon: Braces, colorClass: 'text-zinc-300' },
  'jwt (hs256)': { icon: SiJsonwebtokens, colorClass: 'text-[#FB015B]' },
  'jwt hs256': { icon: SiJsonwebtokens, colorClass: 'text-[#FB015B]' },
  'whatsapp cloud api': { icon: SiWhatsapp, colorClass: 'text-[#25D366]' },
  'meta whatsapp cloud api': { icon: SiWhatsapp, colorClass: 'text-[#25D366]' },
  telegram: { icon: SiTelegram, colorClass: 'text-[#26A5E4]' },
  'google sheets': { icon: SiGooglesheets, colorClass: 'text-[#34A853]' },
  reportlab: { icon: FileText, colorClass: 'text-rose-400' },
  'qweb pdf': { icon: FileText, colorClass: 'text-rose-400' },
  mcp: { icon: Cpu, colorClass: 'text-[#d99b43]' },

  // Frontend
  typescript: { icon: SiTypescript, colorClass: 'text-[#3178C6]' },
  'javascript (es6+)': { icon: SiJavascript, colorClass: 'text-[#F7DF1E]' },
  react: { icon: SiReact, colorClass: 'text-[#61DAFB]' },
  'tailwind css': { icon: SiTailwindcss, colorClass: 'text-[#38BDF8]' },
  'bootstrap 5': { icon: SiBootstrap, colorClass: 'text-[#8B5CF6]' },
  html5: { icon: SiHtml5, colorClass: 'text-[#E34F26]' },
  css3: { icon: SiCss3, colorClass: 'text-[#4C8BF5]' },

  // Arquitectura y calidad
  'clean architecture': { icon: Compass, colorClass: 'text-[#d99b43]' },
  'arquitectura en capas (domain / services / policies)': {
    icon: Layers,
    colorClass: 'text-sky-400',
  },
  solid: { icon: Layers, colorClass: 'text-emerald-400' },
  tdd: { icon: CheckCircle2, colorClass: 'text-emerald-400' },
  sdd: { icon: FileCheck2, colorClass: 'text-[#d99b43]' },
  'optimización sql/orm (sin n+1)': {
    icon: DatabaseZap,
    colorClass: 'text-amber-400',
  },
};

const FALLBACK_ICON: IconEntry = {
  icon: Terminal,
  colorClass: 'text-zinc-400',
};

const SOCIAL_ICON_MAP: Record<'github' | 'linkedin' | 'youtube', IconEntry> = {
  github: { icon: FaGithub, colorClass: 'text-zinc-200' },
  linkedin: { icon: FaLinkedin, colorClass: 'text-[#0A66C2]' },
  youtube: { icon: FaYoutube, colorClass: 'text-[#FF3333]' },
};

interface TechBadgeProps {
  name: string;
  size?: 'sm' | 'md';
}

export const TechBadge = ({ name, size = 'md' }: TechBadgeProps) => {
  const entry = TECH_ICON_MAP[name.toLowerCase()] ?? FALLBACK_ICON;
  const Icon = entry.icon;

  const sizeClass =
    size === 'sm'
      ? 'gap-1.5 px-2 py-0.5 text-[11px] bg-zinc-900/70'
      : 'gap-1.5 px-2.5 py-1 text-xs bg-[#141417] hover:border-zinc-700 hover:text-white';

  const iconSizeClass = size === 'sm' ? 'h-3 w-3 shrink-0' : 'h-3.5 w-3.5 shrink-0';

  return (
    <span
      className={`inline-flex items-center rounded border border-zinc-800 font-mono-tech text-zinc-200 transition-colors ${sizeClass}`}
    >
      <Icon aria-hidden className={`${iconSizeClass} ${entry.colorClass}`} />
      <span>{name}</span>
    </span>
  );
};

interface SocialBrandIconProps {
  id: 'github' | 'linkedin' | 'youtube';
  className?: string;
}

export const SocialBrandIcon = ({
  id,
  className = 'h-4 w-4 shrink-0',
}: SocialBrandIconProps) => {
  const entry = SOCIAL_ICON_MAP[id];
  const Icon = entry.icon;
  return <Icon aria-hidden className={`${className} ${entry.colorClass}`} />;
};
