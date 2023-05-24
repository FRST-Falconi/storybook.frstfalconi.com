import React from 'react'

import Votar from './index'

export default {
  title: 'Brainstorm/Votar',
  component: Votar
}

const Template = (args) => <Votar {...args} />

export const normal = Template.bind({})
normal.args = {
  textButton: 'Votar',
  valueQuantidade: 24,
  textValueQuantidade: 'Votos',
  votado: false,
  user: 'userAutor'
}
