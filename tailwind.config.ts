import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'summit-dark': '#1a2e1f',
        'summit-green': '#3a5a3d',
        'summit-sand': '#e8dcc4',
        'summit-stone': '#8a8778',
      },
      fontFamily: {
        display: ['Georgia', 'serif'],
      },
    },
  },
  plugins: [],
};

export default config;
