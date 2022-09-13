import React from 'react'

import BannerLxp from './index'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'LXP/BannerLxp',
    component: BannerLxp,
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <BannerLxp {...args} />

export const Normal = Template.bind({})
Normal.args = {
    title: 'Nome do seu KnowHub',
    // bgColor: '#5e5e5e',
    isDisabledText: true
}

