import React from 'react'

import ParticipantCard from './index'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'IJ/ParticipantCard',
  component: ParticipantCard
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <ParticipantCard {...args} />

export const normal = Template.bind({})
normal.args = {
  userInfo: {
    id: '1',
    name: 'Karen Gisele',
    avatar: null,
    email: 'nome@empresa.com.br',
    area: 'Tecnologia da Informação',
    position: 'Estudante/Universitário(a)'
  },
  labels: {
    competences: 'Gaps de Competências',
    modules: 'Módulos recomendados',
    tag: 'Cadastrado',
    area: 'Área',
    position: 'Cargo'
  },
  disabled: false,
  competencesList: [
    {
      id: 1,
      name: 'Gap de competência 1'
    },
    {
      id: 2,
      name: 'Gap de competência 2'
    },
    {
      id: 3,
      name: 'Gap de competência 3'
    }
  ],
  modulesList: [
    {
      id: 1,
      name: 'Modulo selecionado 1'
    },
    {
      id: 2,
      name: 'Modulo selecionado 2'
    },
    {
      id: 3,
      name: 'Modulo selecionado 3'
    }
  ]
}

export const disabled = Template.bind({})
disabled.args = {
  userInfo: {
    id: '1',
    name: 'Karen Gisele',
    avatar: null,
    email: 'nome@empresa.com.br',
    area: 'Tecnologia da Informação',
    position: 'Estudante/Universitário(a)'
  },
  labels: {
    competences: 'Gaps de Competências',
    modules: 'Módulos recomendados',
    tag: 'Inativado',
    area: 'Área',
    position: 'Cargo'
  },
  disabled: true,
  competencesList: [],
  modulesList: []
}
