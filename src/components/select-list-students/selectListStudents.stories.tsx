import React from 'react'

import SelectListStudents from './index'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Base/Select List Students',
    component: SelectListStudents,
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <SelectListStudents {...args} />

export const primaryNotStarted = Template.bind({})
primaryNotStarted.args = {
    onSelected: (e) => console.log("itens selecionados callback",e),
    listSelect:[
        {
            id:1,
            city:"São Paulo",
            select: false
        },
        {
            id:2,
            city:"Rio de Janeiro",
            select: false

        },
        {
            id:3,
            city:"Belo Horizonte",
            select: false

        },
        {
            id:4,
            city:"Porto Seguro",
            select: false

        },
        {
            id:5,
            city:"Goiânia",
            select: false

        }
    ]
}
