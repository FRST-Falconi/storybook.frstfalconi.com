import React from "react"

type enumVariant = 'upLeft' | 'upRight' | 'lowRight' | 'lowLeft' | 'sideLeft' | 'sideRight' 

export interface IOverLXP {
    variant?: enumVariant;
    children: React.ReactNode,
    element?: any
}