'use client';

const DOTS = [
  { size: 48, l: 6,  t: 14, dur: 4.5, dl: 0.0 },
  { size: 22, l: 18, t: 72, dur: 6.0, dl: 1.3 },
  { size: 38, l: 44, t: 20, dur: 5.1, dl: 0.7 },
  { size: 18, l: 68, t: 65, dur: 7.0, dl: 2.0 },
  { size: 54, l: 80, t: 12, dur: 4.8, dl: 0.4 },
  { size: 26, l: 91, t: 78, dur: 5.6, dl: 1.7 },
  { size: 32, l: 55, t: 82, dur: 4.2, dl: 0.9 },
  { size: 16, l: 30, t: 40, dur: 6.5, dl: 1.5 },
];

export default function PageHeroDecor() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
      {DOTS.map((d, i) => (
        <div
          key={i}
          className="ph-particle"
          style={{
            width: d.size,
            height: d.size,
            left: `${d.l}%`,
            top: `${d.t}%`,
            animationName: 'floatIcon',
            animationDuration: `${d.dur}s`,
            animationDelay: `${d.dl}s`,
            animationTimingFunction: 'ease-in-out',
            animationIterationCount: 'infinite',
          }}
        />
      ))}
    </div>
  );
}
