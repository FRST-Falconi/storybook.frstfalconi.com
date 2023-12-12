import { User } from "@components/mentions"
import React from "react"

export interface IInputComment {
    placeholder?: string,
    value?: any,
    onChange?: (value:string) => void,
    remain?: number,
    limit?: number,
    disabled?: boolean,
    className: string,
    hasEmoji: boolean,
    showCharacterCounter: boolean,
    IDInput: string,
    styles: any,
    emojiWindowlanguage: string,
    divRef?: React.RefObject<HTMLDivElement>,
    onKeyUp?: (e:React.KeyboardEvent) => void,
    user?: User
    children?: React.ReactNode
}
