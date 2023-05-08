module.exports = {
  extends: [
    'plugin:tailwindcss/recommended',
    'plugin:prettier/recommended',
    'next/core-web-vitals',
    'plugin:@next/next/recommended',
  ],
  rules: {
    'tailwindcss/no-arbitrary-value': 1,
  },
};
