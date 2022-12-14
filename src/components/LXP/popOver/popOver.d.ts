import React from 'react'

type enumVariant = string

export interface IPopOver {
  /**
   * @prop {enumVariant} variant: variant do popOver(upLeft, upRight, LowRight, LowLeft, sideLeft, sideRight)
   */

  variant?: enumVariant
  /**
   * @prop {React.ReactNode} children: valor de exibição dentro do componente popOver
   */
  children?: React.ReactNode

  element: any

  onClosePopover: () => void

  style?: React.CSSProperties
}
