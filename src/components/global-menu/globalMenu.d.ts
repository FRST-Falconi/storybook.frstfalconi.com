import React from "react"


export type enumVariant = 'default' | 'LXP';
export type enumLanguages = 'pt' | 'es' | 'en';

export type itemClick = {
    id: string,
    label: string, 
    onClick: (e) => void
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
    handleNotification?: () => void,

    languages: Array<enumLanguages>,
    languageSelected: enumLanguages,
    onChangeLanguage?: (e) => void,

    style:  React.CSSProperties,
}
