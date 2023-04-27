import React from 'react'

import QuantidadeDesafios from './index'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Base/QuantidadeDesafios',
  component: QuantidadeDesafios
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <QuantidadeDesafios {...args} />

export const normal = Template.bind({})
normal.args = {}
