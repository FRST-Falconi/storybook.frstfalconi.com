import React from 'react'

import Checkmark from './index'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Learning Tech/Checkmark',
    component: Checkmark,
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Checkmark {...args} />

export const normal = Template.bind({})
normal.args = {
    type: "checked",
    subtitle: "Sim",
    active: true,
    handleClick: (e : any) => { alert(e) }, 
    className: null,
    disabled: false,
    styles: {marginLeft:'10px'}
}
