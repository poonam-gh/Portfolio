import { motion } from 'framer-motion';
import { FiArrowDownRight, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import Button from './common/Button';
import Container from './common/Container';

const item = { hidden: { opacity: 0, y: 18 }, visible: { opacity: 1, y: 0 } };

function Hero() {
  return (
    <section id="top" className="relative isolate flex min-h-[min(890px,100svh)] items-center overflow-hidden pt-[72px]">
      <div className="pointer-events-none absolute -left-44 top-0 -z-10 size-[38rem] rounded-full bg-blue-600/[0.14] blur-[135px]" />
      <div className="pointer-events-none absolute right-0 top-1/4 -z-10 size-[32rem] rounded-full bg-sky-500/[0.09] blur-[135px]" />
      <div className="pointer-events-none absolute bottom-0 left-1/3 -z-10 size-[24rem] rounded-full bg-indigo-500/[0.06] blur-[120px]" />
      <Container>
        <div className="grid items-center gap-16 py-24 lg:grid-cols-[1.2fr_0.8fr] lg:gap-12 xl:gap-24 xl:py-28">
          <motion.div initial="hidden" animate="visible" transition={{ staggerChildren: 0.1, delayChildren: 0.1 }} className="max-w-[52rem]">
            <motion.div variants={item} className="mb-8 inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-400/[0.06] px-3.5 py-2 text-sm font-medium text-blue-300"><span className="size-1.5 rounded-full bg-blue-400" /> Bangalore, India · Open to opportunities</motion.div>
            <motion.p variants={item} className="mb-5 text-base font-medium text-zinc-400">Software Engineer <span className="px-1 text-zinc-600">•</span> Full Stack Developer <span className="px-1 text-zinc-600">•</span> Exploring AI Engineering</motion.p>
            <motion.h1 variants={item} className="max-w-[50rem] text-[2.7rem] font-semibold leading-[1.04] tracking-[-0.055em] sm:text-6xl lg:text-[4.6rem]">Building scalable software today,<br className="hidden lg:block" /> <span className="text-gradient">engineering AI solutions tomorrow.</span></motion.h1>
            <motion.p variants={item} className="mt-8 max-w-[44rem] text-lg leading-8 text-zinc-400 sm:text-xl">Software Engineer with 1+ year of experience building and maintaining enterprise applications. Passionate about backend engineering, scalable systems, and creating reliable software while continuously learning modern technologies.</motion.p>
            <motion.div variants={item} className="mt-10 flex flex-wrap gap-3"><Button href="#projects">View projects <FiArrowDownRight /></Button><Button href="#contact" variant="secondary">Resume on request</Button><Button href="#contact" variant="ghost"><FiMail /> Contact me</Button></motion.div>
            <motion.div variants={item} className="mt-9 flex items-center gap-4" aria-label="Social links"><a href="https://github.com/poonam-gh" target="_blank" rel="noreferrer" className="rounded-md p-2 text-zinc-500 transition-all hover:-translate-y-0.5 hover:bg-white/[0.05] hover:text-white" aria-label="GitHub"><FiGithub className="size-5" /></a><a href="https://www.linkedin.com/in/poonam-chapke-519393229/" target="_blank" rel="noreferrer" className="rounded-md p-2 text-zinc-500 transition-all hover:-translate-y-0.5 hover:bg-white/[0.05] hover:text-white" aria-label="LinkedIn"><FiLinkedin className="size-5" /></a><a href="mailto:pschapke11@gmail.com" className="rounded-md p-2 text-zinc-500 transition-all hover:-translate-y-0.5 hover:bg-white/[0.05] hover:text-white" aria-label="Email Poonam"><FiMail className="size-5" /></a></motion.div>
            <motion.div variants={item} className="mt-7 flex flex-wrap items-center gap-x-7 gap-y-3 text-base text-zinc-500"><span><strong className="font-medium text-zinc-200">5+</strong> enterprise applications</span><span className="hidden size-1 rounded-full bg-zinc-700 sm:block" /><span><strong className="font-medium text-zinc-200">10+</strong> delivered enhancements</span></motion.div>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.94, y: 16 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }} className="relative mx-auto w-full max-w-[440px] py-8 lg:max-w-[490px]">
            <div className="absolute inset-0 rounded-full border border-blue-400/30 bg-blue-500/[0.07] blur-sm animate-pulseRing" />
            <div className="absolute -inset-3 rounded-full border border-blue-400/10" />
            <div className="relative animate-float rounded-full border border-white/[0.18] bg-zinc-900 p-2.5 shadow-portrait"><div className="overflow-hidden rounded-full bg-zinc-800"><img src="/profile.jpeg" alt="Poonam Chapke" className="aspect-square w-full object-cover object-[54%_42%] transition duration-700 hover:scale-[1.04]" /></div></div>
            <div className="surface absolute -bottom-1 -left-4 rounded-xl px-4 py-3.5 backdrop-blur-md sm:-left-8"><p className="text-xs text-zinc-500">Focused on</p><p className="mt-0.5 text-sm font-medium text-zinc-100">Reliable, scalable software</p></div>
            <div className="absolute -right-2 top-10 rounded-full border border-blue-400/25 bg-[#101116]/90 px-3 py-1.5 text-xs font-medium text-blue-200 shadow-lg shadow-black/30 backdrop-blur-md"><span className="mr-1.5 inline-block size-1.5 rounded-full bg-blue-400" />Open to work</div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

export default Hero;
