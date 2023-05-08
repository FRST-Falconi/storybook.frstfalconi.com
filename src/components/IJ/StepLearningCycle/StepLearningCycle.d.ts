import React from 'react'

export type StepLearningCycle = {
  /**
   * @prop {string} title: Titulo do step
   */
  title: string
  /**
   * @prop {string} description: descrição do step
   */
  description?: string
  /**
   * @prop {string} status: Status do step
   */
  status: 'finished' | 'inProgress' | 'waiting'
}

export type StepsLearningCycle = {
  /**
   * @prop {boolean} completed: Todas as etapas foram concluidas
   */
  completed: boolean
  /**
   * @prop {StepLearningCycle[]} listSteps: Lista com os steps
   */
  listSteps: StepLearningCycle[]
  /**
   * @prop {string} direction: Orientação da lista (Vertical ou horizontal)
   */
  direction: 'row' | 'column'
  /**
   * @prop {string} size: Orientação da lista (Vertical ou horizontal)
   */
  size: 'small' | 'medium' | 'large'
}
