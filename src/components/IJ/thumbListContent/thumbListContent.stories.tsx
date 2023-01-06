import React from 'react'

import ThumbListContent from './index'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'IJ/ThumbListContent',
    component: ThumbListContent,
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <ThumbListContent {...args} />

export const loading = Template.bind({})
loading.args = {
    imageSrc: 'https://i.gyazo.com/9024cb0195e65b9f4fc269d29b0a38f4.png',
    typeThumbContent: 'video',
    title: 'Label',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididut ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
    textViewMoreButton: 'Ver mais',
    textViewLessButton: 'Ver menos',
    onClickThumb: () => alert('clicado'),
    isLoading: true
}
export const video = Template.bind({})
video.args = {
    imageSrc: 'https://i.gyazo.com/9024cb0195e65b9f4fc269d29b0a38f4.png',
    typeThumbContent: 'video',
    title: 'Label',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididut ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
    textViewMoreButton: 'Ver mais',
    textViewLessButton: 'Ver menos',
    onClickThumb: () => alert('clicado'),
    isLoading: false
}

export const podcast = Template.bind({})
podcast.args = {
    imageSrc: 'https://i.gyazo.com/9024cb0195e65b9f4fc269d29b0a38f4.png',
    typeThumbContent: 'podcast',
    title: 'Label',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididut ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
    textViewMoreButton: 'Ver mais',
    textViewLessButton: 'Ver menos',
    onClickThumb: () => alert('clicado'),
    isLoading: false
}

export const questionario = Template.bind({})
questionario.args = {
    imageSrc: 'https://i.gyazo.com/9024cb0195e65b9f4fc269d29b0a38f4.png',
    typeThumbContent: 'question',
    title: 'Label',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididut ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
    textViewMoreButton: 'Ver mais',
    textViewLessButton: 'Ver menos',
    onClickThumb: () => alert('clicado'),
    isLoading: false
}