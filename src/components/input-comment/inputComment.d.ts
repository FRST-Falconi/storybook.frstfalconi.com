import React from "react"

export interface IInputComment {
    placeholder?: string,
    value?: any,
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void,
    remain?: number,
    limit?: number,
    className: string,
    hasEmoji: boolean,
    showCharacterCounter: boolean,
    IDIpnut: string,
}