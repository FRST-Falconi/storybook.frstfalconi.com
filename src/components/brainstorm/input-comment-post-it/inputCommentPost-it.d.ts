import React from "react"

export interface IInputComment {
    placeholder?: string,
    value?: any,
    avatar?: {src: string, alt: string},
    onChange?: (value: any) => void,
    limit?: number,
    hasEmoji?: boolean,
    styles: React.CSSProperties
    disabled?: boolean

    onClickPublish: (e) => void,

    labels?: {
        cancel: string,
        publish: string,
        or: string,
        errorManyChars: string
    }
}