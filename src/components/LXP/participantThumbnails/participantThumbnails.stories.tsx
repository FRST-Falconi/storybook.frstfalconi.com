import React from 'react'

import ParticipantThumbnails from './index'

export default {
  title: 'LXP/ParticipantThumbnails',
  component: ParticipantThumbnails
}

const Template = (args) => <ParticipantThumbnails {...args} />

export const ParticipantThumbnailsComponent = Template.bind({})
ParticipantThumbnailsComponent.args = {
  titleThumbnail: 'Name of the Content',
  descpThumbnail:
    'Empresas e profissionais precisam proteger seus dados contra ameaças digitais. Neste curso você aprenderá sobre políticas de segurança, gerenciamento de riscos, prevenção de ataques cibernéticos, resposta a incidentes e muito mais.',
  handleFunctionThumbnail: () => alert('voce clicou aqui :D')
}
