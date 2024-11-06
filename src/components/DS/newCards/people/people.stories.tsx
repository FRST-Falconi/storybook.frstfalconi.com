import React from 'react'

import PeopleCard from './index'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'DS/NewCards/PeopleCard',
  component: PeopleCard,
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <PeopleCard {...args} />

export const normal = Template.bind({})
normal.args = {
  avatar: 'https://xsgames.co/randomusers/avatar.php?g=female',
  name: 'Beatriz Amaral Souza',
  area: 'Financeiro',
  position: 'Analista',
  showBtnProfile: true,
  showBtnInvite: true,
  showBtnMessage: true,
  handleClickProfile: () => alert('Clicado profile!'),
  handleClickInvite: () => alert('Clicado Invite!'),
  handleClickMessage: () => alert('Clicado Message!')
}
