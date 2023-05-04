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
  languagem: 'en-US',
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
  },
  finalizados: {
    title: 'finalizados',
    count: 777,
    percentage: '70%'
  }
}
