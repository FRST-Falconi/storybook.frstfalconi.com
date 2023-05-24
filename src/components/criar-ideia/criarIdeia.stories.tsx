import React from 'react'

import CriarIdeia from './index'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Brainstorm/CriarIdeia',
  component: CriarIdeia
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <CriarIdeia {...args} />

export const normal = Template.bind({})
normal.args = {
  textoCriar: 'Dar ideia',
  nomeUser: 'Nome Sobrenome',
  nameEmpresa: 'Empresa',
  dateCriarIdeia: 'Hoje',
  textoDigitarIdeia: 'Clique aqui e digite sua ideia'
}
