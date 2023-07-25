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
    deleted: 'Excluir',
    textHeader: 'Grupo',
    textHeader2: 'Administrado por',
    textHeader3: 'Editar',
    textHeader4: 'Excluir',
    onEditClick: (id) => alert('editar grupo'),
    onDeleteClick: (id, index) => alert('tem certeza que quer excluir? id: '+ id +' index: '+ index),
    onDeleteAllSelected: (id) => alert('apagar grupos selecionados?'),
    items:[{
        id:'e02d4dc0-2a5b-11ee-aadb-6dc2421ab697',
        checked: true,
        group: 'Time de Produto',
        adms: ['aasd', '123']     
    },        
    {
        id:'a02d4dc0-2a5b-11ee-aadb-6dc2421ab698',
        group: 'Time de Dados e de Desenvolvimento',
        adms: ['aasd', '123']
    },
    {
        id:'81753630-2a65-11ee-aadb-6dc2421ab697',
        group: 'Gerentes',
        adms: ['aasd', '123']
    },
    {
        id:'b12094b0-2a65-11ee-aadb-6dc2421ab697',
        group: 'Time de Marketing',
        adms: ['aasd', '123']
    },
    {
        id:'a1a6527c-d716-42b6-8c3d-b2a2aa8a7d75',
        group: 'Analistas',
        adms: ['aasd', '123']
    },
]
}