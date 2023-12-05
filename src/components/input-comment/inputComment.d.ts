import React from "react"

export interface IInputComment {
    placeholder?: string,
    value?: any,
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void,
    remain?: number,
    limit?: number,
    disabled?: boolean,
    className: string,
    hasEmoji: boolean,
    showCharacterCounter: boolean,
    IDInput: string,
    styles: any,
    emojiWindowlanguage: string,
    onKeyDown?: (e:KeyboardEvent<HTMLTextAreaElement>) => void,
    children?: React.ReactNode
}
