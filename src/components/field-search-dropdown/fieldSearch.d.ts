import React from "react"


export type enumVariant = 'default' | 'LXP';

export type itemClick = {
    id: string, 
    label: string, 
    onClick: (e) => void
}

export interface IFieldSearch {
    variant?: enumVariant,
    loading?: boolean,
    setLoading?: (e) => void,
    textLoading?: string,
    placeholder?: string,
    value?: string, 
    onChange?: (e) => void,
    hasListResult?: boolean, 
    listResults?: Array<itemClick>,
    hasOptionSeeAll?: boolean,
    seeAll?: itemClick,
    style?:  React.CSSProperties,
    isMobileVersion?: boolean,
    setFieldSearchIsOpen?: (e) => void,
    fieldSearchIsOpen?: boolean,
    enableAnimationField?: boolean
}
