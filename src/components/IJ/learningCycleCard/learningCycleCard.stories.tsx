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
    groupsLabel: 'grupos',
    groupsQuantityDescription: 'nesse plano de conteúdo',
    actionButton: 'Editar grupo'
  },
  disabled: false,
  handleClick: () => alert('click'),
  handleFavorite: (favorite) => alert(`favorite: ${favorite}`),

  menuOptions: [
    {
      label: 'Editar Plano de conteúdo',
      icon: null,
      type: 'edit',
      action: (id: string | number, option: any) => console.log('handleEdit', id, option)
    },
    {
      label: 'Duplicar Plano de conteúdo',
      icon: null,
      type: 'duplicate',
      action: (id: string | number, option: any) => console.log('handleDuplicate', id, option)
    },
    {
      label: 'Desativar Plano de conteúdo',
      icon: null,
      type: 'disable',
      action: (id: string | number, option: any) => console.log('handleDisable', id, option)
    },
    {
      label: 'Excluir Plano de conteúdo',
      icon: 'edit icon',
      type: 'delete',
      action: (id: string | number, option: any) => console.log('handleDelete', id, option)
    }
  ],
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
    groupsLabel: 'grupos',
    groupsQuantityDescription: 'nesse plano de conteúdo',
    actionButton: 'Editar grupo'
  },
  handleClick: () => alert('click'),
  handleFavorite: (favorite) => alert(`favorite: ${favorite}`),
  menuOptions: [
    {
      label: 'Editar Plano de conteúdo',
      icon: null,
      type: 'edit',
      action: (id: string | number) => console.log('handleEdit', id)
    },
    {
      label: 'Duplicar Plano de conteúdo',
      icon: null,
      type: 'duplicate',
      action: (id: string | number) => console.log('handleDuplicate', id)
    },
    {
      label: 'Desativar Plano de conteúdo',
      icon: null,
      type: 'disable',
      action: (id: string | number) => console.log('handleDisable', id)
    },
    {
      label: 'Excluir Plano de conteúdo',
      icon: 'edit icon',
      type: 'delete',
      action: (id: string | number) => console.log('handleDelete', id)
    }
  ],
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
    },
    {
      id: 7,
      name: 'Suporte Santos/São Paulo'
    },
    {
      id: 8,
      name: 'Suporte Santos/São Paulo'
    },
    {
      id: 9,
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
    groupsLabel: 'grupos',
    groupsQuantityDescription: 'nesse plano de conteúdo',
    actionButton: 'Editar grupo'
  },
  handleClick: () => alert('click'),
  handleFavorite: (favorite) => alert(`favorite: ${favorite}`),
  menuOptions: [
    {
      label: 'Editar Plano de conteúdo',
      icon: null,
      type: 'edit',
      action: (id: string | number) => console.log('handleEdit', id)
    },
    {
      label: 'Duplicar Plano de conteúdo',
      icon: null,
      type: 'duplicate',
      action: (id: string | number) => console.log('handleDuplicate', id)
    },
    {
      label: 'Desativar Plano de conteúdo',
      icon: null,
      type: 'disable',
      action: (id: string | number) => console.log('handleDisable', id)
    },
    {
      label: 'Excluir Plano de conteúdo',
      icon: 'edit icon',
      type: 'delete',
      action: (id: string | number) => console.log('handleDelete', id)
    }
  ],
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
