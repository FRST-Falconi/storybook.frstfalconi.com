import React from 'react'
import GroupsTable from './index'

export default {
    title: 'DS/GroupsTable',
    component: GroupsTable
}

const Template = (args) => <GroupsTable {...args}/>

export const normal =  Template.bind({})
normal.args = {
    textHeader: 'Grupo',
    textHeader2: 'Administrado por',
    textHeader3: 'Editar',
    textHeader4: 'Excluir',
    items:[{
        checked: true,
        group: 'Time de Produto'
    },
    {
        checked: false,
        group: 'Time de Dados e de Desenvolvimento'
    }
]
}