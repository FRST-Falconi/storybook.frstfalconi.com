import React from 'react'

import ScrollContainer from './index'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Learning Tech/Scroll Container',
    component: ScrollContainer,
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <ScrollContainer {...args} />

export const normal = Template.bind({})
normal.args = {
    type: "horizontal",
    stepMove: 100,
    isVisibleControlsButtons: true,
    handleClick: (e : any) => { alert(e) }, 
    className: null,
    styles: {marginLeft:'0'},
    sizeArrowButton: 150,
    marginsArrowButton: 50,
}
