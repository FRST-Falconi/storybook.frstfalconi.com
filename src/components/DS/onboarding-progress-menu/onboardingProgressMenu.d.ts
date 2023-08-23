import React from 'react'

export interface IOnboardingProgressMenu {
  avatar: string
  countChallenge: number
  textChallenge: string
  level: string
  style?: React.CSSProperties
  items: IOnboardingProgressMenuItem[]
}

export interface IOnboardingProgressMenuItem {
  handleClick: () => void
  id: number
  title: string
  description: string
  finished: boolean
}

export interface IComponente{
  isComplete: boolean;
}

export interface ICheckCircle{
  isComplete: boolean;
  isChecked: boolean;
}