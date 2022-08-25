import React from 'react'

import StepCard from './index'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Learning Tech/StepCard',
    component: StepCard,
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <StepCard {...args} />

export const normal = Template.bind({})
normal.args = {
    title: "0. Não iniciou",
    onClick: (e : any) => { alert("StepCard")},
    numberPeople: 15,
    className: null,
    textButtonMore: 'Ver mais',
    active: false,
    src: ['https://i.pinimg.com/474x/2b/27/2f/2b272f528c3e14054436edd0d8bd2a26.jpg', 
        'https://i.pinimg.com/474x/2b/27/2f/2b272f528c3e14054436edd0d8bd2a26.jpg', 
        'https://i.pinimg.com/474x/2b/27/2f/2b272f528c3e14054436edd0d8bd2a26.jpg'],
    width: '343px'
}
