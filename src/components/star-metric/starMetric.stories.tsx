import React from 'react'

import StarMetric from './index'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Base/StarMetric',
    component: StarMetric,
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <StarMetric {...args} />

export const Normal = Template.bind({})
Normal.args = {    
    disabled: true,
    onChange: ()=> {alert('selecionado')}
}
