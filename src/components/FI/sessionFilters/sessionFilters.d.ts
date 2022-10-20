import React from "react"

type enumVariant = 'myBusiness' | 'mission' |  'trail'

export type typeContentList = {
    title: string
    id: string
    checked: boolean
    onChangeChecked: () => void
}

export type typeFilter = {
    variant: enumVariant
    label: string
    filterContentList: Array<typeContentList>
    handleClick?: () => void
}

export interface ISessionFilters {
    filterList : Array<typeFilter>
    labelFilters?: string
    labelSelectItens ?: string
    textDeleteFilter ?: string

    handleDeleteFilter : () => void
    handleSelectedFilterData : () => void
    style?: React.CSSProperties
}
