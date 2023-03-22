import React from 'react'

import Modal from './index'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'DS/Modal',
  component: Modal
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args: any) => <Modal {...args} />

export const normal = Template.bind({})
normal.args = {
  open: true,
  onClose: () => console.log('closed'),
  onOpen: () => console.log('opened'),
  children: <div>Modal Content</div>,
  animation: 'BlowUp',
  handleCloseOnIcon: () => {
    console.log('custom close with handleCloseOnIcon')
  },
  showCloseButton: true
}
