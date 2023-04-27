import React from 'react'

import Favorite from './index'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'IJ/Favorite',
  component: Favorite
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Favorite {...args} />

export const normal = Template.bind({})
normal.args = {
  variant: 'default',
  disable: false,
  action: () => alert('clicou')
}
