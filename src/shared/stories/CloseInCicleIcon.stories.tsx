import React from 'react'

import { CloseInCicle } from '../icons'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Icons',
  component: CloseInCicle,
}


const TemplateAlert = (args) => <CloseInCicle {...args} />

export const CloseInCicleIcon = TemplateAlert.bind({})
CloseInCicleIcon.args = {
  fill: '#fff',
  stroke: '#0f0',
  customColor_1: '#222',
}