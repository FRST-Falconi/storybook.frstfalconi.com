import React from 'react'

import LogoFRST from './index'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Hall/LogoFRST',
    component: LogoFRST,    
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <LogoFRST {...args} />

export const LogoLight = Template.bind({})
LogoLight.args = {
    variant: 'light',
}

export const LogoDark = Template.bind({})
LogoDark.args = {
    variant: 'dark',
}


