import React from 'react'

import ParticipantThumbnails from './index'

export default {
  title: 'LXP/ParticipantThumbnails',
  component: ParticipantThumbnails
}

const Template = (args) => <ParticipantThumbnails {...args} />

export const ParticipantThumbnailsNormal = Template.bind({})
ParticipantThumbnailsNormal.args = {
  imgThumbnails: 'https://cdn-lxp.dev.frstfalconi.cloud/8c8463ba501c84831da34466364041ca.png',
  titleThumbnail: 'Name of the Content',
  descpThumbnail:
    'Empresas e profissionais precisam proteger seus dados contra ameaças digitais. Neste curso você aprenderá sobre políticas de segurança, gerenciamento de riscos, prevenção de ataques cibernéticos, resposta a incidentes e muito mais. ',
  handleFunctionThumbnail: () => alert('voce clicou aqui :D')
}

export const ParticipantThumbnailsWithLongText = Template.bind({})
ParticipantThumbnailsWithLongText.args = {
  imgThumbnails: 'https://cdn-lxp.dev.frstfalconi.cloud/8c8463ba501c84831da34466364041ca.png',
  titleThumbnail: 'Name of the Content',
  descpThumbnail:
    'Empresas e profissionais precisam proteger seus dados contra ameaças digitais. Neste curso você aprenderá sobre políticas de segurança, gerenciamento de riscos, prevenção de ataques cibernéticos, resposta a incidentes e muito mais. Empresas e profissionais precisam proteger seus dados contra ameaças digitais. Neste curso você aprenderá sobre políticas de segurança, gerenciamento de riscos, prevenção de ataques cibernéticos, resposta a incidentes e muito mais.',
  handleFunctionThumbnail: () => alert('voce clicou aqui :D')
}

