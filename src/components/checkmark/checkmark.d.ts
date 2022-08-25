import React from "react"

export interface ICheckmark {
    type?: string,
    subtitle?: string,
    active?: boolean,
    handleClick?: () => void, 
    className?: string,
    disabled?: boolean,
    styles?: any,
}
