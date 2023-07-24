import React from 'react'

export interface IGroupsTable {
    selected: string
    textHeader: string
    textHeader2: string
    textHeader3: string
    textHeader4: string
    items:IGroupsTableItems[]
    textTooltipAdd: string;
    textTooltipCount: string;
    onDeleteClick: (id:string, index:index) => void
}

export interface IGroupsTableItems {
    checked: boolean
    id: string
    group: string
    adms: string[]
}