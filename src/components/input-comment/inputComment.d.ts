import React from "react"

export interface IInputComment {
    placeholder?: string,
    value?: any,
    onChange?: (value:string) => void,
    limit?: number,
    disabled?: boolean,
    className?: string,
    showCharacterCounter: boolean,
    styles?: any,
}
