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
        {id:'1', value: 30, targetDate: '12/10/24', editable: true },
        {id: '2', value: 50, targetDate: '20/11/24', editable: false },
        {id: '3', value: 100, targetDate: '19/12/24', editable: false }
    ],
    onTabChange: () => {
        alert('Tab clicada:')
    },
    onEdit: ({ value, targetDate }) => {
        alert(`Novo valor: ${value}, Nova data: ${targetDate}`)
    },
    onDelete: (id) => {
        alert(`Deletado resultado de id: ${id}`)
    }
}

// cada tab tem que passar um parametro de qual é o resultado para trazer os dados
//verificar se terá opcao de excluir
