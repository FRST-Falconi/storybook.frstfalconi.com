import React from 'react'

export interface IGroupsTable {
    selected: string
    totalChecked: number
    textHeader: string
    textHeader2: string
    textHeader3: string
    textHeader4: string
    items:IGroupsTableItems[]
    textTooltipAdd: string
    textTooltipCount: string
    textTooltipAllSelected: string
    deleted: string;
    onDeleteAllSelected: (selecteds: string[]) => void
    onDeleteClick: (id:string, index:index) => void
    onEditClick: (id:string) => void
    onShowMoreClick: (id:string) => void
    AdmMoreClick: (id:string) => void
}

export interface IAdmItem {
    id: string
    image: string
    name: string
}

export interface IGroupsTableItems {
    id: string
    group: string
    adms: IAdmItem[]
}