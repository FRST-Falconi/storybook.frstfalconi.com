import React from "react"

export interface IConterLike {
    active?: boolean,
    total?: number,
    size?: 'string',
    onClick?: () => void
}
