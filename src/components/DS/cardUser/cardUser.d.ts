import React from 'react'

export interface ICardUser{
    style?: React.CSSProperties
    handleLinkProfile?: () => void
    userInfo:{
        id: string
        avatar:string
        name: string
        profession: string
        education: string
        activeSice: string
        date: string
    }
}