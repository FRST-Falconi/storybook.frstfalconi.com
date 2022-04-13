import React from 'react'

import Tag from './index'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Base/Tag',
    component: Tag,
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Tag {...args} />

export const loading = Template.bind({})
loading.args = {
    loading: true,
    inverted: false,
    selected: false,
    color: "#000",
    title: 'Titulo Tag',
}

export const normal = Template.bind({})
normal.args = {
    loading: false,
    inverted: false,
    selected: false,
    color: "#000",
    title: 'Titulo Tag',
}

export const inverted = Template.bind({})
inverted.args = {
    loading: false,
    inverted: true,
    selected: false,
    color: "#000",
    title: 'Titulo Tag',
}

export const colored = Template.bind({})
colored.args = {
    loading: false,
    inverted: false,
    selected: false,
    color: "#FF0000",
    title: 'Titulo Tag',
}