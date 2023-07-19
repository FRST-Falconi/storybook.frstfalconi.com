import React from 'react'

export interface IAdmButton {
    variant: 'count' | 'add'
    count: number
    textTooltip: string
}

export interface IAvatarContent {
    background: string;
}