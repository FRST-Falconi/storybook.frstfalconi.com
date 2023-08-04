import React from 'react'

export interface IAdmButton {
    variant: 'count' | 'add'| 'image'| 'countMore'
    count?: number
    image?: string 
    onClick?: () => void   
}

export interface IAvatarContent {
    background: string;
}