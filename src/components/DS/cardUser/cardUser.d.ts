import React from 'react'

export interface ICardUser{
    labelButton?:string
    hasButton?: bollean
    style?: React.CSSProperties
    handleLinkProfile?: () => void
    userInfo:{
        id: string
        avatar:string
        name: string
        profession: string
        education: string
        activeSice?: string
        date?: string
    }
    handleInvite?: () => void
    handleRemove?: () => void
}