import React from 'react'

import ParticipantThumbnails from './index'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'LXP/ParticipantThumbnails',
  component: ParticipantThumbnails
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <ParticipantThumbnails {...args} />

export const ParticipantThumbnailsComponent = Template.bind({})
ParticipantThumbnailsComponent.args = {
  listThumbnails: [
    {
      imgThumbnails: '/Picture.png',
      titleThumbnail: 'Name of the Content',
      descpThumbnail:
        'Empresas e profissionais precisam proteger seus dados contra ameaças digitais. Neste curso você aprenderá sobre políticas de segurança, gerenciamento de riscos, prevenção de ataques cibernéticos, resposta a incidentes e muito mais.'
    },
    {
      imgThumbnails: '/bg2.png',
      titleThumbnail: 'Blockchain e criptomoedas',
      descpThumbnail:
        'Empresas e profissionais precisam proteger seus dados contra ameaças digitais. Neste curso você aprenderá sobre políticas de segurança, gerenciamento de riscos, prevenção de ataques cibernéticos, resposta a incidentes e muito mais.'
    },
    {
      imgThumbnails: '/Picture.png',
      titleThumbnail: 'Name of the Content',
      descpThumbnail:
        'Empresas e profissionais precisam proteger seus dados contra ameaças digitais. Neste curso você aprenderá sobre políticas de segurança, gerenciamento de riscos, prevenção de ataques cibernéticos, resposta a incidentes e muito mais.'
    },
    {
      imgThumbnails: '/bg2.png',
      titleThumbnail: 'Blockchain e criptomoedas',
      descpThumbnail:
        'Empresas e profissionais precisam proteger seus dados contra ameaças digitais. Neste curso você aprenderá sobre políticas de segurança, gerenciamento de riscos, prevenção de ataques cibernéticos, resposta a incidentes e muito mais.'
    },
    {
      imgThumbnails: '/Picture.png',
      titleThumbnail: 'Name of the Content',
      descpThumbnail:
        'Empresas e profissionais precisam proteger seus dados contra ameaças digitais. Neste curso você aprenderá sobre políticas de segurança, gerenciamento de riscos, prevenção de ataques cibernéticos, resposta a incidentes e muito mais.'
    },
    {
      imgThumbnails: '/bg2.png',
      titleThumbnail: 'Blockchain e criptomoedas',
      descpThumbnail:
        'Empresas e profissionais precisam proteger seus dados contra ameaças digitais. Neste curso você aprenderá sobre políticas de segurança, gerenciamento de riscos, prevenção de ataques cibernéticos, resposta a incidentes e muito mais.'
    },
    {
      imgThumbnails: '/Picture.png',
      titleThumbnail: 'Name of the Content',
      descpThumbnail:
        'Empresas e profissionais precisam proteger seus dados contra ameaças digitais. Neste curso você aprenderá sobre políticas de segurança, gerenciamento de riscos, prevenção de ataques cibernéticos, resposta a incidentes e muito mais.'
    },
    {
      imgThumbnails: '/bg2.png',
      titleThumbnail: 'Blockchain e criptomoedas',
      descpThumbnail:
        'Empresas e profissionais precisam proteger seus dados contra ameaças digitais. Neste curso você aprenderá sobre políticas de segurança, gerenciamento de riscos, prevenção de ataques cibernéticos, resposta a incidentes e muito mais.'
    },
    {
      imgThumbnails: '/Picture.png',
      titleThumbnail: 'Name of the Content',
      descpThumbnail:
        'Empresas e profissionais precisam proteger seus dados contra ameaças digitais. Neste curso você aprenderá sobre políticas de segurança, gerenciamento de riscos, prevenção de ataques cibernéticos, resposta a incidentes e muito mais.'
    },
    {
      imgThumbnails: '/bg2.png',
      titleThumbnail: 'Blockchain e criptomoedas',
      descpThumbnail:
        'Empresas e profissionais precisam proteger seus dados contra ameaças digitais. Neste curso você aprenderá sobre políticas de segurança, gerenciamento de riscos, prevenção de ataques cibernéticos, resposta a incidentes e muito mais.'
    },
    {
      imgThumbnails: '/Picture.png',
      titleThumbnail: 'Name of the Content',
      descpThumbnail:
        'Empresas e profissionais precisam proteger seus dados contra ameaças digitais. Neste curso você aprenderá sobre políticas de segurança, gerenciamento de riscos, prevenção de ataques cibernéticos, resposta a incidentes e muito mais.'
    }
  ]
}
