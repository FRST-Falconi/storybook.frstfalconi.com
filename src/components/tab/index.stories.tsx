import React from 'react'

import Button from '../buttons'
import ButtonGroup from './index'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Components/Tab',
    component: ButtonGroup,
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <ButtonGroup {...args} />

export const primary = Template.bind({})
primary.args = {
    variant: 'primary',
    active: '1',
    tabs: [{
        value:"1",
        label:"Label",
        disabled: false,
        handleClick:() => alert('Click') 
    },
    {
        value:"2",
        label:"Label",
        disabled: false,
        handleClick:() => alert('Click') 
    },
    {
        value:"3",
        label:"Label",
        disabled: false,
        handleClick:() => alert('Click') 
    }]
}

export const secondary = Template.bind({})
secondary.args = {
    variant: 'secondary',
    active: "1",
    tabs: [
        {
            value:"1",
            label:"Label",
            disabled: false,
            handleClick:(e) => alert('Click') 
        },
        {
            value:"2",
            label:"Label",
            disabled: false,
            handleClick:(e) => alert('Click') 
        },
        {
            value:"3",
            label:"Label",
            disabled: false,
            handleClick:(e) => alert('Click') 
        }
    ]
}