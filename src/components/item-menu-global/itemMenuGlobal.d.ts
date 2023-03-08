import React from "react"


export type enumVariant = 'default' | 'LXP';
export type enumType = 'menu' | 'submenu';

export interface IItemMenuGlobal {
    variant?: enumVariant,
    type?: enumType,
    label?: string,
    onClick?: (e) => void,
    style?: React.CSSProperties,
    wrapText?: boolean,
    pressed?: boolean,
    icon?: any
}