import React from 'react'

import TotalizerCard from './index'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Learning Tech/Totalizer Card',
    component: TotalizerCard,
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <TotalizerCard {...args} />

export const normal = Template.bind({})
normal.args = {    
    titleCard: 'Alunos',
    textTotal: 'Total',
    numberTotal: 245,
    loading: false,
    className: 'opa',
    styles: { width: '180px'},
}
