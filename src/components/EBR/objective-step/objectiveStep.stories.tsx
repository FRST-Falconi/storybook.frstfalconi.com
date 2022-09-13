import React from 'react'

import ObjectiveStep from './index'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'EBR/ObjectiveStep',
    component: ObjectiveStep,
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <ObjectiveStep {...args} />

export const normal = Template.bind({})
normal.args = {
    number: 1,
    description: 'Desenvolver pessoas que resolvem problemas reais da empresa em ciclos ágeis de aprendizado, colaboração e experimentação.',
}

export const oneline = Template.bind({})
oneline.args = {
    number: 4,
    description: 'Implementar o mindset ágil de resolução de problemas nos colaboradores.',
}
