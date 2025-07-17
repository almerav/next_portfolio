// tailwind.config.js
module.exports = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        intel: ['var(--font-intel-one-mono)'],
        sans: ['var(--font-poppins)', 'sans-serif'],
        mono: ['var(--font-geist-mono)', 'monospace'],
        cursive: ['var(--font-dancing)', 'cursive'],
        outfit: ['var(--font-outfit)', 'sans-serif'],
        geist: ['var(--font-geist-sans)', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
