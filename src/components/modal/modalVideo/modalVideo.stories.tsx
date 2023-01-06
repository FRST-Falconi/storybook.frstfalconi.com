import React from 'react'

import ModalVideo from './index'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Modal/ModalVideo',
  component: ModalVideo
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args

const Template = (args) => {
  return <ModalVideo {...args} />
}

export const ModalDefaultVideo = Template.bind({})
ModalDefaultVideo.args = {
  open: false,
  handleClose: () => {},
  title: 'Cultura da Inovação',
  style: { textAlign: 'center', padding: 20 },
  language: 'en-US',
  videoUrl: 'https://player.vimeo.com/video/786061124?h=e346220ada&amp;badge=0&amp'
}

export const ModalVideoRating = Template.bind({})

ModalVideoRating.args = {
  open: false,
  handleClose: () => {},
  title: 'Cultura da Inovação',
  style: { textAlign: 'center', padding: 20 },
  language: 'en-US',
  videoUrl: 'https://player.vimeo.com/video/786061124?h=e346220ada&amp;badge=0&amp',
  showRating: true,
  rating: 1,
  ratingDescription: 'Avalie abaixo o quanto isso foi útil para você.',
  recommendationId: '123',
  handleChangeRating: (recommendationId, rating) => alert(`RecomendationId:${recommendationId} and Rating:${rating}`)
}
