import React from "react"

type enumVariant = 'landscape' | 'portrait'

export interface IFileUpload {
    variant?: enumVariant,
    src?: any,
    alt?: string,
    disabled?: boolean, 
    startIcon?: any,
    style?: React.CSSProperties,
    selectedFile?: ([]) => void, 
    handleClick?: () => void
}
