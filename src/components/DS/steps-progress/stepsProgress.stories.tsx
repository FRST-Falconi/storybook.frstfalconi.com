import React from 'react'

import StepsProgress from './index'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'DS/StepsProgress',
    component: StepsProgress,
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <StepsProgress {...args} />

export const normal = Template.bind({})
normal.args = {
    definedSteps: [
        { step: 1, active: true, name: 'NOME', action: () => alert(1)},
        { step: 2, active: true, name: 'NOME', action: () => alert(2)},
        { step: 3, active: true, name: 'NOME', action: () => alert(3)},
        { step: 4, active: false, name: 'NOME', action: () => alert(4)},
        { step: 5, active: false, name: 'NOME', action: () => alert(5)},
        { step: 6, active: false, name: 'NOME', action: () => alert(6)},
        { step: 7, active: false, name: 'NOME', action: () => alert(7)},
        // { step: 6, active: false, current: false, name: 'NOME', action: () => selectStep(6)},
        // { step: 7, active: false, current: false, name: 'NOME', action: () => selectStep(7)},
    ],
    stepSelected: 2,
    colorItemWhite:true
}
