import React from 'react'

export interface IOnboardingProgressMenu {
  countChallenge: number
  textChallenge: string
  level: IOnboardingLevelMenuItem
  style?: React.CSSProperties
  items: IOnboardingProgressMenuItem[]
}

export interface IOnboardingLevelMenuItem{
  id: number
  name: string
  avatar: string
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