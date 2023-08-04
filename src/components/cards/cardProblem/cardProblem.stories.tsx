import React from 'react'

import CardProblem from './index'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Cards/CardProblem',
  component: CardProblem,
  argTypes: {
    language: {
      control: 'select',
      options: ['pt-BR', 'en-US', 'es-ES']
    }
  }
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <CardProblem {...args} />

export const hipoteseLevantada = Template.bind({})
hipoteseLevantada.args = {
  selected: false,
  language: 'pt-BR',

  problemID: 'bla-blu-fla',
  userName: 'Roberto Lima',

  problemStatus: 'hipoteseLevantada',

  userCargo: 'Tecnologia da informação (Estudante/Universitário(a))',
  cardTitle: 'Aumentar o engajamento dos alunos na plataforma D2L',
  statusProblema: 'aguardando',
  trilhaVinculada: 'Digital Business Mindset',
  lastUpdated: 'Atualizado 30 de Abr. 2022',
  isButtonVerMais: true,
  onClick: (problemID) => {
    alert(problemID)
  },
  handleSelect: (problemID) => {
    alert(`Select ${problemID}`)
  },
  isActiveClickProfile: false,
  // onClickAvatar: () => {
  //   alert('clicou no avatar')
  // },
  // onClickName: () => {
  //   alert('clicou no name')
  // }
}

export const finalizado = Template.bind({})
finalizado.args = {
  selected: false,
  language: 'pt-BR',
  problemID: 'bla-blu-fla',
  userName: 'Roberto Lima',
  problemStatus: 'finalizado',
  userCargo: 'Tecnologia da informação (Estudante/Universitário(a))',

  cardTitle: 'Aumentar o engajamento dos alunos na plataforma D2L',
  statusProblema: 'aprovado',
  trilhaVinculada: 'Digital Business Mindset',
  lastUpdated: 'Atualizado 30 de Abr. 2022'
}

export const proxPassos = Template.bind({})
proxPassos.args = {
  selected: false,
  language: 'pt-BR',

  problemID: 'bla-blu-fla',
  userName: 'Roberto Lima',

  problemStatus: 'proxPassos',

  userCargo: 'Tecnologia da informação (Estudante/Universitário(a))',
  cardTitle: 'Aumentar o engajamento dos alunos na plataforma D2L',
  statusProblema: 'revisar',
  trilhaVinculada: 'Digital Business Mindset',
  lastUpdated: 'Atualizado 30 de Abr. 2022'
}

export const resultadosAprendizados = Template.bind({})
resultadosAprendizados.args = {
  selected: false,
  language: 'pt-BR',

  problemID: 'bla-blu-fla',
  userName: 'Roberto Lima',

  problemStatus: 'resultadosAprendizados',

  userCargo: 'Tecnologia da informação (Estudante/Universitário(a))',
  cardTitle: 'Aumentar o engajamento dos alunos na plataforma D2L',
  statusProblema: 'aprovado',

  lastUpdated: 'Atualizado 30 de Abr. 2022'
}

export const testesRealizados = Template.bind({})
testesRealizados.args = {
  selected: false,
  language: 'pt-BR',

  problemID: 'bla-blu-fla',
  userName: 'Roberto Lima',

  problemStatus: 'testesRealizados',

  userCargo: 'Tecnologia da informação (Estudante/Universitário(a))',
  cardTitle: 'Aumentar o engajamento dos alunos na plataforma D2L',
  trilhaVinculada: 'Digital Business Mindset',
  lastUpdated: 'Atualizado 30 de Abr. 2022'
}

export const verificado = Template.bind({})
verificado.args = {
  selected: false,
  language: 'pt-BR',

  problemID: 'bla-blu-fla',
  userName: 'Roberto Lima',

  problemStatus: 'hipoteseLevantada',

  userCargo: 'Tecnologia da informação (Estudante/Universitário(a))',
  cardTitle: 'Aumentar o engajamento dos alunos na plataforma D2L',
  statusProblema: 'aguardando',
  trilhaVinculada: 'Digital Business Mindset',
  lastUpdated: 'Atualizado 30 de Abr. 2022',
  isButtonVerMais: true,
  onClick: (problemID) => {
    alert(problemID)
  },
  isVerified: true
}

export const problemaDefinido = Template.bind({})
problemaDefinido.args = {
  selected: false,
  language: 'pt-BR',

  problemID: 'bla-blu-fla',
  userName: 'Roberto Lima',

  problemStatus: 'problemaDefinido',

  userCargo: 'Tecnologia da informação (Estudante/Universitário(a))',
  cardTitle: 'Aumentar o engajamento dos alunos na plataforma D2L',
  statusProblema: 'aguardando',

  lastUpdated: 'Atualizado 30 de Abr. 2022'
}

export const naoIniciou = Template.bind({})
naoIniciou.args = {
  selected: false,
  language: 'pt-BR',

  problemID: 'bla-blu-fla',
  userName: 'Roberto Lima',

  problemStatus: 'naoIniciou',

  userCargo: 'Tecnologia da informação (Estudante/Universitário(a))'
}
