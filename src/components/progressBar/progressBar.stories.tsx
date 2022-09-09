import React from 'react'

import ProgressBar from './index'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Base/ProgressBar',
    component: ProgressBar,
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <ProgressBar {...args} />

export const Normal = Template.bind({})
Normal.args = {
    value: 50,
    label: 'XP Investimentos'
}

