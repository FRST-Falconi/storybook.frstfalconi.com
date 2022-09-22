import React from "react"
//import * as Icons from '../../shared/icons'
import { content } from '../../shared/icons'

type enumVariant =  'default' | 'add' 

export interface IThumbnails {
    src?: string,
    disabled?: boolean,    
    handleClickCourse?: () => void,
    handleChange?: (checkedValue) => void,
    handleClickNew?: () => void,
    handleClickContent?: () => void,    
    variant?: enumVariant,
    title?: string   
    id: string,
    index: string,
    isDraggable?: boolean
}

