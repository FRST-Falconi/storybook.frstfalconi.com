import React from 'react'

import CardDefinicaoFase from './index'
import { EditIcon, FowardArrow, TrashIconNew } from '../../../shared/icons'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Cards/CardDefinicaoFase',
  component: CardDefinicaoFase
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <CardDefinicaoFase {...args} />

export const CardFaseUm = Template.bind({})
CardFaseUm.args = {
  cardTitle: 'Space Race Game',
  cardDescription:
    'Nossa ferramenta guia de resolução de problemas em ciclos ágeis de aprendizado, colaboração e experimentação.',
  faseId: '123',
  textButtonVisualizar: 'Vizualizar',
  textButtonContinue: 'Continuar',
  handleClick: (problemId) => {
    alert(problemId)
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
  titleFase: 'Definição do objetivo',
  fase: '1',
  handleToView: () => {
    alert('View')
  }
}

export const CardFinalizado = Template.bind({})
CardFinalizado.args = {
  cardTitle: 'Space Race Game',
  cardDescription:
    'Nossa ferramenta guia de resolução de problemas em ciclos ágeis de aprendizado, colaboração e experimentação.',
  faseId: '456',
  textButtonVisualizar: 'Vizualizar',
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
  titleFase: 'Finalizado',
  fase: 'finalizado',
  handleToView: () => {
    alert('View 2')
  }
}
