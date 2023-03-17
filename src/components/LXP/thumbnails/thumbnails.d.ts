import React from "react"
//import * as Icons from '../../shared/icons'
//mport { content } from '../../shared/icons'

type enumVariant =  'default' | 'add' 

export interface IThumbnails {
    src?: string,
    isDisabled: boolean,    
    isIndividual?: boolean, 
    isLoading?: boolean
    showSwitchIndividual?: boolean,  
    handleClickCourse?: () => void,
    handleSwitchAtivarIndividual?: (checkedValue: boolean) => void,
    handleClickNew?: () => void,
    handleClickContent?: () => void, 
    handleClickPopOverEdit?: () => void,
    handleClickPopOverMove?: () => void,
    handleClickPopOverDelete?: () => void,   
    variant?: enumVariant,
    title?: string   
    id?: string,
    index?: string,
    provided?: any    
}

export interface IThumbnailsTranslate extends IThumbnails {
    txtButtonLabel?: string
    txtAtivarCurso?: string
    txtCriarNovoCurso?: string
    txtCriarNovoCurso2?: string
    txtPopOverEditContent?: string
    txtPopOverMoveToTrails?: string
    txtPopOverDeleteContent?: string
}

