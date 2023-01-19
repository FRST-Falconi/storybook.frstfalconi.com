import React from 'react'
//import * as Icons from '../../shared/icons'
import { content } from '../../shared/icons'

type enumVariant = 'individualCourse' | 'trilha'

export interface IContentThumbnails {
  label?: string
  src?: string
  disabled?: boolean
  icon?: any
  handleClick?: () => void
  onChange?: () => void
  handleReloadItens?: () => void
  contentList?: any
  variant?: enumVariant
  title?: string
}
