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
    textMultipleSelected: 'itens selecionados',
    textSingleSelected: 'item selecionado',
    selectedFilter: 'businessId',
    selectedFilterContentList: [
        {
            title: 'Missão 1: Marte - Definição do Problema',
            id: '1',
        },
        {
            title: 'Missão 2: Júpiter - Levantamento das Hipóteses',
            id: '2',
        },
        {
            title: 'Missão 3: Saturno - Testes Realizados',
            id: '3',
        },
        {
            title: 'Missão 4: Urano - Resultados e Aprendizados',
            id: '4',
        },
        {
            title: 'Missão 5: Netuno - Próximos Passos',
            id: '5',
        }
    ],
    filterList: [
        {
            variant: 'myBusiness',
            label: 'Minha empresa',
            id: 'businessId',
            handleClick: () => alert('Minha empresa!'),
            
        },
        {
            variant: 'mission',
            label: 'Missão',
            id: 'missionId',
            handleClick: () => alert('Missão!'),
        },
        {
            variant: 'trail',
            label: 'Trilha',
            id: 'trailId',
            handleClick: () => alert('Trilha!'),
        },
    ],
    textSelectedItems: "n itens selecionados",
    textLabelSelect: 'Selecione:',
    isVisibleSelect: true,
    isVisiblePlaceholderSelect: true,
    handleDeleteFilter: () => alert('delete'),
    handleSelectedFilterData: (e) => console.log(e),
    handleSelectedFilter: () => console.log('Filter Seleted')
}
