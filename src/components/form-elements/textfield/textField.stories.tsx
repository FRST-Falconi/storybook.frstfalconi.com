import React from 'react'

import TextField from './index'
import * as Icons from '../../../shared/icons'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Form Elements/TextField',
    component: TextField,
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <TextField {...args} />

export const NormalWithHelpertext = Template.bind({})
NormalWithHelpertext.args = {
    label: 'Label',
    placeholder: 'Enter text here...',
    helperText: 'Helper text',
    required: false,
    type: 'text',
    value: null,
    error: false,
    disabled: false,
    id: 'MyTextField',
    name: '',
    className: '',
    multiline: false,
    onChange: () => { console.log('changed!') },
}

export const NormalWithoutHelpertext = Template.bind({})
NormalWithoutHelpertext.args = {
    label: 'Label',
    placeholder: 'Enter text here...',
    required: false,
    type: 'text',
    value: null,
    error: false,
    disabled: false,
    id: 'MyTextField',
    name: '',
    className: '',
    multiline: false,
    onChange: () => { console.log('changed!') },
}

export const WithIconAndHelpertext = Template.bind({})
WithIconAndHelpertext.args = {
    label: 'Label',
    placeholder: 'Enter text here...',
    helperText: 'Helper text',
    required: false,
    endIcon: <Icons.EditIcon />,
    type: 'text',
    value: null,
    error: false,
    disabled: false,
    id: 'MyTextField',
    name: '',
    className: '',
    multiline: false,
    onChange: () => { console.log('changed!') },
}

export const WithoutIconAndHelpertext = Template.bind({})
WithoutIconAndHelpertext.args = {
    label: 'Label',
    placeholder: 'Enter text here...',
    required: false,
    endIcon: <Icons.EditIcon />,
    type: 'text',
    value: null,
    error: false,
    disabled: false,
    id: 'MyTextField',
    name: '',
    className: '',
    multiline: false,
    onChange: () => { console.log('changed!') },
}