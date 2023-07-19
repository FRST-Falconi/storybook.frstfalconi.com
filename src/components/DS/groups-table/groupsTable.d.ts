import React from 'react'

export interface IGroupsTable {
    textHeader: string
    textHeader2: string
    textHeader3: string
    textHeader4: string
    items:IGroupsTableItems[]
}

export interface IGroupsTableItems {
    checked: boolean
    group: string
}