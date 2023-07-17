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
    audio: 'https://lxp-cdn.frstfalconi.cloud/f077ea93b532e29525910bbd9b8a5fd6.mp3',
    startAt: 90,
    coverImage: 'https://i.gyazo.com/002fc9811582004a947a954e5c83d784.png',
    title: 'T4:e02 - Human Made: Coragem, Criatividade e Resiliência',
    description: 'FIRST THINGS FRST - Gente que transforma o futuro',
    date: '10/05/2023',
    volume: 0.7,
    onProgress: (e) => console.log('onProgress: ', e),
    onEnded: (e) => console.log('onEnded: ', 'Fim'),
    style: {width: 814},
}

export const SemCapa = Template.bind({})
SemCapa.args = {
    audio: Royalty,
    startAt: 90,
    title: 'T4:e02 - Human Made: Coragem, Criatividade e Resiliência',
    description: 'FIRST THINGS FRST - Gente que transforma o futuro',
    date: '10/05/2023',
    volume: 0.7,
    onProgress: (e) => console.log('onProgress: ', e),
    onEnded: (e) => console.log('onEnded: ', 'Fim'),
    style: {width: 814},
}