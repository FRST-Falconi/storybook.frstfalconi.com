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

export const IndividualCourseWithActivity = Template.bind({})
IndividualCourseWithActivity.args = {
  variant: 'individualCourse',
  label: 'Label',
  src: 'https://i.gyazo.com/7ccff0252cbd94f10bae665be4456854.png',
  disabled: false,
  title: 'Name of the Content',
  contentList: [
    {
      title: 'Introdução ao curso',
      type: typeContent.Content,
      id: 'abc'
    },
    {
      title: 'Título do Conteúdo',
      type: typeContent.Content,
      id: 'ade'
    },
    {
      title: 'Título do Vídeo',
      type: typeContent.Video,
      id: 'tsd'
    },
    {
      title: 'Título de Podcast',
      type: typeContent.PodCast,
      id: 'psf'
    },
    {
      title: 'Título do Quiz',
      type: typeContent.QuizSucessError,
      id: 'ling'
    },
    {
      title: 'Título do questionário teste de duas linhas',
      type: typeContent.Quiz,
      id: 'jkr'
    },
    {
      title: 'Título do Certificado',
      type: typeContent.Certificate,
      id: 'fsp'
    }
  ],
  handleClick: () => {
    alert('Click')
  },
  handleReloadItens: () => {
    alert('Click 2')
  },
  removeContentList: () => {
    alert('excluiu!')
  },
  onChangeOrder: (list) => console.log(list)
}
export const IndividualCourseWithNoActivity = Template.bind({})
IndividualCourseWithNoActivity.args = {
  variant: 'individualCourse',
  label: 'Label',
  src: '',
  disabled: false,
  title: 'Name of the Content',
  handleClick: () => {
    alert('Click')
  },
  handleReloadItens: () => {
    alert('Click 2')
  },
  removeContentList: () => {
    alert('excluiu!')
  },
  onChangeOrder: (list) => console.log(list)
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
    }
  ],
  handleClick: () => {
    alert('Click')
  }
}
