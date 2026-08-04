import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const update = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(total > 0 ? (window.scrollY / total) * 100 : 0);
    };
    update();
    window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, []);

  return <motion.div className="fixed inset-x-0 top-0 z-[60] h-px origin-left bg-blue-400" animate={{ scaleX: progress / 100 }} />;
}

export default ScrollProgress;
