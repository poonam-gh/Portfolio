import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import Container from './common/Container';

const links = [
  { label: 'About', id: 'about' },
  { label: 'Experience', id: 'experience' },
  { label: 'Projects', id: 'projects' },
  { label: 'Skills', id: 'skills' },
  { label: 'Contact', id: 'contact' },
];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('');

  useEffect(() => {
    const update = () => {
      setScrolled(window.scrollY > 18);
      const visible = links.find((link) => {
        const section = document.getElementById(link.id);
        if (!section) return false;
        const { top, bottom } = section.getBoundingClientRect();
        return top <= 150 && bottom > 150;
      });
      setActive(visible?.id ?? '');
    };
    update();
    window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled ? 'border-b border-white/[0.08] bg-[#09090B]/75 backdrop-blur-xl' : 'bg-transparent'}`}>
      <Container className="flex h-[72px] items-center justify-between">
        <a href="#top" className="group flex items-center gap-2 text-lg font-semibold tracking-tight" aria-label="Poonam Chapke — back to top">
          Poonam<span className="text-blue-400 transition-colors group-hover:text-blue-300">.</span>
        </a>
        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary navigation">
          {links.map((link) => <a key={link.id} href={`#${link.id}`} className={`rounded-md px-3 py-2 text-[15px] transition-colors ${active === link.id ? 'text-white' : 'text-zinc-500 hover:text-zinc-200'}`}>{link.label}</a>)}
        </nav>
        <a href="#contact" className="hidden rounded-md border border-white/[0.12] px-3.5 py-2 text-sm text-zinc-200 transition-colors hover:border-white/25 hover:bg-white/[0.05] md:inline-flex">Let&apos;s talk</a>
        <button type="button" className="rounded-md p-2 text-zinc-300 md:hidden" onClick={() => setOpen((value) => !value)} aria-expanded={open} aria-label="Toggle navigation">
          {open ? <HiX className="size-5" /> : <HiMenuAlt3 className="size-5" />}
        </button>
      </Container>
      <AnimatePresence>
        {open && <motion.nav initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.2 }} className="border-t border-white/[0.08] bg-[#09090B]/95 px-6 py-4 backdrop-blur-xl md:hidden" aria-label="Mobile navigation">
          <div className="mx-auto flex max-w-[1400px] flex-col gap-1">{links.map((link) => <a key={link.id} href={`#${link.id}`} onClick={() => setOpen(false)} className={`rounded-md px-3 py-2.5 text-[15px] ${active === link.id ? 'bg-white/[0.06] text-white' : 'text-zinc-400'}`}>{link.label}</a>)}</div>
        </motion.nav>}
      </AnimatePresence>
    </header>
  );
}

export default Navbar;
