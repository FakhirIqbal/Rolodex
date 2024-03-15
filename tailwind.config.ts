import type { Config } from 'tailwindcss'
const defaultTheme = require("tailwindcss/defaultTheme");

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      "2xsm": "375px",
      xsm: "425px",
      "3xl": "2000px",
      ...defaultTheme.screens,
    },
    extend: {
      fontFamily: {
        // 👇 Add CSS variables
        noto: ["var(--font-Noto_Sans)"],
        phoppin: ["var(--font-Poppins)"],
        Ubuntu: ["var(--font-Ubuntu)"],
      },
      keyframes: {
      wiggle: {
        '0%, 100%': {  opacity: '0.3' },
        '50%': { opacity: '1' },
      },},
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
      },
      boxShadow: {
        '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
      },
      backgroundColor: {
        primary: "#25AAE1"
      },
      colors: {
        primary: "#25AAE1"
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [require("flowbite/plugin")],
}
export default config
