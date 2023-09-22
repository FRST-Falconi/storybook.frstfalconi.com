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
  description: 'Estas são as pessoas que foram convidadas para revisar se o objetivo deste desafio está alinhado às metas da empresa.  Caso esteja, ele constará como “verificado”.',
  approves:[
    { onClickUserInfo: () => alert('visit profile'), nome: 'Marlon Pereira', data: 'Revisão concluída: desafio verificado',   approve: 'reviewed', avatar:'https://i.pinimg.com/474x/2b/27/2f/2b272f528c3e14054436edd0d8bd2a26.jpg'  },
    { nome: 'Marlon Pereira', data: 'Revisão concluída: desafio precisa de ajustes',   approve: 'adjustments', avatar:''  },
    { nome: 'Marlon Pereira', data: 'Convite enviado: revisão ainda não realizada',   approve: 'guest'  },
   
  ],
  language: 'en-US'

}
