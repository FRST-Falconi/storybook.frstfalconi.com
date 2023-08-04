import React from 'react'

import ParticipantCardOld from './index'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'IJ/ParticipantCardOld',
  component: ParticipantCardOld
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <ParticipantCardOld {...args} />

export const normal = Template.bind({})
normal.args = {
  userInfo: {
    id: 'id-user-00128-idasd',
    name: 'Karen Gisele da Silva dos Santos Silvero',
    avatar: null,
    email: 'nome@empresa.com.br',
    area: 'Tecnologia da Informação e Computação',
    position: 'Estudante/Universitário(a)'
  },
  labels: {
    sendInvitation: 'Enviar convite',
    invitationSuccess: 'Convite enviado',
    remove: 'Remover',
    area: 'Área',
    position: 'Cargo'
  },
  successfullInvite: false,
  handleSendInvitation: (id: any) => alert(`Send: ${id}`),
  handleClickRemove: (id: any) => alert(`Remove: ${id}`)
}

export const brainstorm = Template.bind({})
brainstorm.args = {
  variant: 'secondary',
  userInfo: {
    id: 'id-user-00128-idasd',
    name: 'Karen Gisele da Silva dos Santos Silvero',
    avatar: null,
    email: 'nome@empresa.com.br',
    area: 'Tecnologia da Informação e Computação',
    position: 'Estudante/Universitário(a)'
  },
  labels: {
    sendInvitation: 'Convidar',
    invitationSuccess: 'Convite enviado',
    remove: 'Remover',
    area: 'Área',
    position: 'Cargo',
    or: 'ou',
  },
  successfullInvite: false,
  handleSendInvitation: (id: any) => alert(`Send: ${id}`),
  handleClickRemove: (id: any) => alert(`Remove: ${id}`)
}

export const profile = Template.bind({})
profile.args = {
  variant: 'tertiary',
  userInfo: {
    id: 'id-user-00128-idasd',
    name: 'Karen Gisele da Silva dos Santos Silvero',
    avatar: null,
    email: 'nome+empresa+empresa@empresa.com',
    area: 'Tecnologia da Informação e Computação',
    position: 'Estudante/Universitário(a)'
  },
  labels: {
    sendInvitation: 'Visitar perfil',
    invitationSuccess: 'Convite enviado',
    remove: 'Remover',
    area: 'Área',
    position: 'Cargo',
    or: 'ou',
  },
  successfullInvite: false,
  handleSendInvitation: (id: any) => alert(`Send: ${id}`),
  handleClickRemove: (id: any) => alert(`Remove: ${id}`)
}