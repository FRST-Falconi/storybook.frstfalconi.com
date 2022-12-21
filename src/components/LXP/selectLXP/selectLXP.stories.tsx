import React from 'react'

import SelectLXP from './index'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'LXP/SelectLXP',
    component: SelectLXP,
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <SelectLXP {...args} />

export const normal = Template.bind({})
normal.args = {
    placeholder: 'placeholder', 
    valueSelect: 'primeiro', 
    handleValueSelect: (e) => alert(e), 
    listItems: [{ id:1, label: 'primeiro' }, { id:2, label: 'segundo' }]
}