import React from 'react'

import ResourceInfoDrop from './index'
import { DocumentResourceInfoIcon, PlayResourceInfoIcon } from '../../../shared/icons';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'DS/ResourceInfoDrop',
  component: ResourceInfoDrop
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args: any) => <ResourceInfoDrop {...args} />

export const normal = Template.bind({})
normal.args = {
  label: "Confira o material de apoio",
  
  isOpen: false,
  onOpen: () => console.log(`open`),
  onClose: () => console.log(`close`),
  enablePulse: true,
  intervalPulse: 10000,
  options: [
    {
      id: "id-1",
      label: "Vídeo - Identificando hipóteses",
      onClick: (e?: any) => alert(e),
      startWithIcon: <PlayResourceInfoIcon/>,
    },
    {
      id: "id-2",
      label: "PDF - Criando hipóteses",
      onClick: (e?: any) => alert(e),
      startWithIcon: <DocumentResourceInfoIcon/>,
    }
  ]
}
