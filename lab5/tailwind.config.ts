import { Config } from 'tailwindcss';
import { fontFamily } from 'tailwindcss/defaultTheme';

const config: Config = {
  content: ['./src/app/**/*.{html,ts}'],
  theme: {
    fontFamily: {
      sans: ['Geist', ...fontFamily.sans],
      mono: ['Geist\\ Mono', ...fontFamily.mono],
    },
    extend: {},
  },
  plugins: [],
};

export default config;
