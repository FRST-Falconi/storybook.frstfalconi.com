import React from 'react'
import TableActions from './index'
import AdmButton from './../../DS/admButton'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Form Elements/TableActions',
  component: TableActions
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <TableActions {...args} />

export const Normal = Template.bind({})
Normal.args = {
  isLoading: false,
  lengthElSkeleton: 5,
  columns: ['Colaborador', 'Ação', '', 'Data Limite', 'Status'],
  data: [
    {
      id: 1,
      value: [
        { src: 'https://www.lremanagementllc.com/wp-content/uploads/2019/06/default-avatar.png', id: 'id-avatar-1' },
        'Fazer teste de usabilidade com 5 usuários',
        '08/07/24',
        'completed'
      ],
      showButtonExpanded: true,
      children: <div style={{ height: '300px' }}>Children 01</div>
    },
    {
      id: 2,
      value: [
        { src: 'https://cdn-images.frstfalconi.cloud/path582.svg', id: 'id-avatar-2' },
        'Implementar gamificação na plataforma',
        '12/04/24',
        'not_completed'
      ],
      showButtonExpanded: true,
      children: <div style={{ height: '150px' }}>Children 02</div>
    },
    {
      id: 3,
      value: [
        'https://www.lremanagementllc.com/wp-content/uploads/2019/06/default-avatar.png',
        'Mapear processos de UX',
        '25/07/24',
        'in_progress'
      ],
      showButtonExpanded: true,
      children: <div style={{ height: '150px' }}>Children 03</div>
    },
    {
      id: 4,
      value: [{ src: null, id: 'id-avatar-4' }, 'Implementar gamificação na plataforma', '30/07/24', 'in_progress'],
      showButtonExpanded: true,
      children: <div style={{ height: '150px' }}>Children 04</div>
    },
    {
      id: 5,
      value: [
        { src: null, id: 'id-avatar-5' },
        'Fazer teste de usabilidade com 5 usuários',
        '30/07/24',
        'deprioritized'
      ],
      showButtonExpanded: true,
      children: <div style={{ height: '150px' }}>Children 05</div>
    },
    {
      id: 6,
      value: [
        { src: 'https://cdn-images.frstfalconi.cloud/path582.svg', id: 'id-avatar-6' },
        'Fazer teste de usabilidade com 5 usuários',
        '08/07/24',
        'completed'
      ],
      showButtonExpanded: true,
      children: <div style={{ height: '300px' }}>Children 06</div>
    }
  ],
  onPressAvatar: (e: string) => alert(e),
  labelStatus: {
    completed: 'Concluído',
    not_completed: 'Não concluído',
    in_progress: 'Em andamento',
    deprioritized: 'Despriorizado'
  },
  labelTextVisitProfile: 'Label Ver Perfil'
}

export const ActionMessage = Template.bind({})
ActionMessage.args = {
  isLoading: false,
  lengthElSkeleton: 5,
  columns: ['Colaborador', 'Ação', '', 'Data Limite', 'Status'],
  data: [
    {
      id: 1,
      value: [
        { src: 'https://www.lremanagementllc.com/wp-content/uploads/2019/06/default-avatar.png', id: 'id-avatar-1' },
        'Fazer teste de usabilidade com 5 usuários',
        '08/07/24',
        'completed'
      ],
      actionButtonInbox: (id) => alert(`inbox: ${id}`),
      showButtonExpanded: true,
      children: <div style={{ height: '300px' }}>Children 01</div>
    },
    {
      id: 2,
      value: [
        { src: 'https://cdn-images.frstfalconi.cloud/path582.svg', id: 'id-avatar-2' },
        'Implementar gamificação na plataforma',
        '12/04/24',
        'not_completed'
      ],
      showButtonExpanded: true,
      children: <div style={{ height: '150px' }}>Children 02</div>
    },
    {
      id: 3,
      value: [
        'https://www.lremanagementllc.com/wp-content/uploads/2019/06/default-avatar.png',
        'Mapear processos de UX',
        '25/07/24',
        'in_progress'
      ],
      showButtonExpanded: true,
      children: <div style={{ height: '150px' }}>Children 03</div>
    },
    {
      id: 4,
      value: [{ src: null, id: 'id-avatar-4' }, 'Implementar gamificação na plataforma', '30/07/24', 'in_progress'],
      showButtonExpanded: true,
      children: <div style={{ height: '150px' }}>Children 04</div>
    },
    {
      id: 5,
      value: [
        { src: null, id: 'id-avatar-5' },
        'Fazer teste de usabilidade com 5 usuários',
        '30/07/24',
        'deprioritized'
      ],
      showButtonExpanded: true,
      children: <div style={{ height: '150px' }}>Children 05</div>
    },
    {
      id: 6,
      value: [
        { src: 'https://cdn-images.frstfalconi.cloud/path582.svg', id: 'id-avatar-6' },
        'Fazer teste de usabilidade com 5 usuários',
        '08/07/24',
        'completed'
      ],
      showButtonExpanded: true,
      children: <div style={{ height: '300px' }}>Children 06</div>
    }
  ],
  onPressAvatar: (e: string) => alert(e),
  labelStatus: {
    completed: 'Concluído',
    not_completed: 'Não concluído',
    in_progress: 'Em andamento',
    deprioritized: 'Despriorizado'
  },
  emptyStateCreateAction: {
    mode: 'hidden', // 'button' | 'children'
    labelButtonCreate: 'Criar ação',
    labelAction: 'Realizou mais testes que não estão aqui? Agora é a hora de documentá-los'
  },
  labelTextVisitProfile: 'Label Ver Perfil',
  labelTextMessage: 'Mensagem'
}

export const EmptyStateButton = Template.bind({})
EmptyStateButton.args = {
  isLoading: false,
  lengthElSkeleton: 5,
  columns: ['Colaborador', 'Ação', '', 'Data Limite', 'Status'],
  data: [
    {
      id: 1,
      value: [
        { src: 'https://www.lremanagementllc.com/wp-content/uploads/2019/06/default-avatar.png', id: 'id-avatar-1' },
        'Fazer teste de usabilidade com 5 usuários',
        '08/07/24',
        'completed'
      ],
      actionButtonInbox: (id) => alert(`inbox: ${id}`),
      showButtonExpanded: true,
      children: <div style={{ height: '300px' }}>Children 01</div>
    },
    {
      id: 2,
      value: [
        { src: 'https://cdn-images.frstfalconi.cloud/path582.svg', id: 'id-avatar-2' },
        'Implementar gamificação na plataforma',
        '12/04/24',
        'not_completed'
      ],
      showButtonExpanded: true,
      children: <div style={{ height: '150px' }}>Children 02</div>
    },
    {
      id: 3,
      value: [
        'https://www.lremanagementllc.com/wp-content/uploads/2019/06/default-avatar.png',
        'Mapear processos de UX',
        '25/07/24',
        'in_progress'
      ],
      showButtonExpanded: true,
      children: <div style={{ height: '150px' }}>Children 03</div>
    },
    {
      id: 4,
      value: [{ src: null, id: 'id-avatar-4' }, 'Implementar gamificação na plataforma', '30/07/24', 'in_progress'],
      showButtonExpanded: true,
      children: <div style={{ height: '150px' }}>Children 04</div>
    },
    {
      id: 5,
      value: [
        { src: null, id: 'id-avatar-5' },
        'Fazer teste de usabilidade com 5 usuários',
        '30/07/24',
        'deprioritized'
      ],
      showButtonExpanded: true,
      children: <div style={{ height: '150px' }}>Children 05</div>
    },
    {
      id: 6,
      value: [
        { src: 'https://cdn-images.frstfalconi.cloud/path582.svg', id: 'id-avatar-6' },
        'Fazer teste de usabilidade com 5 usuários',
        '08/07/24',
        'completed'
      ],
      showButtonExpanded: true,
      children: <div style={{ height: '300px' }}>Children 06</div>
    }
  ],
  onPressAvatar: (e: string) => alert(e),
  labelStatus: {
    completed: 'Concluído',
    not_completed: 'Não concluído',
    in_progress: 'Em andamento',
    deprioritized: 'Despriorizado'
  },
  emptyStateCreateAction: {
    mode: 'button', // 'button' | 'children',
    handleClickButtonCreate: (e) => alert('Click Button Create'),
    children: <div style={{ height: '300px' }}>Children Create Action</div>,
    labelButtonCreate: 'Criar ação',
    labelAction: 'Realizou mais testes que não estão aqui? Agora é a hora de documentá-los'
  },
  labelTextVisitProfile: 'Label Ver Perfil',
  labelTextMessage: 'Mensagem'
}

export const EmptyStateChildren = Template.bind({})
EmptyStateChildren.args = {
  isLoading: false,
  lengthElSkeleton: 5,
  columns: ['Colaborador', 'Ação', '', 'Data Limite', 'Status'],
  data: [
    {
      id: 1,
      value: [
        { src: 'https://www.lremanagementllc.com/wp-content/uploads/2019/06/default-avatar.png', id: 'id-avatar-1' },
        'Fazer teste de usabilidade com 5 usuários',
        '08/07/24',
        'completed'
      ],
      actionButtonInbox: (id) => alert(`inbox: ${id}`),
      showButtonExpanded: true,
      children: <div style={{ height: '300px' }}>Children 01</div>
    },
    {
      id: 2,
      value: [
        { src: 'https://cdn-images.frstfalconi.cloud/path582.svg', id: 'id-avatar-2' },
        'Implementar gamificação na plataforma',
        '12/04/24',
        'not_completed'
      ],
      showButtonExpanded: true,
      children: <div style={{ height: '150px' }}>Children 02</div>
    },
    {
      id: 3,
      value: [
        'https://www.lremanagementllc.com/wp-content/uploads/2019/06/default-avatar.png',
        'Mapear processos de UX',
        '25/07/24',
        'in_progress'
      ],
      showButtonExpanded: true,
      children: <div style={{ height: '150px' }}>Children 03</div>
    },
    {
      id: 4,
      value: [{ src: null, id: 'id-avatar-4' }, 'Implementar gamificação na plataforma', '30/07/24', 'in_progress'],
      showButtonExpanded: true,
      children: <div style={{ height: '150px' }}>Children 04</div>
    },
    {
      id: 5,
      value: [
        { src: null, id: 'id-avatar-5' },
        'Fazer teste de usabilidade com 5 usuários',
        '30/07/24',
        'deprioritized'
      ],
      showButtonExpanded: true,
      children: <div style={{ height: '150px' }}>Children 05</div>
    },
    {
      id: 6,
      value: [
        { src: 'https://cdn-images.frstfalconi.cloud/path582.svg', id: 'id-avatar-6' },
        'Fazer teste de usabilidade com 5 usuários',
        '08/07/24',
        'completed'
      ],
      showButtonExpanded: true,
      children: <div style={{ height: '300px' }}>Children 06</div>
    }
  ],
  onPressAvatar: (e: string) => alert(e),
  labelStatus: {
    completed: 'Concluído',
    not_completed: 'Não concluído',
    in_progress: 'Em andamento',
    deprioritized: 'Despriorizado'
  },
  emptyStateCreateAction: {
    mode: 'children', // 'button' | 'children',
    handleClickButtonCreate: (e) => alert('Click Button Create'),
    children: <div style={{ height: '300px' }}>Children Create Action</div>,
    labelButtonCreate: 'Criar ação',
    labelAction: 'Realizou mais testes que não estão aqui? Agora é a hora de documentá-los'
  },
  labelTextVisitProfile: 'Label Ver Perfil',
  labelTextMessage: 'Mensagem'
}
