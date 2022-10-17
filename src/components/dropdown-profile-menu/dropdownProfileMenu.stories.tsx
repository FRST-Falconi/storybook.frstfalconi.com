import React from 'react'

import DropdownProfileMenu from './index'
import * as Icons from '../../shared/icons'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'LXP/DropdownProfileMenu',
    component: DropdownProfileMenu,
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <DropdownProfileMenu {...args} />

export const normal = Template.bind({})
normal.args = {
    variant: 'default',
    language: 'en',
    user: {
        name: 'Student name',
        textIsMe: 'Eu',
        avatar: 'https://media.istockphoto.com/photos/rocking-astronaut-3d-render-picture-id621597534?k=20&m=621597534&s=612x612&w=0&h=feOiFpDr7yah5o8dY1yrhkUh-grNKJNCevZn_fV-qz4=',
        company: 'Company name',
        handleClickProfile: () => alert('Click Profile')
    },
    menuItems: [
        {
            label:  'Perfil',
            onClick: (e) => alert('Perfil')
        },
        {
            label:  'Configurações',
            onClick: (e) => alert('Configurações')
        },
        {
            label:  'Alternar conta',
            beginIcon: <Icons.ChangeAccount />,
            subItens: [
                { id: '1', label: 'submenu-1', onClick: (e) => alert('submenu-1')},
                { id: '2', label: 'submenu-2', onClick: (e) => alert('submenu-2')},
                { id: '3', label: 'submenu-3', onClick: (e) => alert('submenu-3')}
            ]
        },
        {
            label:  'Sair',
            beginIcon: <Icons.ExitArrow />,
            onClick: () => alert('Sair')
        },
    ]
}

export const lxp = Template.bind({})
lxp.args = {
    variant: 'LXP',
    user: {
        name: 'Student name',
        textIsMe: 'Eu',
        avatar: 'https://media.istockphoto.com/photos/rocking-astronaut-3d-render-picture-id621597534?k=20&m=621597534&s=612x612&w=0&h=feOiFpDr7yah5o8dY1yrhkUh-grNKJNCevZn_fV-qz4=',
        company: 'Company name',
        handleClickProfile: () => alert('Click Profile')
    },
    menuItems: [
        {
            label:  'Perfil',
            onClick: (e) => alert('Perfil')
        },
        {
            label:  'Configurações',
            onClick: (e) => alert('Configurações')
        },
        {
            label:  'Alternar conta',
            iconBegin: <Icons.ChangeAccount />,
            subItens: [
                { id: '1', label: 'submenu-1', onClick: (e) => alert('submenu-1')},
                { id: '2', label: 'submenu-2', onClick: (e) => alert('submenu-2')},
                { id: '3', label: 'submenu-3', onClick: (e) => alert('submenu-3')}
            ]
        },
        {
            label:  'Sair',
            iconBegin: <Icons.ExitArrow />,
            onClick: () => alert('Sair')
        },
    ],
    isMobileVersion: false
}