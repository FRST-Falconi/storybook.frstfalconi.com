import React from "react"

export interface IProgressBar {
    disabled?: boolean,
    value?: number,
    label?: string,
    style?: React.CSSProperties
    bgColor?: string
    trackColor?: string
    colorText?: string
}
