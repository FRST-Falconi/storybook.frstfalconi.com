import React from 'react'
import GroupsTable from './index'

export default {
    title: 'DS/GroupsTable',
    component: GroupsTable
}

const Template = (args) => <GroupsTable {...args}/>

export const normal =  Template.bind({})
normal.args = {
    selected: 'Selecionados:',
    textHeader: 'Grupo',
    textHeader2: 'Administrado por',
    textHeader3: 'Editar',
    textHeader4: 'Excluir',
    onDeleteClick: (id, index) => alert('tem certeza que quer excluir? id: '+ id +' index: '+ index),
    items:[{
        id:'e02d4dc0-2a5b-11ee-aadb-6dc2421ab697',
        checked: true,
        group: 'Time de Produto',
        adms: ['aasd', '123']     
    },        
    {
        id:'a02d4dc0-2a5b-11ee-aadb-6dc2421ab698',
        checked: false,
        group: 'Time de Dados e de Desenvolvimento',
        adms: ['aasd', '123']
    }
]
}