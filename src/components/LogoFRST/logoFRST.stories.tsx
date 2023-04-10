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

export const LogoLightTranslate = Template.bind({})
LogoLightTranslate.args = {
    variant: 'light',
    title1Logo: 'People transform the game,',
    title2Logo: 'Results transform people.'
}

export const LogoDarkTranslate = Template.bind({})
LogoDarkTranslate.args = {
    variant: 'dark',
    title1Logo: 'People transform the game,',
    title2Logo: 'Results transform people.'
}


