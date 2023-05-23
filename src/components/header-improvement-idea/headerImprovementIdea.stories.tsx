import React from 'react'

import HeaderImprovementIdea from './index'

import {
    EditIcon,
    TrashIconNew,
    FowardArrow
} from './../../shared/icons'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'FI/Header Improvement Idea',
    component: HeaderImprovementIdea,
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <HeaderImprovementIdea {...args} />

export const normal = Template.bind({})
normal.args = {
    user: {
        avatar: {
            src: '',
            alt: '',
        },
        name: 'Camila Valadão',
        text: 'Empresa Há • 2 dias'
    },
    like: {
        onClick: () => alert('Like'),
        total: 12
    },
    menuMore: [
        {
            description: 'Editar',
            startIcon: <EditIcon fill='#222'/>,
            onClick: (e) => alert('click edit')
        },
        {
            description: 'Excluir',
            startIcon: <TrashIconNew fill='#C1341A'/>,
            onClick: (e) => alert('click delete'),
            color: '#C1341A'
        },
    ],
    styles: {width: '250px'}
}
