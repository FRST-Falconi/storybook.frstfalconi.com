import React from 'react'

export interface ISearchField {
  label?: string
  hasSearchIcon?: boolean
  placeholder?: string
  value?: string
  onChange?: (e) => void
  textButton?: string
  handleClickButton: (e) => void
  className?: string
  handleKeyPress?: (e) => void
  isButton?: boolean
  id?:string
}
