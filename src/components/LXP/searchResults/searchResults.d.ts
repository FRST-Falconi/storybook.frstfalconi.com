import React from "react"

export interface ISearchResults {
   src?: string
   title?: string
   description?: string
   textSkills?: string
   skills?: string[]
   style?: React.CSSProperties
   onClick?:() => void
}