
import React from 'react'

export interface IOptionItem {
    description: string
    startIcon: any
    onClick: (e?: any) => void
    color?: string
}

export interface IMenuMore {
    iconButton?: any
    options: Array<IOptionItem>
    style?: React.CSSProperties;
    closeAfterClick?: boolean;
    isHover?: boolean;
}
