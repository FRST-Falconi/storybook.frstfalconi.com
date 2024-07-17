import React from 'react'
import MenuMore from './index'


import {
    MoreDotsHorizontal,
    EditIcon,
    TrashIconNew,
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
            startIcon: <TrashIconNew fill='#C1341A'/>,
            onClick: (e) => alert('click delete'),
            color: '#C1341A'
        },
    ],
    style: {marginLeft: '200px'},
    closeAfterClick:true,
    isDarkMode: false,
    isArrowInMenu : true,
}

export const twoItems = Template.bind({})
twoItems.args = {
    options: [
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
    style: {marginLeft: '200px'}
}

export const oneItem = Template.bind({})
oneItem.args = {
    iconButton: <MoreDotsHorizontal fill='#222'/>,
    options: [
        {
            description: 'Excluir',
            startIcon: <TrashIconNew fill='#C1341A'/>,
            onClick: (e) => alert('click delete'),
            color: '#C1341A'
        },
    ],
    style: {marginLeft: '200px'}
}