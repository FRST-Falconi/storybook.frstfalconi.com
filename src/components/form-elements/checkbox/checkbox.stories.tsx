import React from 'react'

import Checkbox from './index'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Form Elements/Checkbox',
    component: Checkbox,
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Checkbox {...args} />

export const Normal = Template.bind({})
Normal.args = {
    label: 'Checkbox label',
    isChecked: false,
    disabled: false,
    handleCheck: (e: boolean) => alert(e)
}