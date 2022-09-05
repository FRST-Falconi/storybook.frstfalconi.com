import React from "react"

type enumVariant = 'upLeft' | 'upRight' | 'lowRight' | 'lowLeft' | 'sideLeft' | 'sideRight'

export interface IPopOver {
    variant?: enumVariant;
    children: React.ReactNode,
}
