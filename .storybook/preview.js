import { i18n } from './i18n.js'

export const parameters = {
  i18n,
  locale: 'en-US',
  locales: {
    'en-US': 'English',
    'pt-BR': 'Portuguese (BR)',
    es: 'Spanish'
  },

  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  }
}
