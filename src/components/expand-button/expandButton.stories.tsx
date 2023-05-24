import React from 'react'

import Button from './index'
import {
    TrashIconNew
} from './../../shared/icons'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Buttons/ExpandButton',
    component: Button,
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Button {...args} />

export const primary = Template.bind({})
primary.args = {
    label: 'Button text',
    disabled: false,
    onClick: () => { alert('Click') },
    startIcon: <TrashIconNew/>
}