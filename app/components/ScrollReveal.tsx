'use client';
import { useEffect, useRef, ReactNode } from 'react';

type AnimationType = 'up' | 'left' | 'right' | 'pop' | 'zoom' | 'fade';

interface ScrollRevealProps {
  children?: ReactNode;
  animation?: AnimationType;
  delay?: number;
  className?: string;
  threshold?: number;
}

export default function ScrollReveal({
  children,
  animation = 'up',
  delay = 0,
  className = '',
  threshold = 0.12,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (delay > 0) el.style.transitionDelay = `${delay}ms`;
          el.classList.add('sr-visible');
          observer.unobserve(el);
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay, threshold]);

  return (
    <div ref={ref} className={`sr-${animation} ${className}`}>
      {children}
    </div>
  );
}
