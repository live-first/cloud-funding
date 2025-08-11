import type { StorybookConfig } from '@storybook/nextjs-vite'
import autoprefixer from 'autoprefixer'
import postcssTailwind from '@tailwindcss/postcss'

const config: StorybookConfig = {
  stories: ['../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-onboarding',
    '@chromatic-com/storybook',
    '@storybook/addon-docs',
    '@storybook/addon-a11y',
    '@storybook/addon-vitest',
  ],
  framework: {
    name: '@storybook/nextjs-vite',
    options: {},
  },
  staticDirs: ['../public'],
  viteFinal: async (config) => {
    config.css = {
      postcss: {
        plugins: [autoprefixer(), postcssTailwind()],
      },
    }
    return config
  },
}
export default config
