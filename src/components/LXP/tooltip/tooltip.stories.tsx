import React from 'react'

import Tooltip from './index'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'LXP/Tooltip',
    component: Tooltip,
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Tooltip {...args} />

export const normal = Template.bind({})
normal.args = {    
    position: 'top',
    children: <div>elemento</div>,
    textTooltip: "Teste"
}
