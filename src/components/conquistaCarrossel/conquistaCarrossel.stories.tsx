import React from 'react'
import ConquistaCarrossel from './index'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Learning Tech/Conquista carrossel',
  component: ConquistaCarrossel
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <ConquistaCarrossel {...args} />

export const normal = Template.bind({})
normal.args = {
  onSelected: (e: any) => {
    alert('Item Selecionado: ' + e)
  },
  onClickAvatar: () => {
    alert('voce clicou no avatar do card')
  },
  onClickName: () => {
    alert('voce clicou no Nome')
  },
  objectCards: [
    {
      description:
        'Aumentei o tempo médio de uso da plataforma de 8 horas/semana para 12 horas/semana ao final do ciclo ágil, um teste para ver se o funcionamento do texto de descrição está certo.',
      problemId: '123',
      statusCard: 1,
      userArea: 'Customer Experience',
      userName: 'Érika Heim'
    },
    {
      description: 'Descobri fatores que estão contribuindo negativamente para que os alunos não engajem na plataforma',
      problemId: '1234',
      statusCard: 2,
      userArea: 'Customer Experience',
      userName: 'Érika Heim'
    },
    {
      description:
        'Aumentei o tempo médio de uso da plataforma de 8 horas/semana para 12 horas/semana ao final do ciclo ágil',
      problemId: '1234',
      statusCard: 1,
      userArea: 'Customer Experience',
      userName: 'Érika Heim'
    },
    {
      description:
        'Aumentei o tempo médio de uso da plataforma de 8 horas/semana para 12 horas/semana ao final do ciclo ágil',
      problemId: '1234',
      statusCard: 2,
      userArea: 'Customer Experience',
      userName: 'Érika Heim'
    },
    {
      description:
        'Aumentei o tempo médio de uso da plataforma de 8 horas/semana para 12 horas/semana ao final do ciclo ágil',
      problemId: '1234',
      statusCard: 2,
      userArea: 'Customer Experience',
      userName: 'Érika Heim'
    },
    {
      description:
        'Aumentei o tempo médio de uso da plataforma de 8 horas/semana para 12 horas/semana ao final do ciclo ágil, com mais texto para ver o comportamento do card.',
      problemId: '1234',
      statusCard: 2,
      userArea: 'Customer Experience',
      userName: 'Érika Heim'
    },
    {
      description:
        'Aumentei o tempo médio de uso da plataforma de 8 horas/semana para 12 horas/semana ao final do ciclo ágil',
      problemId: '1234',
      statusCard: 1,
      userArea: 'Customer Experience',
      userName: 'Érika Heim'
    },
    {
      description:
        'Aumentei o tempo médio de uso da plataforma de 8 horas/semana para 12 horas/semana ao final do ciclo ágil',
      problemId: '1234',
      statusCard: 1,
      userArea: 'Customer Experience',
      userName: 'Érika Heim'
    }
  ],
  textMoreDetails: 'Mais detalhes',
  marginsArrowButton: 50,
  sizeArrowButton: 80,
  horizontalMarginInternScroll: '50px'
}

export const bottom = Template.bind({})
bottom.args = {
  onSelected: (e: any) => {
    alert('Item Selecionado: ' + e)
  },
  objectCards: [
    {
      description:
        'Aumentei o tempo médio de uso da plataforma de 8 horas/semana para 12 horas/semana ao final do ciclo ágil, um teste para ver se o funcionamento do texto de descrição está certo.',
      problemId: '123',
      statusCard: 1,
      userArea: 'Customer Experience',
      userName: 'Érika Heim'
    },
    {
      description: 'Descobri fatores que estão contribuindo negativamente para que os alunos não engajem na plataforma',
      problemId: '1234',
      statusCard: 2,
      userArea: 'Customer Experience',
      userName: 'Érika Heim'
    },
    {
      description:
        'Aumentei o tempo médio de uso da plataforma de 8 horas/semana para 12 horas/semana ao final do ciclo ágil',
      problemId: '1234',
      statusCard: 1,
      userArea: 'Customer Experience',
      userName: 'Érika Heim'
    },
    {
      description:
        'Aumentei o tempo médio de uso da plataforma de 8 horas/semana para 12 horas/semana ao final do ciclo ágil',
      problemId: '1234',
      statusCard: 2,
      userArea: 'Customer Experience',
      userName: 'Érika Heim'
    },
    {
      description:
        'Aumentei o tempo médio de uso da plataforma de 8 horas/semana para 12 horas/semana ao final do ciclo ágil',
      problemId: '1234',
      statusCard: 2,
      userArea: 'Customer Experience',
      userName: 'Érika Heim'
    },
    {
      description:
        'Aumentei o tempo médio de uso da plataforma de 8 horas/semana para 12 horas/semana ao final do ciclo ágil, com mais texto para ver o comportamento do card.',
      problemId: '1234',
      statusCard: 2,
      userArea: 'Customer Experience',
      userName: 'Érika Heim'
    },
    {
      description:
        'Aumentei o tempo médio de uso da plataforma de 8 horas/semana para 12 horas/semana ao final do ciclo ágil',
      problemId: '1234',
      statusCard: 1,
      userArea: 'Customer Experience',
      userName: 'Érika Heim'
    },
    {
      description:
        'Aumentei o tempo médio de uso da plataforma de 8 horas/semana para 12 horas/semana ao final do ciclo ágil',
      problemId: '1234',
      statusCard: 1,
      userArea: 'Customer Experience',
      userName: 'Érika Heim'
    }
  ],
  textMoreDetails: 'Mais detalhes',
  marginsArrowButton: 10,
  sizeArrowButton: 40,
  horizontalMarginInternScroll: '15px',
  positionArrowButton: 'bottom',
  marginTopArrrowButton: '20px'
}
