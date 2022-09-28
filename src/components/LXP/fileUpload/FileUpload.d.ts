import React from "react"

type enumVariant = 'landscape' | 'portrait'

export interface IFileUpload {
    variant?: enumVariant,
    src?: any,
    alt?: string, 
    startIcon?: any,
    style?: React.CSSProperties, 
    handleChange?: () => void
}
