import React from 'react'

import ParticipantThumbnails from './index'

export default {
  title: 'LXP/ParticipantThumbnails',
  component: ParticipantThumbnails
}

const Template = (args) => <ParticipantThumbnails {...args} />

export const ParticipantThumbnailsComponent = Template.bind({})
ParticipantThumbnailsComponent.args = {
  listThumbnails: [
    {
      imgThumbnails: '',
      titleThumbnail: 'Name of the Content',
      descpThumbnail:
        'Empresas e profissionais precisam proteger seus dados contra ameaças digitais. Neste curso você aprenderá sobre políticas de segurança, gerenciamento de riscos, prevenção de ataques cibernéticos, resposta a incidentes e muito mais.',
      handleFunctionThumbnail: () => alert('voce clicou aqui :D')
    },
    {
      imgThumbnails: '/bg2.png',
      // limite de caracteres 50 no titulo
      titleThumbnail: 'Blockchain e criptomoedas e criptomoedas e moedas.',
      descpThumbnail:
        'Empresas e profissionais precisam proteger seus dados contra ameaças digitais. Neste curso você aprenderá sobre políticas de segurança, gerenciamento de riscos, prevenção de ataques cibernéticos, resposta a incidentes e muito mais.',
      handleFunctionThumbnail: () => alert('voce clicou aqui :D')
    },
    {
      imgThumbnails: '/Picture.png',
      titleThumbnail: 'Name of the Content',
      descpThumbnail:
        'Empresas e profissionais precisam proteger seus dados contra ameaças digitais. Neste curso você aprenderá sobre políticas de segurança, gerenciamento de riscos, prevenção de ataques cibernéticos, resposta a incidentes e muito mais.',
      handleFunctionThumbnail: () => alert('voce clicou aqui :D')
    },
    {
      imgThumbnails: '',
      titleThumbnail: 'Blockchain e criptomoedas',
      descpThumbnail:
        'Empresas e profissionais precisam proteger seus dados contra ameaças digitais. Neste curso você aprenderá sobre políticas de segurança, gerenciamento de riscos, prevenção de ataques cibernéticos, resposta a incidentes e muito mais.',
      handleFunctionThumbnail: () => alert('voce clicou aqui :D')
    },
    {
      imgThumbnails: '/Picture.png',
      titleThumbnail: 'Name of the Content',
      descpThumbnail:
        'Empresas e profissionais precisam proteger seus dados contra ameaças digitais. Neste curso você aprenderá sobre políticas de segurança, gerenciamento de riscos, prevenção de ataques cibernéticos, resposta a incidentes e muito mais.',
      handleFunctionThumbnail: () => alert('voce clicou aqui :D')
    },
    {
      imgThumbnails: '/bg2.png',
      titleThumbnail: 'Blockchain e criptomoedas',
      descpThumbnail:
        'Empresas e profissionais precisam proteger seus dados contra ameaças digitais. Neste curso você aprenderá sobre políticas de segurança, gerenciamento de riscos, prevenção de ataques cibernéticos, resposta a incidentes e muito mais.',
      handleFunctionThumbnail: () => alert('voce clicou aqui :D')
    },
    {
      imgThumbnails: '/Picture.png',
      titleThumbnail: 'Name of the Content',
      descpThumbnail:
        'Empresas e profissionais precisam proteger seus dados contra ameaças digitais. Neste curso você aprenderá sobre políticas de segurança, gerenciamento de riscos, prevenção de ataques cibernéticos, resposta a incidentes e muito mais.',
      handleFunctionThumbnail: () => alert('voce clicou aqui :D')
    },
    {
      imgThumbnails: '/bg2.png',
      titleThumbnail: 'Blockchain e criptomoedas',
      descpThumbnail:
        'Empresas e profissionais precisam proteger seus dados contra ameaças digitais. Neste curso você aprenderá sobre políticas de segurança, gerenciamento de riscos, prevenção de ataques cibernéticos, resposta a incidentes e muito mais.',
      handleFunctionThumbnail: () => alert('voce clicou aqui :D')
    },
    {
      imgThumbnails: '/Picture.png',
      titleThumbnail: 'Name of the Content',
      descpThumbnail:
        'Empresas e profissionais precisam proteger seus dados contra ameaças digitais. Neste curso você aprenderá sobre políticas de segurança, gerenciamento de riscos, prevenção de ataques cibernéticos, resposta a incidentes e muito mais.',
      handleFunctionThumbnail: () => alert('voce clicou aqui :D')
    },
    {
      imgThumbnails: '/bg2.png',
      titleThumbnail: 'Blockchain e criptomoedas',
      descpThumbnail:
        'Empresas e profissionais precisam proteger seus dados contra ameaças digitais. Neste curso você aprenderá sobre políticas de segurança, gerenciamento de riscos, prevenção de ataques cibernéticos, resposta a incidentes e muito mais.',
      handleFunctionThumbnail: () => alert('voce clicou aqui :D')
    },
    {
      imgThumbnails: '/Picture.png',
      titleThumbnail: 'Name of the Content',
      descpThumbnail:
        'Empresas e profissionais precisam proteger seus dados contra ameaças digitais. Neste curso você aprenderá sobre políticas de segurança, gerenciamento de riscos, prevenção de ataques cibernéticos, resposta a incidentes e muito mais.',
      handleFunctionThumbnail: () => alert('voce clicou aqui :D')
    }
  ]
}
