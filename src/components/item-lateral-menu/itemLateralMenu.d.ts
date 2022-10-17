import { enumVariant } from "@components/LXP/popOver/popOver"
import React from "react"


type enumVariantButton = 'primary' | 'secondary' | 'link' | 'expandedPrimary' | 'expandedSecondary' 

type typeSubItem = {
    id?: string,
    label: string,
    beginComponent?: any,
    onClick?: (e) => void
}

type typeButton= {
    label: string,
    variant?: enumVariantButton,
    onClick?: (e) => void
}

export interface IItemLateralMenu {
    label: string,
    onClick?: (e) => void,
    beginComponent?: any,
    activeBeginIcon?: any,
    button?: typeButton,
    selected?: boolean,
    subItems?: Array<typeSubItem>,
    hiddenIconDropArrow?: boolean,
    style?: React.CSSProperties
}
