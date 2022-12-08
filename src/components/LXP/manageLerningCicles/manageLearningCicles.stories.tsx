import React from 'react'

import ManagerLearningCicles from './index'


// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'LXP/ManagerLearningCicles',
    component: ManagerLearningCicles,
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <ManagerLearningCicles {...args} />

export const Contents = Template.bind({})
Contents.args = {
    variant: 'cicleDefault',
    label: 'Definition name',
    disabled: false,    
    handleClick: () => { alert('Click') },
    handleChange: (e) => { console.log(e.target.value)}
}

