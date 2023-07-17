import React from 'react'

import ParticipantThumbnails from './index'

export default {
  title: 'LXP/ParticipantThumbnails',
  component: ParticipantThumbnails
}

const Template = (args) => <ParticipantThumbnails {...args} />

export const ParticipantThumbnailsNormal = Template.bind({})
ParticipantThumbnailsNormal.args = {
  imgThumbnails: '	https://lxp-cdn.frstfalconi.cloud/00b028f3ed6a5be9bef381e197332579.jpg',
  titleThumbnail: 'Name of the Content',
  descpThumbnail: 'Empresas e profissionais precisam proteger seus dados contra ameaças digitais.',
  handleFunctionThumbnail: () => alert('voce clicou aqui :D'),
  author: 'Camila Bastos'
}

export const ParticipantThumbnailsWithLongText = Template.bind({})
ParticipantThumbnailsWithLongText.args = {
  imgThumbnails: 'https://lxp-cdn.frstfalconi.cloud/thumbParticipant.png',
  titleThumbnail: 'Name of the Content',
  descpThumbnail:
    'Empresas e profissionais precisam proteger seus dados contra ameaças digitais. Neste curso você aprenderá sobre políticas de segurança, gerenciamento de riscos, prevenção de ataques cibernéticos, resposta a incidentes e muito mais. Empresas e profissionais precisam proteger seus dados contra ameaças digitais. Neste curso você aprenderá sobre políticas de segurança, gerenciamento de riscos, prevenção de ataques cibernéticos, resposta a incidentes e muito mais.',
  handleFunctionThumbnail: () => alert('voce clicou aqui :D'),
  author: ''
}
