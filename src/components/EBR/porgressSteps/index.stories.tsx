import React from 'react'
import {
  ProgressStepsItem,
  ProgressSteps
} from './index'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'EBR/Nexts Steps - Progress Steps',
    component: ProgressSteps,
}

const ProgressStepsData = [
  {
    title: 'Elaboração dos desafios atuais',
    subtitle: 'Vamos juntos trazer mais resultados para sua empresa?',
    buttonText: 'Agendar reunião',
    active: true,
  },
  {
    title: 'Elaboração de plano e produtos',
  },
  {
    title: 'Apresentação da proposta',
  },
  {
    title: 'Contrato e início de operação',
  }
]

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <ProgressSteps {...args} />

export const Default = Template.bind({})
Default.args = {
  children: ProgressStepsData.map((item, index) => 
    <ProgressStepsItem
      key={index}
      title={item.title}
      subtitle={item.subtitle}
      active={item.active}
    />
  )
}