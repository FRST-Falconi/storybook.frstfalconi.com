import React from 'react'

import AvatarChannel from './index'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'LXP/AvatarChannel',
  component: AvatarChannel
}

const Template = (args) => <AvatarChannel {...args} />

export const normal = Template.bind({})
normal.args = {
  size: '80px',
  channel: 'XP',
  alt: 'Alt example',
  disabled: false,
  color: '#6a3f86',
  handleValueAvatar: (file) => {
    console.log('avatar:', file)
  },
  variantPopOver: 'lowLeft'
}

export const sourceImage = Template.bind({})
sourceImage.args = {
  size: '80px',
  channel: 'XP',
  alt: 'Alt example',
  disabled: false,
  color: '#6a3f86',
  handleValueAvatar: (file) => {
    console.log('avatar:', file)
  },
  variantPopOver: 'lowLeft',
  sourceImage: 'https://lxp-cdn.dev.frstfalconi.cloud/logo-frst.png'
}
