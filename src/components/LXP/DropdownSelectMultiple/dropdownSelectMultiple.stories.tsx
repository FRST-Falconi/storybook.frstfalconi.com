import React from 'react'

import DropdownSelectMultiple from './index'
import { Trash } from '../../../shared/icons'

export default {
  title: 'LXP/DropdownSelectMultiple',
  component: DropdownSelectMultiple
}

const Template = (args) => <DropdownSelectMultiple {...args} />

export const normal = Template.bind({})
normal.args = {
  placeholderSelect: 'Please choose',
  labelSelect: 'Selecione as Opções',
  placeholderFilter: 'Pesquisar',
  handleValueSelect: (e) => console.log(e),
  isDisabled: false,
  optionLabel: 'name',
  listItems: [
    { name: 'Australia' },
    { name: 'Brazil' },
    { name: 'China' },
    { name: 'Egypt' },
    { name: 'France' },
    { name: 'Germany' },
    { name: 'India' },
    { name: 'Japan' },
    { name: 'Spain' },
    { name: 'United States' },
    { name: 'Au' },
    { name: 'Brazil' },
    { name: 'China' },
    { name: 'Egypt' },
    { name: 'France' },
    { name: 'Germany' },
    { name: 'India' },
    { name: 'Japan' },
    { name: 'Spain' },
    { name: 'United States' }
  ]
}
