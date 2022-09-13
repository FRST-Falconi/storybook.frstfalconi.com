import React from 'react'

import SpecialistContact from './index'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'EBR/SpecialistContact',
    component: SpecialistContact,
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <SpecialistContact {...args} />

export const normal = Template.bind({})
normal.args = {
    title: 'Especialista FRST responsável',
    mobileVersion: false,
    avatar: 'https://i.gyazo.com/499dda909b1ebfe0375d1efa2d5d00a8.png',
    name: 'Bárbara Vianello',
    email: 'barbara.martins@frstfalconi.com',
    telephone: '(11) 97474-3346',
    textButtonConversation: 'Iniciar conversa',
    handleActionConversation: () => alert('conversation'),
    textButtonSendEmail: 'Enviar e-mail',
    handleActionSendEmail: () => alert('send email'),
}