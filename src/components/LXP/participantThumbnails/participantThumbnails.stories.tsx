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
  imgThumbnails: '/bg1.png'
}
