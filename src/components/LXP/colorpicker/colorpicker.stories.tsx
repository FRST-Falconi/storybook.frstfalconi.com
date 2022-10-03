import React from "react";
import Colorpicker from './index'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'LXP/Colorpicker',
    component: Colorpicker,
    onChangeColor: { onClick: { action: 'clicked' } },
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Colorpicker {...args} />

export const normal = Template.bind({})
normal.args = {
    width: 256,
    height: 165,
    color: '#FFFFFF',
    onChangeColor: (e) => console.log(e)
}
