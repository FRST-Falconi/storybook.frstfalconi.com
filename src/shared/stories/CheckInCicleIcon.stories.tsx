import React from 'react'

import { CheckInCicle } from '../icons'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Icons',
  component: CheckInCicle,
}


const TemplateAlert = (args) => <CheckInCicle {...args} />

export const CheckInCicleIcon = TemplateAlert.bind({})
CheckInCicleIcon.args = {
  fill: '#fff',
  stroke: '#fff',
  customColor_1: '#222',
}