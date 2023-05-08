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
  handleClick: (id: string | number) => void
  handleFavorite: (favorite: boolean) => void
  menuOptions: [
    {
      label: string
      icon?: React.ReactNode
      type?: string | null
      action: ({ id, option }: any) => any
    }
  ]
  style: React.CSSProperties
}
