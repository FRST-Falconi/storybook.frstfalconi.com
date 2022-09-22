import React from 'react'

import CalendarLxp from './index'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'LXP/CalendarLxp',
    component: CalendarLxp,
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <CalendarLxp {...args} />

export const Normal = Template.bind({})
Normal.args = {
    open: true,
    onSave: (date) => alert(date),
    handleClose: () => alert('Saindo!'),
}