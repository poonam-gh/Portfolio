/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: { sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'] },
      boxShadow: {
        glow: '0 16px 45px rgba(59, 130, 246, 0.18)',
        portrait: '0 28px 80px rgba(0, 0, 0, 0.46)',
      },
      keyframes: {
        float: { '0%, 100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-10px)' } },
        pulseRing: { '0%, 100%': { opacity: '0.45', transform: 'scale(1)' }, '50%': { opacity: '0.8', transform: 'scale(1.035)' } },
      },
      animation: { float: 'float 5s ease-in-out infinite', pulseRing: 'pulseRing 4s ease-in-out infinite' },
    },
  },
  plugins: [],
};
