import { useEffect } from 'react';

function CursorGlow() {
  useEffect(() => {
    const move = (event) => {
      document.documentElement.style.setProperty('--cursor-x', `${event.clientX}px`);
      document.documentElement.style.setProperty('--cursor-y', `${event.clientY}px`);
    };
    window.addEventListener('pointermove', move, { passive: true });
    return () => window.removeEventListener('pointermove', move);
  }, []);

  return <div className="cursor-glow pointer-events-none fixed inset-0 z-0" aria-hidden="true" />;
}

export default CursorGlow;
