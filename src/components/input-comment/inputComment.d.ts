import React from "react"

export interface IInputComment {
    placeholder?: string,
    value?: any,
    disabled: boolean,
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void,
    remain?: number,
    limit?: number,
    className: string,
    hasEmoji: boolean,
    showCharacterCounter: boolean,
    IDInput: string,
    styles: any,
}