import { motion } from 'framer-motion';

const variants = {
  primary: 'border border-blue-400/30 bg-blue-500 text-white shadow-glow hover:bg-blue-400',
  secondary: 'border border-white/10 bg-white/[0.04] text-zinc-100 hover:border-white/20 hover:bg-white/[0.08]',
  ghost: 'text-zinc-300 hover:text-white',
};

function Button({ children, href, variant = 'primary', className = '', ...props }) {
  return (
    <motion.a
      href={href}
      className={`inline-flex items-center justify-center gap-2 rounded-lg px-5 py-3 text-sm font-medium transition-colors ${variants[variant]} ${className}`}
      whileHover={{ y: -2, scale: 1.015 }}
      whileTap={{ scale: 0.98 }}
      {...props}
    >
      {children}
    </motion.a>
  );
}

export default Button;
