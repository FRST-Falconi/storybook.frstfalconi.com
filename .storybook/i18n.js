import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

const supportedLngs = ['en-US', 'pt-BR', 'es']
const ns = ['common']

const resources = {
  'en-US': {
    translation: {
      'globals.weekdays': ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'],
      'globals.monthsInitials': ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    }
  },
  'pt-BR': {
    translation: {
      'globals.weekdays': [
        'domingo',
        'segunda-feira',
        'terça-feira',
        'quarta-feira',
        'quinta-feira',
        'sexta-feira',
        'sabado'
      ],
      'globals.monthsInitials': ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez']
    }
  },
  es: {
    translation: {
      'globals.weekdays': ['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado'],
      'globals.monthsInitials': ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dec']
    }
  }
}

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    lng: 'pt-BR',
    fallbackLng: 'pt-BR',
    interpolation: {
      escapeValue: false
    },
    defaultNS: 'common',
    ns,
    supportedLngs
  })

i18n.addResourceBundle('en-US', 'common', require('../public/locales/en-US.json'))
i18n.addResourceBundle('pt-BR', 'common', require('../public/locales/pt-BR.json'))
i18n.addResourceBundle('es', 'common', require('../public/locales/es.json'))

export { i18n }
