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
    language?: string,
    isMobileVersion: boolean,
    menuItems?: Array<typeMenuItens>,
    style?: React.CSSProperties
}