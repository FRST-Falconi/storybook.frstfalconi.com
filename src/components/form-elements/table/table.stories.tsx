import React from 'react'
import Table from './index'
import AdmButton from './../../DS/admButton'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Form Elements/Table',
  component: Table
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Table {...args} />

export const Normal = Template.bind({})
Normal.args = {
  isLoading: false,
  lengthElSkeleton: 3,
  columns: [
    { title: 'Colaborador', width: '20%', align: 'center' },
    { title: 'Ação', width: '40%', align: 'left' },
    { title: 'Data Limite', width: '20%', align: 'center' },
    { title: 'Status', width: '20%', align: 'center' }
  ],
  data: [
    {
      id: 1,
      value: [
        <div
          style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <AdmButton variant="image" />
        </div>,
        'Fazer teste de usabilidade com 5 usuários',
        '08/07/24',
        <div
          style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          Concluido
        </div>
      ],
      showButtonExpanded: true,
      children: <div style={{ height: '300px' }}>Children 01</div>
    },
    {
      id: 2,
      value: [
        <AdmButton variant="image" />,
        'Implementar gamificação na plataforma',
        '12/04/24',
        <div>Não concluido</div>
      ],
      showButtonExpanded: true,
      children: <div>Children 02</div>
    }
  ]
}
