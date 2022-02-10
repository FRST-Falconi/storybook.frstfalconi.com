import React from 'react'

import Empty from './index'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Cards/User',
    component: Empty,
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Empty {...args} />

export const Loading = Template.bind({})
Loading.args = {
    loading: true,
}
