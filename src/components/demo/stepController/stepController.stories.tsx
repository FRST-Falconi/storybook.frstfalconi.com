import React from 'react'

import StepController from './index'

export default {
  title: 'Demo/StepController',
  component: StepController
}

const Template = (args: any) => <StepController {...args} />

export const normal = Template.bind({})
normal.args = {
  numberCurrentStep: 1,
  numberTotalSteps: 64,
  prevStep: console.log('prevStep'),
  nextStep: console.log('nextStep'),
  goToStart: console.log('goToStart'),
  goToContact: console.log('goToContact'),
  labelHome: 'Inicio',
  labelContact: 'Contato'
}
