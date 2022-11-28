import React from 'react'

import NotificationPopOver from './index'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'FI/Notification PopOver',
    component: NotificationPopOver,
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <NotificationPopOver {...args} />

export const normal = Template.bind({})
normal.args = {
    
}