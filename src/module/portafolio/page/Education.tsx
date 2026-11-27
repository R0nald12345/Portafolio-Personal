import { EDUCATION } from '../data/portfolioData';
import Reveal from '../components/Reveal';

const Education = () => {
  return (
    <div className="mx-auto max-w-5xl px-6">
      <Reveal className="mb-10">
        <p className="mb-2 font-mono-tech text-xs uppercase tracking-wider text-[#d99b43]">
          04 / Formación
        </p>
        <h2 className="text-2xl font-semibold tracking-tight text-zinc-100 sm:text-3xl">
          Educación y especialización
        </h2>
      </Reveal>

      <div className="divide-y divide-zinc-800/80 border-y border-zinc-800/80">
        {EDUCATION.map((item, index) => (
          <Reveal key={item.id} delay={((index % 4) + 1) as 1 | 2 | 3 | 4}>
            <div className="flex flex-col justify-between gap-2 py-5 sm:flex-row sm:items-baseline">
              <div>
                <h3 className="text-base font-medium text-zinc-100">
                  {item.degree}
                </h3>
                <p className="mt-0.5 text-sm text-zinc-400">
                  {item.institution}
                </p>
              </div>
              <span className="shrink-0 font-mono-tech text-xs text-zinc-500">
                {item.period}
              </span>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
};

export default Education;
