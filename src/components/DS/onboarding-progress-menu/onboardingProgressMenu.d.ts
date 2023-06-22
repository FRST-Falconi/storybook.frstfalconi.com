import React from 'react'

export interface IOnboardingProgressMenu {
  image: string
  countChallenge: number
  textChallenge: string
  level: string
  items: IOnboardingProgressMenuItem[]
}

export interface IOnboardingProgressMenuItem {
  titleUrl: string
  title: string
  description: string
  finished: boolean
  isCurrent: boolean
}

export interface IComponente{
  isComplete: boolean;
}

export interface ICheckCircle{
  isComplete: boolean;
  isChecked: boolean;
}