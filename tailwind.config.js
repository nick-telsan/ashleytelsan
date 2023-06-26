function pxToRem(value) {
  return `${value / 16}rem`;
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    borderRadius: {
      full: '9999px',
      25: pxToRem(25),
    },
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
        lighter: '#D9C6D0',
        light: '#B08FA0',
        medium: '#6F5060',
        dark: '#462A39',
      },
      white: '#f8f8f8',
      black: '#242529',
    },
    fontFamily: {
      'open-sans': ['Open Sans', 'sans-serif'],
    },
    fontSize: {
      16: pxToRem(16),
      24: pxToRem(24),
      32: pxToRem(32),
      36: pxToRem(36),
    },
    lineHeight: {
      32: pxToRem(32),
    },
    maxWidth: {
      1192: pxToRem(1192),
      1440: pxToRem(1440),
    },
    spacing: {
      0: pxToRem(0),
      12: pxToRem(12),
      16: pxToRem(16),
      20: pxToRem(20),
      24: pxToRem(24),
      32: pxToRem(32),
      36: pxToRem(36),
      38: pxToRem(38),
      44: pxToRem(44),
      48: pxToRem(48),
      56: pxToRem(56),
      60: pxToRem(60),
      64: pxToRem(64),
      72: pxToRem(72),
      90: pxToRem(90),
      96: pxToRem(96),
      100: pxToRem(100),
      124: pxToRem(124),
      150: pxToRem(150),
      250: pxToRem(250),
      300: pxToRem(300),
      308: pxToRem(308),
      526: pxToRem(526),
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
