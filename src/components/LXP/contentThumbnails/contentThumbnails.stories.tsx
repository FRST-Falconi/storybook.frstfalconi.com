import React from 'react'
import { typeContent } from './index'

import ContentThumbnails from './index'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'LXP/ContentThumbnails',
  component: ContentThumbnails
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <ContentThumbnails {...args} />

export const IndividualCourse = Template.bind({})
IndividualCourse.args = {
  variant: 'individualCourse',
  label: 'Label',
  src: '',
  disabled: false,
  title: 'Nome do curso',
  contentList: [
    {
      title: 'Introdução ao curso',
      type: typeContent.Content
    },
    {
      title: 'Título do Conteúdo',
      type: typeContent.Content
    },
    {
      title: 'Título do Vídeo',
      type: typeContent.Video
    },
    {
      title: 'Título de Podcast',
      type: typeContent.PodCast
    },
    {
      title: 'Título do Quiz',
      type: typeContent.QuizSucessError
    },
    {
      title: 'Título do questionário',
      type: typeContent.Quiz
    },
    {
      title: 'Título do Certificado',
      type: typeContent.Certificate
    }
  ],
  handleClick: () => {
    alert('Click')
  },
  handleReloadItens: () => {
    alert('Click 2')
  }
}

export const Trilha = Template.bind({})
Trilha.args = {
  variant: 'trilha',
  label: 'Label',
  src: '',
  disabled: false,
  title: 'Nome do curso',
  contentList: [
    {
      title: 'Introdução ao curso',
      type: typeContent.Content
    },
    {
      title: 'Título do Conteúdo',
      type: typeContent.Content
    },
    {
      title: 'Título do Vídeo',
      type: typeContent.Video
    },
    {
      title: 'Título de Podcast',
      type: typeContent.PodCast
    },
    {
      title: 'Título do Quiz',
      type: typeContent.QuizSucessError
    },
    {
      title: 'Título do questionário',
      type: typeContent.Quiz
    },
    {
      title: 'Título do Certificado',
      type: typeContent.Certificate
    }
  ],
  handleClick: () => {
    alert('Click')
  }
}
