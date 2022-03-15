import React from 'react'

import Button from './index'
import * as Icons from '../../shared/icons'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Buttons/With Icons',
    component: Button,
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Button {...args} />

export const contained = Template.bind({})
contained.args = {
    variant: 'contained',
    label: 'Button text',
    disabled: false,
    startIcon: <Icons.ChangeAccount />,
    handleClick: () => { alert('Click') },
}

export const outlined = Template.bind({})
outlined.args = {
    variant: 'outlined',
    label: 'Button text',
    disabled: false,
    startIcon: <Icons.ChangeAccount />,
    handleClick: () => { alert('Click') }
}

export const text = Template.bind({})
text.args = {
    variant: 'text',
    label: 'Button text',
    disabled: false,
    startIcon: <Icons.ChangeAccount />
}