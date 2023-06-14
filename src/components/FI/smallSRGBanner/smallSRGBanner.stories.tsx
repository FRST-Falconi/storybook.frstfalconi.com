import React from 'react'

import SmallSRGBanner from './index'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'FI/SmallSRGBanner',
  component: SmallSRGBanner
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <SmallSRGBanner {...args} />

export const normal = Template.bind({})
normal.args = {
  textButton: 'Criar novo desafio',
  handleClick: () => alert('Clicado!'),
  textTitleLogo: 'DESAFIO',
  isTexto: false
}

export const ComTexto = Template.bind({})
ComTexto.args = {
  textButton: 'Criar novo desafio',
  handleClick: () => alert('Clicado!'),
  textTitleLogo: 'DESAFIO',
  isTexto: true
}

export const ComTextoIngles = Template.bind({})
ComTextoIngles.args = {
  textButton: 'Criar novo desafio',
  handleClick: () => alert('Clicado!'),
  textTitleLogo: 'DESAFIO',
  isTexto: true,
  traducao: 'en-US'
}

export const ComTextoEspanhol = Template.bind({})
ComTextoEspanhol.args = {
  textButton: 'Criar novo desafio',
  handleClick: () => alert('Clicado!'),
  textTitleLogo: 'DESAFIO',
  isTexto: true,
  traducao: 'es-ES'
}
