import React from 'react'

import MentoringCard from './index'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'DS/NewCards/MentoringCard',
  component: MentoringCard,
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <MentoringCard {...args} />

export const normal = Template.bind({})
normal.args = {
    avatar: 'https://xsgames.co/randomusers/avatar.php?g=female',
    first_name: 'Cláudia',
    last_name: 'Mattos',
    position: 'Senior Advisor na Frst',
    title: 'Oficina de Desafios',
    subtitle1: ['Tutorial Plataforma FRST'],
    happenedIn: 'realizada em:',
    date: '29/09/2023',
    link_recording: 'Link da sessão',
    handleAvatarClick: () => alert('acessar perfil!'),
    handleRecordLink: (link) => alert(`Acessar sessão: ${link}`)
}
