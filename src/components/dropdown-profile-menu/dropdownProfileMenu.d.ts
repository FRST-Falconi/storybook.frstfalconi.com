import React from "react"
import { typeUser } from "../global-menu/globalMenu";


export type enumVariant = 'default' | 'LXP';

export type typeSubItens = {
    id: string, 
    label: string, 
    onClick: (e) => void
}

export type typeMenuItens = {
    label: string, 
    iconBegin?: any,
    onClick?: (e) => void,
    subItens?: Array<typeSubItens>
}

export interface IDropdownProfileMenu {
    variant?: enumVariant,
    user?: typeUser,
    menuItems?: Array<typeMenuItens>
}

// variant: 'LXP',
// user: {
//     name: 'Student name',
//     avatar: 'https://media.istockphoto.com/photos/rocking-astronaut-3d-render-picture-id621597534?k=20&m=621597534&s=612x612&w=0&h=feOiFpDr7yah5o8dY1yrhkUh-grNKJNCevZn_fV-qz4=',
//     company: 'Company name',
//     handleClickProfile: () => alert('Click Profile')
// },
// menuItems: [
//     {
//         label:  'Perfil',
//         onClick: (e) => alert('Perfil')
//     },
//     {
//         label:  'Configurações',
//         onClick: (e) => alert('Configurações')
//     },
//     {
//         label:  'Alternar conta',
//         beginIcon: <Icons.ChangeAccount />,
//         subItens: [
//             { id: '1', name: 'submenu-1', onClick: (e) => alert('submenu-1')},
//             { id: '2', name: 'submenu-2', onClick: (e) => alert('submenu-2')},
//             { id: '3', name: 'submenu-3', onClick: (e) => alert('submenu-3')}
//         ]
//     },
//     {
//         label:  'Sair',
//         beginIcon: <Icons.ExitArrow />,
//         onClick: () => alert('Sair')
//     },
// ]