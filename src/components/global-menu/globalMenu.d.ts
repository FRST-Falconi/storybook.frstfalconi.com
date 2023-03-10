import React from "react"


export type enumVariant = 'default' | 'LXP';
export type enumLanguages = 'pt-BR' | 'es' | 'en-US' | 'pt-PT';

export type itemClick = {
    id: string,
    label: string, 
    iconBegin ?: any,
    onClick: (e) => void,
    active?: boolean,
    subMenu?: Array<itemClick>,
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

// export type typeSearch = {
//     value: string,
//     label: string, 
//     loading: boolean,
//     onFilter: (e) => void, 
//     seeAll: itemClick,
//     listEntry: Array<itemClick>
// }


export interface IGlobalMenu {
    variant?: enumVariant,

    menu?: Array<itemClick>,
    user?: typeUser,
    search?: IFieldSearch,
    
    notification?: any,
    
    languages: Array<enumLanguages>,
    languageSelected: enumLanguages,
    onChangeLanguage?: (e) => void,
    
    onClickLogo ?: () => void,
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
    showSearchField: boolean
}
