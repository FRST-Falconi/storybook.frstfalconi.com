import React from "react"

import { IAvatar } from "@components/avatar/avatar"
import { IItemLateralMenu, typeButton } from "@components/item-lateral-menu/itemLateralMenu"

type enumVariant = 'primary' | 'secondary'

export interface ILateralMenu {
    variant: enumVariant,
    avatar?: IAvatar,
    name: string,
    channel: string,
    button: typeButton,
    listOptions: Array<IItemLateralMenu>,
    hiddenButtonHeader?: boolean,
    style?: React.CSSProperties
}
