import React from "react"


export interface IOptionItem {
    description: string
    startIcon: any
    onClick: (e?:any) => void
    color?:  string
}

export interface IInputEdit {
    placeholder?: string,
    value?: any,
    avatar?: {src: string, alt: string},
    onChange?: (value: any) => void,
    limit?: number,
    hasEmoji?: boolean,
    disabled?: boolean,

    onClickPublish?: (e) => void,
    onClickCancel?: () => void,

    labels?: {
        cancel: string,
        publish: string,
        save: string,
        or: string,
        errorManyChars: string
    },
    styles: React.CSSProperties
}

export interface ICommentPost {
    user: {
        avatar?: {
            src?: string,
            alt?: string,
        },
        name?: string,
        text?: string,
        onClick?: () => void
    },
    like: {
        onClick?: () => void,
        total?: number,
        styles?: React.CSSProperties
    },
    
    menuMore: Array<IOptionItem>,
    
    isActiveEdit?: boolean,
    styles: React.CSSProperties,
    
    valueComment?: string,
    onChangeValueComment?: (e) => void

    inputEdit?: IInputEdit
}