import React from 'react'
import {ResultFilterTabs} from './index'

export default {
    title: 'DS/ResultFilterTabs',
    component: ResultFilterTabs
}

const Template = (args) => <ResultFilterTabs {...args} />


export const withEditing = Template.bind({})
withEditing.args = {
    results: [
        { value: 30, targetDate: '12/10/24' },
        { value: 50, targetDate: '20/11/24' },
        { value: 100, targetDate: '19/12/24' },
    ],
    onTabChange: () => {
        alert('Tab clicada:');
    },
}


export const noEditing = Template.bind({})
noEditing.args = {
    results: [
        { value: 30, targetDate: '12/10/24' },
        { value: 50, targetDate: '20/11/24' },
        { value: 100, targetDate: '19/12/24' },
    ],
    onTabChange: () => {
        alert('Tab clicada:');
    },
    showEditOption: false
}

//acho que a edicao tem que vir dentro do array, pq quando o resultado virar historico não terá opcao de editar
//verificar se terá opcao de excluir