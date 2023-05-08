function pxToRem(value) {
  return `${value / 16}rem`;
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    boxShadow: {
      'inset-25': 'inset 0px -6px 10px rgba(0, 0, 0, 0.25)',
      25: '0px 6px 10px rgba(0, 0, 0, 0.25)',
    },
    colors: {
      green: {
        lighter: '#b4d4c3',
        light: '#91B6A2',
        medium: '#56876D',
        dark: '#19381F',
      },
      eggplant: {
        lighter: '#d3bdc8',
        light: '#B08FA0',
        medium: '#6F5060',
        dark: '#462A39',
      },
      white: '#FFFEF9',
      black: '#242529',
    },
    fontFamily: {
      'open-sans': ['Open Sans', 'sans-serif'],
    },
    fontSize: {
      24: pxToRem(24),
      32: pxToRem(32),
      36: pxToRem(36),
    },
    maxWidth: {
      1440: pxToRem(1440),
    },
    spacing: {
      16: pxToRem(16),
      24: pxToRem(24),
      32: pxToRem(32),
      36: pxToRem(36),
      38: pxToRem(38),
      60: pxToRem(60),
      64: pxToRem(64),
      72: pxToRem(72),
      90: pxToRem(90),
      124: pxToRem(124),
    },
    textDecorationThickness: {
      3: '3px',
    },
    textUnderlineOffset: {
      8: pxToRem(8),
    },
    extend: {
      screens: {
        1440: '1440px',
      },
    },
  },
  plugins: [],
};
