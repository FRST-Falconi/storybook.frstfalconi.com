import React from "react"

type enumVariant = 'banner'

export interface IBannerSRG {
    variant?: enumVariant;
    style?: React.CSSProperties,    
    handleClickNewProject?: () => void,
    handleClickAcessHere?: () => void,
}

export interface IBannerTranslate extends IBannerSRG {
    textTypographyText?: string
    buttonCreateNewProject?: string
    textTypographyPovOver?: string
    buttonLinkAccessHere?: string
    idioma?: 'pt-BR' | 'pt-PT' | 'en-US' | 'es'
}