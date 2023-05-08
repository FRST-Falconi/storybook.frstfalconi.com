import React from 'react'

import StepLearningCycle from './index'

export default {
  title: 'IJ/StepLearningCycle',
  component: StepLearningCycle
}

const Template = (args) => <StepLearningCycle {...args} />

export const normal = Template.bind({})
normal.args = {
  listSteps: [
    { title: 'Criar ciclo de aprendizagem', description: '', status: 'finished' },
    {
      title: 'Grupo de participantes',
      description: 'Crie ou selecione um grupo de participantes para relacioná-lo a um ou mais conteúdos.',
      status: 'inProgress'
    },
    { title: 'Conteúdos', description: '', status: 'waiting' },
    { title: 'Calendário', description: '', status: 'waiting' }
  ]
}
