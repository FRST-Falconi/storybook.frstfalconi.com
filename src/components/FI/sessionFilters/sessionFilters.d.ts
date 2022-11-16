import React from "react"

type enumVariant = 'myBusiness' | 'mission' |  'trail'

export type typeContentList = {
    title: string
    id: string
}

export type typeFilter = {
    variant: enumVariant
    label: string
    id: string
    handleClick?: () => void
}

export interface ISessionFilters {
    filterList : Array<typeFilter>
    selectedFilter : string
    selectedFilterContentList : Array<typeContentList>
    labelFilters?: string
    labelSelectItens ?: string
    textDeleteFilter ?: string
    textMultipleSelected ?: string
    textSingleSelected ?: string
    textSelectedItems ?: string
    textLabelSelect ?: string
    isVisibleSelect ?: boolean
    isVisiblePlaceholderSelect ?: boolean

    handleSelectedFilter : () => void
    handleDeleteFilter : () => void
    handleSelectedFilterData : any
    style?: React.CSSProperties
}
