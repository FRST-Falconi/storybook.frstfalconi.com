import React from 'react'
import BannerChallenge from './index'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'The Product/BannerChallenge',
    component: BannerChallenge,
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <BannerChallenge {...args} />

export const normal = Template.bind({})
normal.args = {
    label: 'Gente que soluciona desafios transforma o jogo',
}

