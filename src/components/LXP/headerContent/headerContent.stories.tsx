import React from 'react'

import HeaderContent from './index'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'LXP/HeaderContent',
  component: HeaderContent
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <HeaderContent {...args} />

export const InProgress = Template.bind({})
InProgress.args = {
  listaRecomendacao: [
    {
      title: 'Blockchain e criptomoedas',
      description:
        'Bacon ipsum dolor amet landjaeger pastrami pork belly flank shankle ground round. Bacon ipsum dolor amet landjaeger pastrami pork belly flank shankle ground round.',
      typeOfHeader: 'inProgress',
      progresso: 80,
      bgImg: '/bg1.png',
      onClick: () => {
        alert('Continuar o Curso')
      },
      channel: 'XP Investimentos',
      labelButton: 'Continuar curso'
    },
    {
      title: 'Blockchain e criptomoedas',
      description:
        'Bacon ipsum dolor amet landjaeger pastrami pork belly flank shankle ground round. Bacon ipsum dolor amet landjaeger pastrami pork belly flank shankle ground round. Bacon ipsum dolor amet landjaeger pastrami pork belly flank shankle ground round. aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
      typeOfHeader: 'recomendation',
      bgImg: '/bg2.png',
      onClick: () => {
        alert('Começar o Curso!')
      },
      channel: 'XP Investimentos',
      labelButton: 'Começar curso'
    },
    {
      title: 'Blockchain e criptomoedas',
      description:
        'Bacon ipsum dolor amet landjaeger pastrami pork belly flank shankle ground round. Chicken tri-tip alcatra, pastrami buffalo pork chop shoulder drumstick ham hock landjaeger.',
      typeOfHeader: 'inProgress',
      progresso: 80,
      bgImg: '/bg1.png',
      onClick: () => {
        alert('Continuar o Curso')
      },
      channel: 'XP Investimentos',
      labelButton: 'Continuar curso'
    },
    {
      title: 'Blockchain e criptomoedas',
      description:
        'Bacon ipsum dolor amet landjaeger pastrami pork belly flank shankle ground round. Chicken tri-tip alcatra, pastrami buffalo pork chop shoulder drumstick ham hock landjaeger.',
      typeOfHeader: 'recomendation',
      bgImg: '/bg2.png',
      onClick: () => {
        alert('Começar o Curso!')
      },
      channel: 'XP Investimentos',
      labelButton: 'Começar curso'
    },
    {
      title: 'Blockchain e criptomoedas',
      description:
        'Bacon ipsum dolor amet landjaeger pastrami pork belly flank shankle ground round. Chicken tri-tip alcatra, pastrami buffalo pork chop shoulder drumstick ham hock landjaeger.',
      typeOfHeader: 'inProgress',
      progresso: 80,
      bgImg: '/bg1.png',
      onClick: () => {
        alert('Continuar o Curso')
      },
      channel: 'XP Investimentos',
      labelButton: 'Continuar curso'
    },
    {
      title: 'Blockchain e criptomoedas',
      description:
        'Bacon ipsum dolor amet landjaeger pastrami pork belly flank shankle ground round. Chicken tri-tip alcatra, pastrami buffalo pork chop shoulder drumstick ham hock landjaeger.',
      typeOfHeader: 'recomendation',
      bgImg: '/bg2.png',
      onClick: () => {
        alert('Começar o Curso!')
      },
      channel: 'XP Investimentos',
      labelButton: 'Começar curso'
    }
  ]
}
