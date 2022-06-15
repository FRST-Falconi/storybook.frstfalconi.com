import React from 'react'
import RocketButton from '../RocketButton/index'

import Rating from '../RocketButton/index'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Card LT/RocketButton',
    component: RocketButton,
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Rating {...args} />

export const PrimaryButton = Template.bind({})
PrimaryButton.args = {
    tipoBotao: 1
}

export const SecondaryButton = Template.bind({})
SecondaryButton.args = {
    tipoBotao: 2
}

export const DisabledButton = Template.bind({})
DisabledButton.args = {
    tipoBotao: 3
}