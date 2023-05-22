import React from 'react'

import CounterLike from './index'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'FI/CounterLike',
    component: CounterLike,
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <CounterLike {...args} />

export const normal = Template.bind({})
normal.args = {
    active: true,
    total: 12,
    onClick: () => alert('click')
}
