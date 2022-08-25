import React from 'react'

import AvatarWithInfo from './index'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Card LT/Avatar With Info',
    component: AvatarWithInfo,
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <AvatarWithInfo {...args} />

export const Teste1 = Template.bind({})
Teste1.args = {
  nomeCompleto: 'Roberto Lima',
  cargo: 'Estudante / Universitário(a)'
}