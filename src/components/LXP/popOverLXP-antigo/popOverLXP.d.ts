import React from "react"

type enumVariant = 'upLeft' | 'upRight' | 'lowRight' | 'lowLeft' | 'sideLeft' | 'sideRight' | any

export interface IPopOverLXP {
    variant?: enumVariant;
    children: React.ReactNode,
    element?: any
}