import React from 'react'

import ChannelsCard from './index'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'DS/NewCards/ChannelsCard',
  component: ChannelsCard,
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <ChannelsCard {...args} />

export const normal = Template.bind({})
normal.args = {
    channelImg: 'https://picsum.photos/200',
    channelTitle: 'FRST Falconi',
    handleClickCard: () => alert('Card clicado!')
}
