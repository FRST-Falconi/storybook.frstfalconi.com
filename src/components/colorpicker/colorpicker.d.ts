import React from "react"
export interface IColorpicker {
    width?: number,
    height?: number,
    className?: string,
    disabled?: boolean,
    setColor?: () => void
    color?: string
}
