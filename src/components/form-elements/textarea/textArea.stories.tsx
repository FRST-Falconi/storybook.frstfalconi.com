import React from 'react'

import TextArea from '../textarea/index'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Form Elements/TextArea',
    component: TextArea,
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <TextArea {...args} />

export const MultipleLines = Template.bind({})
MultipleLines.args = {
    label: 'Label',
    placeholder: 'Enter text here...',
    required: false,
    error: false,
    disabled: false,
    id: 'MyTextField',
    name: '',
    className: '',
    width: '100%',
    height: '100px',
    onChange: (e : any) => { console.log(e.target.value) },
}