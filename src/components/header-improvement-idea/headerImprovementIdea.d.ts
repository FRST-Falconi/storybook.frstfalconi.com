import React from "react"


export interface IOptionItem {
    description: string
    startIcon: any
    onClick: (e?:any) => void
    color?:  string
}

export interface IHeaderImprovementIdea {
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
    styles: React.CSSProperties
}
