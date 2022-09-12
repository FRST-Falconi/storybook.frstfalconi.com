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
    numberTotal: 410,
    loading: false,
    className: 'opa',
    styles: { width: '180px'},
}

export const  withPartialNumberAndShade= Template.bind({})
withPartialNumberAndShade.args = {    
    titleCard: 'Licenças operadas',
    textTotal: 'Total',
    numberTotal: 410,
    numberPartial: 420,
    hasShadow: true,
    loading: false,
    className: 'opa',
    styles: { width: '180px'},
}
