import React from 'react'

export interface IAdmButton {
    variant: 'count' | 'add'| 'image'
    count?: number
    image?: string 
    onClick?: () => void   
}

export interface IAvatarContent {
    background: string;
}