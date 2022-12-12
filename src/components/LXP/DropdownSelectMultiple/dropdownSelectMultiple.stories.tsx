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
  placeholder: 'placeholder',
  valueSelect: 'primeiro',
  handleValueSelect: (e) => console.log(e),
  isIcon: false,
  isDisabled: false,
  iconSelect: <Trash />,
  listItems: [
    'primeiro',
    'segundo',
    'terceiro',
    'quarto',
    'primeiro',
    'segundo',
    'terceiro',
    'quarto',
    'primeiro',
    'segundo',
    'terceiro',
    'quarto'
  ]
}
