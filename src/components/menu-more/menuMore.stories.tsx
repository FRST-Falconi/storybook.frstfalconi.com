import React from 'react'
import MenuMore from './index'


import {
    MoreDotsVertical,
    EditIcon,
    TrashIcon,
    CheckInCicle,
    Plus,
    FowardArrow
} from './../../shared/icons'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Components/Menu More',
    component: MenuMore,
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <MenuMore {...args} />

export const normal = Template.bind({})
normal.args = {
    iconButton: <MoreDotsVertical/>,
    options: [
        {
            description: 'Continuar',
            startIcon: <FowardArrow fill='#222'/>,
            onClick: (e) => alert('click continue')
        },
        {
            description: 'Editar',
            startIcon: <EditIcon fill='#222'/>,
            onClick: (e) => alert('click edit')
        },
        {
            description: 'Excluir',
            startIcon: <TrashIcon fill='#C1341A'/>,
            onClick: (e) => alert('click delete'),
            color: '#C1341A'
        },
    ],
    style: {marginLeft: '200px'}
}

export const twoItems = Template.bind({})
twoItems.args = {
    iconButton: <MoreDotsVertical/>,
    options: [
        {
            description: 'Editar',
            startIcon: <EditIcon fill='#222'/>,
            onClick: (e) => alert('click edit')
        },
        {
            description: 'Excluir',
            startIcon: <TrashIcon fill='#C1341A'/>,
            onClick: (e) => alert('click delete'),
            color: '#C1341A'
        },
    ],
}

export const oneItem = Template.bind({})
oneItem.args = {
    iconButton: <MoreDotsVertical/>,
    options: [
        {
            description: 'Excluir',
            startIcon: <TrashIcon fill='#C1341A'/>,
            onClick: (e) => alert('click delete'),
            color: '#C1341A'
        },
    ],
}