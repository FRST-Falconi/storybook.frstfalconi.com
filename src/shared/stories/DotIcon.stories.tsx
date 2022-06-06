import React from 'react'

import { Dot } from '../icons'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Icons',
  component: Dot,
}


const TemplateDot = (args) => <Dot {...args} />

export const DotIcon = TemplateDot.bind({})
DotIcon.args = {
    fill: '#fff',
}