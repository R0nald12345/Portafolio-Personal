import { useEffect, useRef, useState, type ReactNode } from 'react';

type RevealDelay = 0 | 1 | 2 | 3 | 4;

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: RevealDelay;
}

const DELAY_CLASS: Record<RevealDelay, string> = {
  0: '',
  1: 'reveal-delay-1',
  2: 'reveal-delay-2',
  3: 'reveal-delay-3',
  4: 'reveal-delay-4',
};

const Reveal = ({ children, className = '', delay = 0 }: RevealProps) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (typeof IntersectionObserver === 'undefined') {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        }
      },
      {
        threshold: 0.08,
        rootMargin: '0px 0px -40px 0px',
      },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal ${DELAY_CLASS[delay]} ${isVisible ? 'reveal-visible' : ''} ${className}`.trim()}
    >
      {children}
    </div>
  );
};

export default Reveal;
