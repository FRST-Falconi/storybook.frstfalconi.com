import React from 'react'

export interface LearningCycleCardI {
  id: number | string
  tag: string
  name: string
  favorite?: boolean

  labels?: {
    groupsQuantity: number | string
    groupsQuantityDescription: string
    groupsLabel: string
    actionButton: string
  }
  modulesList: [{ id: number | string; name: string }]
  disabled?: boolean
  handleClick: () => void
  handleFavorite?: () => void
  style: React.CSSProperties
}
