import { EXPERIENCES } from '../data/portfolioData';
import Reveal from '../components/Reveal';

const Experience = () => {
  return (
    <div className="mx-auto max-w-5xl px-6">
      <Reveal className="mb-12 max-w-2xl">
        <p className="font-mono-tech text-xs uppercase tracking-wider text-[#d99b43]">
          02 / Trayectoria
        </p>
        <h2 className="mt-2 text-2xl font-semibold tracking-tight text-zinc-100 sm:text-3xl">
          Experiencia laboral
        </h2>
        <p className="mt-2 text-sm leading-relaxed text-zinc-400">
          Infraestructura SaaS multi-tenant en Kubernetes, módulos ERP en Odoo 17/18, desarrollos freelance en producción y docencia universitaria.
        </p>
      </Reveal>

      <div className="divide-y divide-zinc-800/80 border-t border-zinc-800/80">
        {EXPERIENCES.map((exp, index) => (
          <Reveal key={exp.id} delay={(index % 3) as 0 | 1 | 2}>
            <article className="grid grid-cols-1 gap-6 py-10 md:grid-cols-[230px_1fr] md:gap-10">
              <div>
                <p className="font-mono-tech text-xs font-medium text-[#d99b43]">
                  {exp.period}
                </p>
                <p className="mt-2 text-sm font-semibold text-zinc-100">
                  {exp.company}
                </p>
                <p className="mt-0.5 text-xs text-zinc-500">{exp.location}</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold tracking-tight text-zinc-100 sm:text-xl">
                  {exp.role}
                </h3>

                <ul className="mt-4 space-y-3.5">
                  {exp.highlights.map((item) => (
                    <li
                      key={item.topic}
                      className="relative pl-4 text-sm leading-relaxed text-zinc-400 before:absolute before:top-2 before:left-0 before:h-1.5 before:w-1.5 before:rounded-full before:bg-[#d99b43]"
                    >
                      <strong className="font-medium text-zinc-100">
                        {item.topic}:
                      </strong>{' '}
                      {item.detail}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </div>
  );
};

export default Experience;
