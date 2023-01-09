import React from "react"
//import * as Icons from '../../shared/icons'

type enumVariant = 'closedDefault' | 'opened' 

export interface IAccordionTrack {
    trailsData?: any
    variant?: enumVariant
    TrailName?: string
    key?: number
    index?: number
    data?: any
    updateScrollSize?: number
    src?: string
    handleChange?: (trails: any) => void
    handleClickSelect?: () => void,
    handleClickContent?: () => void 
    onSetActiveTrail?: (active, id) => void 
    onSetNameTrail?: (name, id) => void
    onSetShowTrail?: (active, id) => void 
    onNewTrail?: (id) => void,
    handleClickNew?: () => void,
    handleEditCourse?: (id: string) => void
    handlePopOverMove?: (id: string) => void
    handlePopOverEdit?: (id: string) => void
    handlePopOverDelete?: (id: string) => void
    handlePopOverDuplicate?: (id: string) => void
    handlePopOverTrailEdit?: (id: string) => void
    handlePopOverTrailDelete?: (id: string) => void

}

export interface IAccordionTranslate extends IAccordionTrack {
    textMeusConteudos?: string
    textTotalDe?: string
    textRegistros?: string
    textMinhasTrihas?: string
    txtAtivarCurso?: string
    txtButtonLabel?: string
    txtCriarNovoCurso?: string
    txtCriarNovoCurso2?: string
    txtPopOverEditContent?: string
    txtPopOverMoveToTrails?: string
    txtPopOverDeleteContent?: string
    txtTrailsPopOverEdit?: string
    txtTrailsPopOverDuplicar?: string
    txtTrailsPopOverDelete?: string
    txtPlacerolderInputNameTrail?: string
}

