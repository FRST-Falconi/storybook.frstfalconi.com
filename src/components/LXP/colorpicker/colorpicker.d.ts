import React from "react"
export interface IColorpicker {
    width?: string,
    height?: string,
    color?: string
    onChangeColor?: (e) => void
}
