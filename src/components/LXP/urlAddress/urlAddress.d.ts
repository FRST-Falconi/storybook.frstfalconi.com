import React from "react"

type enumVariant = 'default' | 'customizedLink'

export interface IURLAddress {
    variant?: enumVariant;
    url?: string,   
    onClickEncurta?: () => void,
    onClickCopia?: () => void, 
}
