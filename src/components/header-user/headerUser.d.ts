import React from "react"

export interface IHeaderUser{
    avatar?: {
        src?: string,
        alt?: string
    },
    name?: string,
    text?: string,
    onClick?: () => void,
    large?: boolean,
    showHandleButtons?: boolean,
    onClickEdit?: () => void,
    onClickDelete?: () => void
}
