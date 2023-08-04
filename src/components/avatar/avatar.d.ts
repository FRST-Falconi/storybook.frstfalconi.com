import React from 'react'
export interface IAvatar {
  size?: string
  src?: any
  alt?: string
  className?: string
  disabled?: boolean
  onClick?: () => void
  isActiveClick?: boolean
}
