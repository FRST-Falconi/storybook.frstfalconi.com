import React from "react"
//import * as Icons from '../../shared/icons'

type enumVariant = 'closedDefault' | 'opened' 

export interface IAccordionTrack {
    ObjectsCard?: any,
    variant?: enumVariant,
    TrailName?: string,  
    handleChangeCheck?: (checkedValue) => void,
    handleClickSelect?: () => void,
    handleClickContent?: () => void 
}

