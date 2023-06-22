import React from 'react'

export interface IOnboardingProgressMenu {
  image: string
  heading: string
  challenge: string
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