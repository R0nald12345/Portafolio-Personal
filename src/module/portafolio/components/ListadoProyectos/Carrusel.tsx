import { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, Maximize2, X } from 'lucide-react';

interface CarruselProps {
  imagenes: string[];
  title: string;
}

const Carrusel = ({ imagenes, title }: CarruselProps) => {
  const [curr, setCurr] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const total = imagenes.length;

  useEffect(() => {
    if (!isLightboxOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsLightboxOpen(false);
      } else if (event.key === 'ArrowLeft' && total > 1) {
        setCurr((prev) => (prev === 0 ? total - 1 : prev - 1));
      } else if (event.key === 'ArrowRight' && total > 1) {
        setCurr((prev) => (prev === total - 1 ? 0 : prev + 1));
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isLightboxOpen, total]);

  if (total === 0) {
    return null;
  }

  const safeIndex = curr < total ? curr : 0;
  const activeImage = imagenes[safeIndex];

  const prev = () => setCurr((index) => (index === 0 ? total - 1 : index - 1));
  const next = () => setCurr((index) => (index === total - 1 ? 0 : index + 1));

  return (
    <>
      <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-zinc-800/80 bg-[#0b0b0d] group">
        <img
          src={activeImage}
          alt={`${title} — captura ${safeIndex + 1} de ${total}`}
          loading="lazy"
          className="h-full w-full object-cover object-top"
        />

        <button
          type="button"
          onClick={() => setIsLightboxOpen(true)}
          aria-label={`Ampliar captura de ${title}`}
          className="absolute top-3 right-3 rounded-md border border-zinc-700/80 bg-[#0e0e10]/85 p-1.5 text-zinc-200 opacity-0 group-hover:opacity-100 focus:opacity-100 transition-opacity hover:border-zinc-500 cursor-pointer"
        >
          <Maximize2 size={14} />
        </button>

        {total > 1 && (
          <>
            <div className="absolute inset-y-0 left-2 flex items-center">
              <button
                type="button"
                onClick={prev}
                aria-label="Captura anterior"
                className="rounded-md border border-zinc-700/80 bg-[#0e0e10]/85 p-1.5 text-zinc-200 hover:border-zinc-500 hover:text-white transition-colors cursor-pointer"
              >
                <ChevronLeft size={16} />
              </button>
            </div>
            <div className="absolute inset-y-0 right-2 flex items-center">
              <button
                type="button"
                onClick={next}
                aria-label="Captura siguiente"
                className="rounded-md border border-zinc-700/80 bg-[#0e0e10]/85 p-1.5 text-zinc-200 hover:border-zinc-500 hover:text-white transition-colors cursor-pointer"
              >
                <ChevronRight size={16} />
              </button>
            </div>
            <div className="absolute bottom-3 right-3 rounded border border-zinc-700/80 bg-[#0e0e10]/85 px-2 py-0.5 font-mono text-[11px] text-zinc-300">
              {safeIndex + 1} / {total}
            </div>
          </>
        )}
      </div>

      {isLightboxOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`Vista ampliada de ${title}`}
          onClick={() => setIsLightboxOpen(false)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 sm:p-8"
        >
          <div
            onClick={(event) => event.stopPropagation()}
            className="relative max-w-5xl w-full rounded-xl border border-zinc-800 bg-[#121214] overflow-hidden"
          >
            <div className="flex items-center justify-between border-b border-zinc-800 px-4 py-3">
              <span className="text-sm font-medium text-zinc-200">
                {title}{' '}
                {total > 1 && (
                  <span className="font-mono text-xs text-zinc-500 ml-2">
                    ({safeIndex + 1}/{total})
                  </span>
                )}
              </span>
              <button
                type="button"
                onClick={() => setIsLightboxOpen(false)}
                aria-label="Cerrar vista ampliada"
                className="rounded-md p-1 text-zinc-400 hover:text-white cursor-pointer"
              >
                <X size={18} />
              </button>
            </div>

            <div className="relative bg-black flex items-center justify-center max-h-[80vh]">
              <img
                src={activeImage}
                alt={`${title} — captura ampliada ${safeIndex + 1}`}
                className="max-h-[80vh] w-auto object-contain"
              />
              {total > 1 && (
                <>
                  <button
                    type="button"
                    onClick={prev}
                    aria-label="Captura anterior"
                    className="absolute left-3 rounded-md border border-zinc-700 bg-[#0e0e10]/90 p-2 text-zinc-200 hover:text-white cursor-pointer"
                  >
                    <ChevronLeft size={18} />
                  </button>
                  <button
                    type="button"
                    onClick={next}
                    aria-label="Captura siguiente"
                    className="absolute right-3 rounded-md border border-zinc-700 bg-[#0e0e10]/90 p-2 text-zinc-200 hover:text-white cursor-pointer"
                  >
                    <ChevronRight size={18} />
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Carrusel;
