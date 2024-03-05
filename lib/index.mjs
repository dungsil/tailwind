import { getIconCollections, iconsPlugin } from '@egoist/tailwindcss-icons'
import defu from 'defu'
import { fontFamily } from 'tailwindcss/defaultTheme'

/**
 * Default TailWind Config
 *
 * @type { import('tailwindcss').Config }
 */
const defaultConfig = {
  plugins: [
    iconsPlugin({
      collections: getIconCollections(['lucide', 'simple-icons']),
    }),
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          ['Pretendard Variable', 'Pretendard', ...fontFamily.sans],
          {
            fontFeatureSettings: '"calt", "case", "salt", "ss03", "ss05", "ss06"',
          },
        ],
      },
      colors: {
        gray: {
          50: '#F9F9F9',
          100: '#F3F3F3',
          200: '#E7E7E7',
          300: '#D4D4D4',
          400: '#A3A3A3',
          500: '#727272',
          600: '#555555',
          700: '#404040',
          800: '#282828',
          900: '#181818',
          950: '#0E0E0E',
        },
      },
    },
  },
}

/**
 * @dungsil/tailwind
 *
 * @param {import('tailwindcss').Config} additional additional tailwind config
 */
export const dungsilPreset = (additional) => defu(
  additional,
  defaultConfig,
)
