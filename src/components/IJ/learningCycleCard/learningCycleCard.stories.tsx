import React from 'react'

import LearningCycleCard from './index'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'IJ/LearningCycleCard',
  component: LearningCycleCard
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <LearningCycleCard {...args} />

export const normal = Template.bind({})
normal.args = {
  id: '1',
  tag: 'Life Long Learning',
  name: 'Learning Cycle Name',
  favorite: false,
  labels: {
    groupsQuantity: 5,
    groupsLabel: 'Grupos',
    groupsQuantityDescription: 'nesse plano de conteúdo'
  },
  disabled: false,
  modulesList: [
    {
      id: 1,
      name: 'Atendimento/suporte/comercial'
    },
    {
      id: 2,
      name: 'Atendimento/suporte/comercial/vend...'
    },
    {
      id: 3,
      name: 'Suporte/Gestão'
    },
    {
      id: 4,
      name: 'Comercial/Vendas'
    },
    {
      id: 5,
      name: 'Suporte Santos/São Paulo'
    },
    {
      id: 6,
      name: 'Suporte Santos/São Paulo'
    }
  ]
}

export const favorite = Template.bind({})
favorite.args = {
  id: '1',
  tag: 'Life Long Learning',
  name: 'Learning Cycle Name',
  favorite: true,
  labels: {
    groupsQuantity: 5,
    groupsLabel: 'Grupos',
    groupsQuantityDescription: 'nesse plano de conteúdo'
  },
  disabled: false,
  modulesList: [
    {
      id: 1,
      name: 'Atendimento/suporte/comercial'
    },
    {
      id: 2,
      name: 'Atendimento/suporte/comercial/vend...'
    },
    {
      id: 3,
      name: 'Suporte/Gestão'
    },
    {
      id: 4,
      name: 'Comercial/Vendas'
    },
    {
      id: 5,
      name: 'Suporte Santos/São Paulo'
    },
    {
      id: 6,
      name: 'Suporte Santos/São Paulo'
    }
  ]
}

export const disabled = Template.bind({})
disabled.args = {
  id: '1',
  tag: 'Life Long Learning',
  name: 'Learning Cycle Name',
  favorite: false,
  labels: {
    groupsQuantity: 5,
    groupsLabel: 'Grupos',
    groupsQuantityDescription: 'nesse plano de conteúdo'
  },
  disabled: true,
  modulesList: [
    {
      id: 1,
      name: 'Atendimento/suporte/comercial'
    },
    {
      id: 2,
      name: 'Atendimento/suporte/comercial/vend...'
    },
    {
      id: 3,
      name: 'Suporte/Gestão'
    },
    {
      id: 4,
      name: 'Comercial/Vendas'
    },
    {
      id: 5,
      name: 'Suporte Santos/São Paulo'
    },
    {
      id: 6,
      name: 'Suporte Santos/São Paulo'
    }
  ]
}
