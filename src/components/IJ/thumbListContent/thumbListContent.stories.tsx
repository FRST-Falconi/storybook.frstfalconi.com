import React from 'react'

import ThumbListContent from './index'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'IJ/ThumbListContent',
  component: ThumbListContent
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <ThumbListContent {...args} />

export const loading = Template.bind({})
loading.args = {
  imageSrc: 'https://i.gyazo.com/9024cb0195e65b9f4fc269d29b0a38f4.png',
  typeThumbContent: 'video',
  title: 'Label',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididut ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
  textViewMoreButton: 'Ver mais',
  textViewLessButton: 'Ver menos',
  onClickThumb: () => alert('clicado'),
  isLoading: true,
  style: { width: 375 }
}
export const video = Template.bind({})
video.args = {
  imageSrc: 'img/thumbFoto.png',
  typeThumbContent: 'video',
  title: 'Label',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididut ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
  textViewMoreButton: 'Ver mais',
  textViewLessButton: 'Ver menos',
  onClickThumb: () => alert('clicado'),
  isLoading: false,
  style: { width: 375 },
  textProgressVisualized: 'Visualizado',
  textProgressInProgress: 'Em andamento',
  valueProgress: 82,
  tagValue: 'vizualized'
}

export const videoSemProgresso = Template.bind({})
videoSemProgresso.args = {
  imageSrc: 'img/thumbVideo.png',
  typeThumbContent: '',
  nameCanal:'Smart Content',
  imageSrcCanal:'img/SmartImg.png',
  description:'Como criar novos desafios dentro de uma equipe multidisciplinar',
  onClickThumb: () => alert('clicado'),
  onClickCanal: () => alert('clicado para canal'),
  isLoading: false,
  style: { 
    width: '308px',
    height: '119px',
    background:'#FBFBFB',
    borderRadius: '8px',
    color:'#000'
    
    
  },
  textProgressVisualized: 'Visualizado',
  textProgressInProgress: 'Em andamento',
  tagValue: 'notVisualized'
}

export const videoSemFoto = Template.bind({})
videoSemFoto.args = {
  imageSrc: '',
  typeThumbContent: 'video',
  title: 'Label',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididut ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
  textViewMoreButton: 'Ver mais',
  textViewLessButton: 'Ver menos',
  onClickThumb: () => alert('clicado'),
  isLoading: false,
  style: { width: 375 },
  textProgressVisualized: 'Visualizado',
  textProgressInProgress: 'Em andamento',
  tagValue: 'notVisualized'
}

export const podcast = Template.bind({})
podcast.args = {
  imageSrc: '',
  typeThumbContent: 'podcast',
  title: 'Label',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididut ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
  textViewMoreButton: 'Ver mais',
  textViewLessButton: 'Ver menos',
  onClickThumb: () => alert('clicado'),
  isLoading: false,
  style: { width: 375 },
}

export const podcastComProgresso = Template.bind({})
podcastComProgresso.args = {
  imageSrc: '',
  typeThumbContent: 'podcast',
  title: 'Label',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididut ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
  textViewMoreButton: 'Ver mais',
  textViewLessButton: 'Ver menos',
  onClickThumb: () => alert('clicado'),
  isLoading: false,
  style: { width: 375 },
  textProgressVisualized: 'Visualizado',
  textProgressInProgress: 'Em andamento',
  valueProgress: 84,
  tagValue: 'inProgress'
}

export const questionario = Template.bind({})
questionario.args = {
  imageSrc: '',
  typeThumbContent: 'question',
  title: 'Label',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididut ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
  textViewMoreButton: 'Ver mais',
  textViewLessButton: 'Ver menos',
  onClickThumb: () => alert('clicado'),
  isLoading: false,
  style: { width: 375 },
  textProgressVisualized: 'Visualizado',
  textProgressInProgress: 'Em andamento',
  tagValue: 'notVisualized'
}

export const questionarioVizualizado = Template.bind({})
questionarioVizualizado.args = {
  imageSrc: '',
  typeThumbContent: 'video',
  title: 'Label',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididut ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
  textViewMoreButton: 'Ver mais',
  textViewLessButton: 'Ver menos',
  onClickThumb: () => alert('clicado'),
  isLoading: false,
  style: { width: 375 },
  textProgressVisualized: 'Visualizado',
  textProgressInProgress: 'Em andamento',
  tagValue: 'vizualized',
  valueProgress: 84
}

export const selecionado = Template.bind({})
selecionado.args = {
  imageSrc: '',
  typeThumbContent: 'video',
  title: 'Label',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididut ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
  textViewMoreButton: 'Ver mais',
  textViewLessButton: 'Ver menos',
  onClickThumb: () => alert('clicado'),
  isLoading: false,
  style: { width: 375 },
  textProgressVisualized: 'Visualizado',
  textProgressInProgress: 'Em andamento',
  tagValue: 'vizualized',
  valueProgress: 84,
  isSelected: true
}

