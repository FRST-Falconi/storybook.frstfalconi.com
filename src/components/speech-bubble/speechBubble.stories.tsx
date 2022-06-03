import React from 'react'

import SpeechBubble from './index'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Issues Feed/Speech Bubble',
    component: SpeechBubble,
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <SpeechBubble {...args} />

export const square = Template.bind({})
square.args = {
    height: '100px',
    width: 'auto',
    flap: 'left-top',
    highlight: false,
}
