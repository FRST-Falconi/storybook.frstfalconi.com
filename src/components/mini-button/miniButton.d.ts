import React from "react"

type enumVariant = 'primary' | 'secondary' | 'terciary'

export interface IMiniButton {
    variant?: enumVariant
    label: string
    disabled?: boolean
    onClick: (e) => void
    styles?: React.CSSProperties
    active?: boolean
}