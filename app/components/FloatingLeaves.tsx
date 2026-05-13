const LEAVES = [
  { x: '6%',  size: '13px', dur: '11s', delay: '0s',   drift: '35px',  spin: '190deg', opacity: '0.16' },
  { x: '16%', size: '9px',  dur: '9s',  delay: '2.2s', drift: '55px',  spin: '280deg', opacity: '0.12' },
  { x: '27%', size: '17px', dur: '13s', delay: '0.8s', drift: '22px',  spin: '130deg', opacity: '0.19' },
  { x: '40%', size: '11px', dur: '10s', delay: '4.1s', drift: '65px',  spin: '350deg', opacity: '0.11' },
  { x: '52%', size: '15px', dur: '12s', delay: '1.5s', drift: '30px',  spin: '215deg', opacity: '0.14' },
  { x: '63%', size: '8px',  dur: '8s',  delay: '3.3s', drift: '48px',  spin: '160deg', opacity: '0.13' },
  { x: '76%', size: '19px', dur: '14s', delay: '0.3s', drift: '26px',  spin: '305deg', opacity: '0.21' },
  { x: '88%', size: '12px', dur: '10s', delay: '5.5s', drift: '58px',  spin: '95deg',  opacity: '0.14' },
  { x: '34%', size: '7px',  dur: '7s',  delay: '6.0s', drift: '42px',  spin: '240deg', opacity: '0.10' },
  { x: '70%', size: '10px', dur: '11s', delay: '2.7s', drift: '33px',  spin: '175deg', opacity: '0.15' },
];

export default function FloatingLeaves() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {LEAVES.map((leaf, i) => (
        <div
          key={i}
          className="floating-leaf"
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          style={{
            '--leaf-x':       leaf.x,
            '--leaf-size':    leaf.size,
            '--leaf-dur':     leaf.dur,
            '--leaf-delay':   leaf.delay,
            '--leaf-drift':   leaf.drift,
            '--leaf-spin':    leaf.spin,
            '--leaf-opacity': leaf.opacity,
          } as any}
        />
      ))}
    </div>
  );
}
