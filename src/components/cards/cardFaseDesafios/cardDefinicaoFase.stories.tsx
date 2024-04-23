import React from 'react'

import CardFaseDesafios from './index'
import { EditIcon, FowardArrow, TrashIconNew } from '../../../shared/icons'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Cards/CardFaseDesafios',
  component: CardFaseDesafios
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <CardFaseDesafios {...args} />

export const CardFaseUm = Template.bind({})
CardFaseUm.args = {
  cardTitle: 'Space Race Game',
  cardDescription:
    'Nossa ferramenta guia de resolução de problemas em ciclos ágeis de aprendizado, colaboração e experimentação.',
    textButtonHypothesis: 'Continuar com outra hipótese',

  handleClickContinue: () => {
    alert('continue')
  },
  optionsMenuMore: [
    {
      description: 'Editar',
      startIcon: <EditIcon fill="#222" />,
      onClick: (e) => alert('click edit')
    },
    {
      description: 'Excluir',
      startIcon: <TrashIconNew fill="#C1341A" />,
      onClick: (e) => alert('click delete'),
      color: '#C1341A'
    }
  ],
  titleFase: 'Definição',
  fase: '1',
  handleToView: () => {
    alert('View')
  }
}

export const CardFaseDois = Template.bind({})
CardFaseDois.args = {
  cardTitle: 'Desafio',
  cardDescription:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sed massa sit amet orci varius congue. Aenean ut gravida arcu, fermentum commodo ipsum. Aenean dolor eros, mattis non velit vel, ornare accumsan elit. Nunc dapibus elit non sapien molestie blandit. Sed ut convallis quam. Sed pellentesque congue nisl ut gravida. Integer interdum ligula bibendum augue convallis molestie. Sed vitae lectus accumsan, egestas ex ut, tincidunt diam. Donec blandit feugiat nulla ac rhoncus. Morbi scelerisque, tellus eu aliquam luctus, quam turpis iaculis augue, non dignissim lacus est lacinia libero. Quisque ut sem vel nisi dictum fringilla.',
    textButton: 'Continuar desafio',
  handleClickContinue: () => {
    alert('continue')
  },
  optionsMenuMore: [
    {
      description: 'Continuar',
      startIcon: <FowardArrow fill="#222" />,
      onClick: (e) => alert('click continue')
    },
    {
      description: 'Editar',
      startIcon: <EditIcon fill="#222" />,
      onClick: (e) => alert('click edit')
    },
    {
      description: 'Excluir',
      startIcon: <TrashIconNew fill="#C1341A" />,
      onClick: (e) => alert('click delete'),
      color: '#C1341A'
    }
  ],
  Actions: 3,
  titleFase: 'Hipóteses',
  fase: '2',
  handleToView: () => {
    alert('View')
  }
}

export const CardFinalizado = Template.bind({})
CardFinalizado.args = {
  cardTitle: 'Desafio',
  cardDescription:
    'Nossa ferramenta guia de resolução de problemas em ciclos ágeis de aprendizado, colaboração e experimentação.',
    textButton: 'Vizualizar',
  optionsMenuMore: [
    {
      description: 'Editar',
      startIcon: <EditIcon fill="#222" />,
      onClick: (e) => alert('click edit')
    },
    {
      description: 'Excluir',
      startIcon: <TrashIconNew fill="#C1341A" />,
      onClick: (e) => alert('click delete'),
      color: '#C1341A'
    }
  ],
  titleFase: 'Finalizado',
  fase: 'finalizado',
  handleToView: () => {
    alert('View 2')
  }
}
