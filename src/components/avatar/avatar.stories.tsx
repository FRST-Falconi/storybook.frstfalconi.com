import React from 'react'

import Avatar from './index'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Base/Avatar',
    component: Avatar,
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Avatar {...args} />

export const normal = Template.bind({})
normal.args = {
    size: '120px',
    src: 'https://i.pinimg.com/474x/2b/27/2f/2b272f528c3e14054436edd0d8bd2a26.jpg',
    alt: 'Alt example',
    disabled: false,
    handleAvatar: (e) => console.log(e)
}
