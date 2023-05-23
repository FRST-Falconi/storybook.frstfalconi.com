import React from 'react'

import ShowMore from './index'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'FI/Show More',
    component: ShowMore,
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <ShowMore {...args} />

export const normal = Template.bind({})
normal.args = {
    labels: {
        showMore: 'Mostrar comentários',
        showLess: 'Mostrar menos',
    },
    isOpen: false,
    disabled: false,
    total: 2,
    onClick: () => alert('click')
}
