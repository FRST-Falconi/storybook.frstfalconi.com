import React from "react"

export type enumVariant = 'default' | 'LXP';
export type enumLanguages = 'pt-BR' | 'es' | 'en-US' | 'pt-PT';

export interface ILanguagesDropdown {
    variant?: enumVariant,
    languages?: Array<enumLanguages>,
    selected: enumLanguages,
    onSelect: (e) => void,
    distanceBtnDrop?: string,
    style?: React.CSSProperties,
}