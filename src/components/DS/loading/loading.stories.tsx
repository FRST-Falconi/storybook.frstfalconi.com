import React from 'react'

import Loading from './index'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'DS/Loading',
  component: Loading,
  argTypes: {
    sizeLoading: {
      control: 'select',
      options: ['extra-small', 'small', 'medium', 'large', 'extra-large']
    },
    positionLoadingText: {
      control: 'select',
      options: ['right', 'bottom', 'left', 'top']
    }
  }
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Loading {...args} />

export const normal = Template.bind({})
normal.args = {
  sizeLoading: 'medium',
  loadColor: '',
  loadText: 'Loading...',
  loadTextColor: '',
  positionLoadingText: 'right'
}
