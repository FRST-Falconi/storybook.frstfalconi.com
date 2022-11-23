import React from "react"
export interface IcontentSwitcher {
    label?: string,
    handleClick: () => void,
    style?: React.CSSProperties,
    startIcon?: any,
    sizeIcon?: string,
    startIconSelected?: any,
}
