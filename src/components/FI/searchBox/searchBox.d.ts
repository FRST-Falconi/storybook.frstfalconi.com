import React from "react"

export interface ISearchBox{ 
    textTitle?: string
    textPlaceholder?: string 
    textButton?: string
    handleClickSearchButton?: () => void 
    onChange?: () => void,
    style: React.CSSProperties
}

