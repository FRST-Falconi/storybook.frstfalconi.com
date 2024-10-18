import React from 'react'
import { ResultFilterTabs } from './index'

export default {
    title: 'DS/ResultFilterTabs',
    component: ResultFilterTabs
}

const Template = (args) => <ResultFilterTabs {...args} />

export const normal = Template.bind({})
normal.args = {
    results: [
        {version: 1, value_indicator: 30, expectation_date: '12/10/24', editable: true, name:'Resultado'},
        {version: 2, value_indicator: 50, expectation_date: '20/11/24', editable: false, name:'Resultado'},
        {version: 5, value_indicator: 100, expectation_date: '19/12/24', editable: false, name:'Resultado' }
    ],
    onTabChange: (index) => {
        alert(`Tab de version ${index} clicada`)
    },
    onEdit: ({ value_indicator, expectation_date }) => {
        alert(`Novo valor: ${value_indicator} , Nova data: ${expectation_date}`)
    },
    onDelete: (id) => {
        alert(`Deletado resultado de id: ${id}`)
    }
}

export const showMore = Template.bind({})
showMore.args = {
    results: [
        {version: 1, value_indicator: 30, expectation_date: '12/10/24', editable: true, name:'Resultado'},
        {version: 2, value_indicator: 50, expectation_date: '20/11/24', editable: false, name:'Resultado'},
        {version: 3, value_indicator: 100, expectation_date: '19/12/24', editable: false, name:'Resultado' },
        {version: 4, value_indicator: 110, expectation_date: '19/12/24', editable: false, name:'Resultado' },
        {version: 5, value_indicator: 120, expectation_date: '19/12/24', editable: false, name:'Resultado' },
        {version: 6, value_indicator: 130, expectation_date: '30/12/24', editable: false, name:'Resultado' },
        {version: 7, value_indicator: 140, expectation_date: '19/12/24', editable: false, name:'Resultado' }
    ],
    onTabChange: (index) => {
        alert(`Tab de index ${index} clicada`)
    },
    onEdit: ({ value_indicator, expectation_date }) => {
        alert(`Novo valor: ${value_indicator} , Nova data: ${expectation_date}`)
    },
    onDelete: (id) => {
        alert(`Deletado resultado de id: ${id}`)
    },
    tabLimit: 3
}
