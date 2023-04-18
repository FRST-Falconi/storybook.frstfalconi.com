import React from 'react'
import AudioPlayer from './index'
import Royalty from './Royalty.mp3'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'base/AudioPlayer',
    component: AudioPlayer,
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <AudioPlayer {...args} />

export const normal = Template.bind({})
normal.args = {
    audio: Royalty,
    startAt: 90,
    coverImage: 'https://i.gyazo.com/002fc9811582004a947a954e5c83d784.png',
    title: 'T4:e02 - Human Made: Coragem, Criatividade e Resiliência',
    description: 'FIRST THINGS FRST - Gente que transforma o futuro',
    date: '10/05/2023',
    volume: 0.7,
    getCurrentTime: (e) => console.log(e),
    style: {width: 814},
}
