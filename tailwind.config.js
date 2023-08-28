/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      "soft-cyan": "hsl(174, 77%, 80%)",
      "strong-cyan": "hsl(174, 86%, 45%)",
      "light-grayish-red": "hsl(14, 92%, 95%)",
      "light-red": "hsl(15, 100%, 70%)",
      "pale-blue": "hsl(226, 100%, 87%)",
      "very-pale-blue": "hsl(230, 100%, 99%)",
      "light-grayish-blue-1": "hsl(224, 65%, 95%)",
      "light-grayish-blue-2": "hsl(223, 50%, 87%)",
      "grayish-blue": "hsl(225, 20%, 60%)",
      "dark-desaturated-blue": "hsl(227, 35%, 25%)",
      "white": "hsl(0, 0%, 100%)",
      "yellow": "yellow",
      "red": "red"
    },
    borderRadius: {
      'none': '0',
      'sm': '0.125rem',
      DEFAULT: '0.25rem',
      'md': '0.375rem',
      'lg': '0.5rem',
      'xl': '0.75rem',
      '2xl': '1rem',
      '3xl': '1.5rem',
      'full': '9999px',
      'custom': '160px',
    },
    extend: {},
  },
  plugins: [],
}