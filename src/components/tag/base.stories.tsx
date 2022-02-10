import React from 'react'

import Tag from './index'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Base/Tag',
    component: Tag,
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Tag {...args} />

export const simple = Template.bind({})
simple.args = {
    loading: true,
    inverted: false,
    selected: false,
    color: "#fff",
    title: 'Tag',
}