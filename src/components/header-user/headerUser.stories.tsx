import React from 'react'

import HeaderUser from './index'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'FI/Header User',
    component: HeaderUser,
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <HeaderUser {...args} />

export const normal = Template.bind({})
normal.args = {
    avatar: {
        src: '',
        alt: ''
    },
    name: 'Camila Valadão',
    text: 'Empresa Há • 2 dias'
}
