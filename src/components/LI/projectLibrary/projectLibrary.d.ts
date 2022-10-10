import React from "react"

export interface IProjectLibrary{ 
    title?: string
    language?: 'pt-BR' | 'pt-PT' | 'en-US' | 'es' 
    textTitle?: string
    textPlacerolder?: string 
    textButton?: string
    handleClickSearchButton?: () => void    
}

