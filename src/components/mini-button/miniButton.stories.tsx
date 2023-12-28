import React from 'react'

import Button from './index'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Buttons/Mini Button',
  component: Button
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Button {...args} />

export const primary = Template.bind({})
primary.args = {
  variant: 'primary',
  label: 'Button text',
  disabled: false,
  onClick: () => {
    alert('Click')
  }
}

export const secondary = Template.bind({})
secondary.args = {
  variant: 'secondary',
  label: 'Button text',
  disabled: false,
  onClick: () => {
    alert('Click')
  }
}

export const terciary = Template.bind({})
terciary.args = {
  variant: 'terciary',
  label: 'Button text',
  disabled: false,
  onClick: () => {
    alert('Click')
  }
}
