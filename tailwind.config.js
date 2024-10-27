/** @type {import('tailwindcss').Config} */
module.exports = {
  daisyui: {
    themes: ["light", "dark", "cupcake"],
  },

  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        fira: ['Fira Code', 'monospace'],
        martin: ['Martian Mono', 'monospace']
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
};
