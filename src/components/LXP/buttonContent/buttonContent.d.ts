import React from "react"

type enumVariant = 'content'

export interface IButtonContent {
    variant?: enumVariant;
    label?: string,
    startIcon?: any,
    style?: React.CSSProperties,
    handleClick?: () => void,
}
