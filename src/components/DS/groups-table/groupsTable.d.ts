import React from 'react'

export interface IGroupsTable {
    textHeader: string
    textHeader2: string
    textHeader3: string
    textHeader4: string
    items:IGroupsTableItems[]
    textTooltipAdd: string;
    textTooltipCount: string;
}

export interface IGroupsTableItems {
    checked: boolean
    group: string
    adms: string[]
}