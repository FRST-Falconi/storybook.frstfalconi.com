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
        {version: 1, value: 30, targetDate: '12/10/24', editable: true, name:'Resultado'},
        {version: 2, value: 50, targetDate: '20/11/24', editable: false, name:'Resultado'},
        {version: 3, value: 100, targetDate: '19/12/24', editable: false, name:'Resultado' }
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
