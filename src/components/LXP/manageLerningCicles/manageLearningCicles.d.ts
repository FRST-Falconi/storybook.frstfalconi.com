import React from "react"

type enumVariant = 'cicleDefault'

export interface IManageLearningCicles {
    variant?: enumVariant;
    label?: string,
    disabled?: boolean,    
    style?: React.CSSProperties,
    handleClick?: () => void,
    handleChange?: (checkedValue: any) => void,
}
