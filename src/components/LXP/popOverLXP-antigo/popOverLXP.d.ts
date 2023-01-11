import React from "react"

// type enumVariant = 'upLeft' | 'upRight' | 'lowRight' | 'lowLeft' | 'sideLeft' | 'sideRight' 

// export interface IOverLXP {
//     variant?: enumVariant;
//     children: React.ReactNode,
// }

type enumVariant = string

export interface IPopOverLXP {
  /**
   * @prop {enumVariant} variant: variant do popOver(upLeft, upRight, LowRight, LowLeft, sideLeft, sideRight)
   */

  variant?: enumVariant
  /**
   * @prop {React.ReactNode} children: valor de exibição dentro do componente popOver
   */
  children?: React.ReactNode

  element: any  

  style?: React.CSSProperties
}