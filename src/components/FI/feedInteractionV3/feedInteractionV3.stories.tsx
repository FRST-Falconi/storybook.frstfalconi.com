import React from 'react'

import FeedInteractionV3 from './index'

export default {
  title: 'FI/Feed Interaction V3',
  component: FeedInteractionV3,
}

const Template = (args) => <FeedInteractionV3 {...args} />

export const Default = Template.bind({})
Default.args = {
  primaryColor: '#FF8A15',
  initialIsLiked: false,
  likeCount: 28,
  viewCount: 23,
  commentCount: 40,
  onLikeToggle: (liked) => console.log('liked', liked),
}

export const OtherPrimaryColor = Template.bind({})
OtherPrimaryColor.args = {
  ...Default.args,
  primaryColor: '#0645AD',
}
