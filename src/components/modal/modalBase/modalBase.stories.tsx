import React from 'react'

import ModalBase from './index'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Modal/ModalBase',
  component: ModalBase
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args

const Template = (args) => {
  return <ModalBase {...args} />
}

export const ModalDefaultBase = Template.bind({})

ModalDefaultBase.args = {
  open: true,
  handleClose: () => alert('Fechando o modal'),
  title: 'Cultura da Inovação',
  language: 'en-US',
  children: <h1>Media</h1>
}

export const ModalBaseRating = Template.bind({})

ModalBaseRating.args = {
  open: true,
  handleClose: () => alert('Fechando o modal'),
  title: 'Cultura da Inovação',
  language: 'en-US',
  showRating: true,
  rating: 1,
  ratingDescription: 'Avalie abaixo o quanto isso foi útil para você.',
  recommendationId: '123',
  handleChangeRating: (recommendationId, rating) => alert(`RecomendationId:${recommendationId} and Rating:${rating}`),
  children: <h1>Media</h1>
}
