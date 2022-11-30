import React from "react"
//import * as Icons from '../../shared/icons'
//mport { content } from '../../shared/icons'

type enumVariant =  'default' | 'add' 

export interface IThumbnails {
    src?: string,
    disabled: boolean,    
    handleClickCourse?: () => void,
    handleChange?: (checkedValue: boolean) => void,
    handleClickNew?: () => void,
    handleClickContent?: () => void,    
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
}

