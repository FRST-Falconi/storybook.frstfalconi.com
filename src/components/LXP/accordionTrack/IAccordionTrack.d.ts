import React from "react"
//import * as Icons from '../../shared/icons'

type enumVariant = 'closedDefault' | 'opened' 

export interface IAccordionTrack {
    trailsData?: any
    variant?: enumVariant
    TrailName?: string
    key?: number
    index?: number
    data?: any,
    handleChange?: (trails: any) => void
    handleClickSelect?: () => void,
    handleClickContent?: () => void 
    onSetActiveTrail?: (active, id) => void 
    onSetShowTrail?: (active, id) => void 
    onNewTrail?: (id) => void,
    handleClickNew?: () => void,
}

export interface IAccordionTranslate extends IAccordionTrack {
    textMeusConteudos?: string
    textTotalDe?: string
    textRegistros?: string
    textMinhasTrihas?: string


}

