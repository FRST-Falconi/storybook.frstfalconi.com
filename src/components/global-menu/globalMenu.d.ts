import React from "react"


export type enumVariant = 'default' | 'LXP';
export type enumLanguages = 'pt-BR' | 'es' | 'en-US' | 'pt-PT';

export type itemClick = {
    id: string,
    label: string, 
    iconBegin ?: any,
    onClick: (e) => void,
    active?: boolean,
}

export type options = {
    id: string,
    startIcon: any,
    label: string, 
    endIcon: any,
    onClick: (e) => void
    options: Array<options>
}

export type typeUser = {
    avatar: string, 
    name: string, 
    textIsMe?: string,
    company: string, 
    handleClickProfile: () => void,
    menuItems?: any
}

export type typeSearch = {
    value: string,
    label: string, 
    loading: boolean,
    onChange: (e) => void, 
    seeAll: itemClick,
    listEntry: Array<itemClick>
}


export interface IGlobalMenu {
    variant?: enumVariant,

    menu?: Array<itemClick>,
    subMenu?: Array<itemClick>,
    user?: typeUser,
    search?: typeSearch,
    
    notification?: any,
    haveNotification ?: boolean,
    handleNotification?: () => void,
    
    languages: Array<enumLanguages>,
    languageSelected: enumLanguages,
    onChangeLanguage?: (e) => void,
    
    onClickHome ?: () => void,
    onClickExit ?: () => void,
    
    onClickSite ?: () => void,
    onClickLinkedin ?: () => void,
    onClickInstagram ?: () => void,
    onClickYoutube ?: () => void,
    onClickSpotify ?: () => void,
    onClickPodCast ?: () => void,
    onClickProfileMenuText ?: () => void
    
    profileMenuText?: string,
    textNotification ?: string,

    style:  React.CSSProperties,
}
