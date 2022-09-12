import React from "react"

type enumVariant = 'upLeft' | 'upRight' | 'lowRight' | 'lowLeft' | 'sideLeft' | 'sideRight'

export interface IPopOver {
    /**
   * @prop {enumVariant} variant: variant do popOver(upLeft, upRight, LowRight, LowLeft, sideLeft, sideRight)
   */

    variant?: enumVariant;
    /**
   * @prop {React.ReactNode} children: valor de exibição dentro do componente popOver
   */
    children?: React.ReactNode

    style?: React.CSSProperties
}
