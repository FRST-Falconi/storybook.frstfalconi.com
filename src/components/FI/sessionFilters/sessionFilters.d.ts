import React from "react"

type enumVariant = 'buttonMyBusiness' | 'buttonMission' |  'buttonLamp'

export interface ISessionFilters {
    variant?: enumVariant;
    label?: string,
    disabled?: boolean,
    startIcon?: any,
    style?: React.CSSProperties,
    handleClick?: () => void,
}
