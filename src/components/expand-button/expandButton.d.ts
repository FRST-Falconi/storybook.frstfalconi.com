import React from "react"

export interface IExpandButton {
    label: string
    disabled?: boolean
    onClick: (e) => void
    startIcon: any
    styles?: React.CSSProperties
}