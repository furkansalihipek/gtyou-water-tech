/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    screens: {
      'xs': '375px',     // Küçük mobil cihazlar
      'sm': '640px',     // Mobil cihazlar
      'md': '768px',     // Tablet
      'lg': '1024px',    // Küçük laptop/desktop
      'xl': '1280px',    // Büyük laptop/desktop
      '2xl': '1536px',   // Ekstra geniş ekranlar
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)"
      }
    },
  },
  plugins: [],
}

