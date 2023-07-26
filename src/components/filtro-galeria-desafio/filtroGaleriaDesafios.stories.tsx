import React from 'react'

import FiltroGaleriaDesafio from './index'

export default {
  title: 'GaleriaDesafios/FiltroGaleriaDesafio',
  component: FiltroGaleriaDesafio
}

const Template = (args) => <FiltroGaleriaDesafio {...args} />

export const normal = Template.bind({})
normal.args = {
  placeholderSelect: 'Convites',
  handleValueSelect: (e) => console.log(e),
  isDisabled: false,
  optionLabel: 'name',
  maxListItems: 5,
  textButtonClear: 'Desmarcar todos',
  textBusca: 'Buscar...',
  listItems: [
    { name: 'Australiaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa' },
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
