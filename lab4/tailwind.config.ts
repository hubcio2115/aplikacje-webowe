import { Config } from 'tailwindcss';
import { fontFamily } from 'tailwindcss/defaultTheme';

const config = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    fontFamily: {
      sans: ['Geist', ...fontFamily.sans],
      mono: ['Geist\\ Mono', ...fontFamily.mono],
    },
    extend: {},
  },
  plugins: [],
} satisfies Config;

export default config;
