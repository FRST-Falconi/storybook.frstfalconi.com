import React from "react"
//import * as Icons from '../../shared/icons'

type enumVariant = 'closedDefault' | 'opened' 

export interface IAccordionTrack {
    ObjectsCard?: any
    variant?: enumVariant
    TrailName?: string
    key?: number
    index?: number
    data?: any,
    handleChangeCheck?: (checkedValue) => void
    handleClickSelect?: () => void,
    handleClickContent?: () => void 
}

