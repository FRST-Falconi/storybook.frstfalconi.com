import React from 'react'

export interface IAvatar {
  size?: string
  channel?: string
  alt?: string
  className?: string
  disabled?: boolean
  color?: string
  handleValueAvatar: (file) => void
  variantPopOver?: string
  sourceImage?: string
  isEdit?: boolean
  isLink?: boolean
}
