import { disabled } from './../IJ/participantCard/participantCard.stories';

import React from 'react'

export interface IOptionItem {
    description: string
    startIcon?: any
    onClick: (e?: any) => void
    color?: string
    disabled?: boolean
}

export interface IMenuMore {
    iconButton?: any
    options: Array<IOptionItem>
    style?: React.CSSProperties;
    closeAfterClick?: boolean;
    isHover?: boolean;
    isArrowInMenu?: boolean;
    isPaddingInMenu?: boolean;
    isDarkMode?: boolean;
    isContainerOptions?: boolean;
}
