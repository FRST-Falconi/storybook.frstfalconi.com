import React from "react"

export interface IUser {
    id: string
    name: string
    position: string
    organization: string
    avatar: string
}

export interface IInteractionsModal {
    textTitle?: string
    textSubtitle?: string 
    listUsers: Array<IUser>
    isOpen: boolean
    handleClickClose?: () => void
    style?: React.CSSProperties
    
    newListUsers?: Array<IUser>
    checkScrollEnd: () => void
    trackClick?: () => void
}

