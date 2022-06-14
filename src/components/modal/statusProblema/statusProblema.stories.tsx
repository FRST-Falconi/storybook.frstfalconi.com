import React from 'react'

import ModalStatusProblema from './index'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Modal/ModalstatusProblema',
    component: ModalStatusProblema,
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <ModalStatusProblema {...args} />

export const Teste1 = Template.bind({})
Teste1.args = {
  open: true,
  title: 'Parabéns, o seu problema foi aprovado!',
  description: 'Você pode ter mais de uma pessoa aprovando ou não o seu problema e todos os resultados aparecerão aqui.',
  approves:[
    { nome: 'Marlon Pereira', data: '28 abr. de 2022',   approve: 'aprovar'  },
    { nome: 'Marlon Pereira', data: '28 abr. de 2022',   approve: 'revisar'  },
    { nome: 'Marlon Pereira', data: '28 abr. de 2022',   approve: 'aguardar'  },
   
  ]

}

