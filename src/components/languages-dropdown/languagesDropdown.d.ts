import React from "react"

export type enumVariant = 'default' | 'LXP';
export type enumLanguages = 'pt' | 'es' | 'en';

export interface ILanguagesDropdown {
    variant?: enumVariant,
    languages?: Array<enumLanguages>,
    selected: enumLanguages,
    onSelect: (e) => void,
    distanceBtnDrop?: string,
    style?: React.CSSProperties,
}