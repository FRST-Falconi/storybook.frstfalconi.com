import React, { useState } from 'react'

import FiltroGaleriaDesafio from './index'
import { TrashIconNew } from '../../shared/icons';

export default {
  title: 'GaleriaDesafios/FiltroGaleriaDesafio',
  component: FiltroGaleriaDesafio
}

const Template = (args) => {
  const [selectedItems, setSelectedItems] = useState([])
  return (
    <div style={{ display: 'flex', gap: '10px' }}>
      <FiltroGaleriaDesafio {...args} valueSelect={selectedItems} />
      <div
        style={{ color: '#0645ad', cursor: 'pointer', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
        onClick={() => {
          console.log('limpou os filtros')
          setSelectedItems([])
        }}
      >
        {' '}
        <TrashIconNew fill="#0645ad" />
        &nbsp; Excluir Filtros
      </div>
    </div>
  )
}
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
    { name: 'Australiaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa' },
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
