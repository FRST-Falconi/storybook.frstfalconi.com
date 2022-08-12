import React from 'react'

import ExclusiveClassCard from './index'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Base/Exclusive Class Card',
    component: ExclusiveClassCard,
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <ExclusiveClassCard {...args} />

export const normal = Template.bind({})
normal.args = {
    titleClass: 'Turma exclusiva 1',
    labelButton: 'Editar trilhas',
    handleClick: () => alert('Click')
}
