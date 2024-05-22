import React from 'react'

import Tags from './index'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Tags/Normal',
    component: Tags,
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Tags {...args} />

export const primary = Template.bind({})
primary.args = {
    listAllTags :[
        {
            id: 1,
            tag: "Teste 1"
        },
        {
            id: 2,
            tag: "Teste 2"
        },
        {
            id: 3,
            tag: "Teste 3"
        },
        {
            id: 4,
            tag: "Teste 4"
        },
        {
            id: 5,
            tag: "Teste 5"
        },
        {
            id: 6,
            tag: "Teste 6"
        },
    ],
    listSelectTag:[
        {
            id: 1,
            tag: "Teste 1"
        },
        {
            id: 2,
            tag: "Teste 2"
        },

        {
            id: 4,
            tag: "Teste 4"
        },

        {
            id: 6,
            tag: "Teste 6"
        },
    ],

    handleListTagsSelects: (e) => console.log("retornando a lista ",e),
    handleListTagsSelectsRemove:(e) => console.log("item removido foi ",e),
    handleListTagsSelectsAdd:(e) => console.log("item add foi ",e)

}
