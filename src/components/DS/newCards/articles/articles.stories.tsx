import React from 'react'

import ArticleCard from './index'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'DS/NewCards/ArticleCard',
  component: ArticleCard,
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <ArticleCard {...args} />

export const normal = Template.bind({})
normal.args = {
  title: 'Como criar um desafio na plataforma FRST?',
  description: 'A plataforma FRST te ajuda a alcançar resultados que impulsionarão a sua empresa. Ao criar desafios, você será guiado pela plataforma que utiliza uma metodologia única e neste artigo te daremos dicas de como criar o seu desafio na nossa plataforma',
  company: {
    icon: 'https://lxp-cdn.frstfalconi.cloud/STORYBOOK/60ef5d74b488c39e9d095851b99c68fe.png',
    name: 'Frst Falconi',
    uuid: '123'
  },
  handleClick: () => alert('acessar!')
}
