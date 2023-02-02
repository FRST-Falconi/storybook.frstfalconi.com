import React from 'react'
import HeaderChallenge from './index'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'The Product/HeaderChallenge',
    component: HeaderChallenge,
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <HeaderChallenge {...args} />

export const normal = Template.bind({})
normal.args = {
    firstLine: 'Gente que soluciona',
    secondLine: 'desafios transforma o jogo',
    desktopBackground: 'https://cdn-images.dev.frstfalconi.cloud/headerChallenge_bg.png',
    mobileBackground: 'https://cdn-images.dev.frstfalconi.cloud/headerChallengeMobile_bg.png',
}

