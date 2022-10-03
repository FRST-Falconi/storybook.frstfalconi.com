import React from "react"
export interface IAvatar {
    size?: string,
    channel?: string,
    alt?: string,
    className?: string,
    disabled?: boolean, 
    color?: string,
    contentPopOver?: any,
    onChange: () => void
}
