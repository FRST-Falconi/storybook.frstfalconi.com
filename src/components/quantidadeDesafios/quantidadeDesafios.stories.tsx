import React from 'react'

import QuantidadeDesafios from './index'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Base/QuantidadeDesafios',
  component: QuantidadeDesafios
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <QuantidadeDesafios {...args} />

export const normal = Template.bind({})
normal.args = {
  languagem: 'es',
  definicao: {
    title: 'definicao',
    count: 111,
    percentage: '10%',
    title_en: 'definition',
    title_es: 'definición'
  },
  hipoteses: {
    title: 'hipoteses',
    count: 222,
    percentage: '20%'
  },
  testes: {
    title: 'testes',
    count: 333,
    percentage: '30%'
  },
  resultados: {
    title: 'resultados',
    count: 444,
    percentage: '40%'
  },
  proximosPassos: {
    title: 'Próximos Passos',
    count: 555,
    percentage: '50%'
  }
}


export const normalWithFinished = Template.bind({})
normalWithFinished.args = {
  languagem: 'es',
  definicao: {
    title: 'Definição (meta)',
    count: 111,
    percentage: '10.93%',
    title_en: 'Definição (meta)',
    title_es: 'Definição (meta)'
  },
  hipoteses: {
    title: 'Plano de ação',
    count: 222,
    percentage: '20.88%'
  },
  testes: {
    title: 'Execução',
    count: 333,
    percentage: '30.54%'
  },
  resultados: {
    title: 'Resultado',
    count: 444,
    percentage: '40.92%'
  },
  proximosPassos: {
    title: 'Próximos passos',
    count: 555,
    percentage: '50.14%'
  },
  finalizados: {
    title: 'Finalizados',
    count: 666,
    percentage: '60.22%'
  }
}
