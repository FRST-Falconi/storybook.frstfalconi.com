import React from "react"

type enumVariant = 'content'

export interface IButtonContent {
    variant?: enumVariant;
    label?: string,
    disabled?: boolean,
    startIcon?: any,
    handleClick?: () => void,
}
