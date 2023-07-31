import React from 'react'
export interface ICardPeople {
    userInfo: {
        id: string
        name: string
        avatar: string
        email: string
        area: string
        position: string
    }
    labels: {
        area: string
        position: string
    },
    hiddenCheckbox?: boolean
    isChecked?: boolean
    onChecked: (data: OnCheckedParams) => void
    style?: React.CSSProperties
}

export interface IPositionContainer {
    hiddenCheckbox: boolean
} 

export interface IPeopleContainer {
    isChecked?: boolean
}

export interface OnCheckedParams {
        isChecked?: boolean
        id: string,
        name: string,
        avatar: string,
        email: string,
        area: string,
        position: string,
}

