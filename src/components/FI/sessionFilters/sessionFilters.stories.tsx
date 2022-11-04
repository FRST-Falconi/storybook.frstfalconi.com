import React from 'react'

import SessionFilters from './index'
import * as Icons from '../../../shared/icons'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'FI/SessionFilters',
    component: SessionFilters,
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <SessionFilters {...args} />

export const Filters = Template.bind({})
Filters.args = {
    labelFilters: 'Filtros:',
    labelSelectItens: 'Escolha abaixo:',
    textDeleteFilter: 'Excluir filtro',
    style: {backgroundColor: '#ebebeb'} ,
    textSelected: 'itens selecionados',
    filterList: [
        {
            variant: 'myBusiness',
            label: 'Minha empresa',
            id: '1',
            handleClick: () => alert('Minha empresa!'),
            
        },
        {
            variant: 'mission',
            label: 'Missão',
            id: '2',
            handleClick: () => alert('Missão!'),
            filterContentList: [
                {
                    title: 'Missão 1: Marte - Definição do Problema',
                    id: '1',
                    checked: false,
                    onChangeChecked: () => alert('selecionado')
                },
                {
                    title: 'Missão 2: Júpiter - Levantamento das Hipóteses',
                    id: '2',
                    checked: false,
                    onChangeChecked: () => alert('selecionado')
                },
                {
                    title: 'Missão 3: Saturno - Testes Realizados',
                    id: '3',
                    checked: false,
                    onChangeChecked: () => alert('selecionado')
                },
                {
                    title: 'Missão 4: Urano - Resultados e Aprendizados',
                    id: '4',
                    checked: false,
                    onChangeChecked: () => alert('selecionado')
                },
                {
                    title: 'Missão 5: Netuno - Próximos Passos',
                    id: '5',
                    checked: false,
                    onChangeChecked: () => alert('selecionado')
                }
            ]
        },
        {
            variant: 'trail',
            label: 'Trilha',
            id: '3',
            handleClick: () => alert('Trilha!'),
            filterContentList: [
                {
                    title: 'Teste 11',
                    id: '1',
                    checked: false,
                    onChangeChecked: () => alert('selecionado')

                },
                {
                    title: 'Teste 12',
                    id: '2',
                    checked: false,
                    onChangeChecked: () => alert('selecionado')
                },
                {
                    title: 'Teste 13',
                    id: '3',
                    checked: false,
                    onChangeChecked: () => alert('selecionado')
                }
            ]
        },
    ],
    handleDeleteFilter: () => alert('delete'),
    handleSelectedFilterData: () => alert('Selecionado! ')
}
