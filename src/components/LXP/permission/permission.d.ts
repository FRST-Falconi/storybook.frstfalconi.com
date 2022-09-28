import React from "react"

type enumVariant = 'Administrador' | 'Editor' | 'Instrutor' | 'Visualizador' | 'Mentor'



export interface IPermission {
    variant?: enumVariant,
    disabled?: boolean,    
    style?: React.CSSProperties,
    handleChangeAdmin?: (checkedValue) => void,
    handleChangeEditor?: (checkedValue) => void,
    handleChangeInstructor?: (checkedValue) => void,
    handleChangeViewer?: (checkedValue) => void,
    handleChangeMentor?: (checkedValue) => void
}
