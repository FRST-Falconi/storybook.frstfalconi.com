import React from 'react'

export interface IOnboardingProgressMenu {
  image: string
  challengeCount: number
  level: string
  currentIndex: number
  items: IOnboardingProgressMenuItem[]
}

export interface IOnboardingProgressMenuItem {
  titleUrl: string
  description: string
}
