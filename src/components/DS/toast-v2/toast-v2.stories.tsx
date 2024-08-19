import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { ToastDemo } from './ToastDemo'

export default {
  title: 'Components/ToastV2',
  component: ToastDemo,
  argTypes: {
    type: {
      control: 'select',
      options: ['info', 'success', 'error', 'warning', 'default']
    },
    message: {
      control: 'text'
    },
    showBySeconds: {
      control: 'number'
    },
    styles: {
      control: 'object'
    }
  }
} as ComponentMeta<typeof ToastDemo>

const Template: ComponentStory<typeof ToastDemo> = (args) => <ToastDemo {...args} />

export const Default = Template.bind({})
Default.args = {
  type: 'default',
  message: 'This is a default toast!',
  showBySeconds: 5,
  styles: {}
}

export const Success = Template.bind({})
Success.args = {
  type: 'success',
  message: 'This is a success toast!',
  showBySeconds: 5,
  styles: {}
}

export const Info = Template.bind({})
Info.args = {
  type: 'info',
  message: 'This is an info toast!',
  showBySeconds: 5,
  styles: {}
}

export const Error = Template.bind({})
Error.args = {
  type: 'error',
  message: 'This is an error toast!',
  showBySeconds: 5,
  styles: {}
}

export const Warning = Template.bind({})
Warning.args = {
  type: 'warning',
  message: 'This is a warning toast!',
  showBySeconds: 5,
  styles: {}
}
