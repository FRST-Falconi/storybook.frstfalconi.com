import React from "react"

export interface IShowMore {
    labels?: {
        showMore: string,
        showLess: string,
    }
    isOpen?: boolean,
    disabled?: boolean,
    total?: number,
    onClick?: () => void
}
