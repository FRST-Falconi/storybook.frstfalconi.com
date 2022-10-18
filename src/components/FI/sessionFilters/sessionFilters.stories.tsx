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
    filterList: [
        {
            variant: 'myBusiness',
            label: 'Minha empresa',
            id: '1',
            handleClick: () => alert('Minha empresa!'),
            filterContentList: [
                {
                    title: 'Teste',
                    id: '1'
                },
                {
                    title: 'Teste 2',
                    id: '2'
                },
                {
                    title: 'Teste 3',
                    id: '3'
                }
            ]
        },
        {
            variant: 'mission',
            label: 'Missão',
            id: '2',
            handleClick: () => alert('Missão!'),
            filterContentList: [
                {
                    title: 'Teste 1',
                    id: '1'
                },
                {
                    title: 'Teste 100',
                    id: '2'
                },
                {
                    title: 'Teste 1000',
                    id: '3'
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
                    id: '1'
                },
                {
                    title: 'Teste 12',
                    id: '2'
                },
                {
                    title: 'Teste 13',
                    id: '3'
                }
            ]
        },
    ],
}
