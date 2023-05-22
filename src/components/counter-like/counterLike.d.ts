import React from "react"

export interface IConterLike {
    isLiked?: boolean,
    total?: number,
    styles?: React.CSSProperties,
    onClick?: () => void
}
