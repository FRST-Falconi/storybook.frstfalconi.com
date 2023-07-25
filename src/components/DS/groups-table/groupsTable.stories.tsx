import React from 'react'
import GroupsTable from './index'

export default {
    title: 'DS/GroupsTable',
    component: GroupsTable
}

const Template = (args) => <GroupsTable {...args} />

export const normal = Template.bind({})
normal.args = {
    selected: 'Selecionados:',
    deleted: 'Excluir',
    textHeader: 'Grupo',
    textHeader2: 'Administrado por',
    textHeader3: 'Editar',
    textHeader4: 'Excluir',
    onEditClick: (id) => alert('editar grupo'),
    onDeleteClick: (id, index) => alert('tem certeza que quer excluir? id: ' + id + ' index: ' + index),
    onDeleteAllSelected: (id) => alert('apagar grupos selecionados?'),
    onShowMoreClick: (id) => alert('ver mais administradores?'),
    items: [{
        id: 'e02d4dc0-2a5b-11ee-aadb-6dc2421ab697',
        group: 'Time de Produto',
        adms: [{
            id: 'a2cd4922-2f78-4c89-ac24-cf1b5830e4f5', image: 'https://xsgames.co/randomusers/avatar.php?g=male', name: 'Joaquim Ribeiro'
        }
        ]
    },
    {
        id: 'a02d4dc0-2a5b-11ee-aadb-6dc2421ab698',
        group: 'Time de Dados e de Desenvolvimento',
        adms: [{
            id: '5475d532-7871-4a3e-a5c4-d22f4a0bae99', image: 'https://xsgames.co/randomusers/avatar.php?g=male', name: 'João Ribeiro'
        },
        {
            id: 'c2cd4922-2f78-4c89-ac24-cf1b5830e4f6', image: 'https://xsgames.co/randomusers/avatar.php?g=female', name: 'Joana  Silva'
        }
        ]
    },
    {
        id: '81753630-2a65-11ee-aadb-6dc2421ab697',
        group: 'Gerentes',
        adms: [{
            id: '9cb14ff2-2ade-4867-a842-0b22cb64ff18', image: 'https://xsgames.co/randomusers/avatar.php?g=female', name: 'Joana  Silva'
        },
        {
            id: '7101e716-01a1-4abe-9ad6-128d7cd6fbb5', image: 'https://xsgames.co/randomusers/avatar.php?g=female', name: 'Joana  Silva'
        },
        {
            id: '6cd40042-4768-4780-ba68-5722bd4d0a98', image: 'https://xsgames.co/randomusers/avatar.php?g=female', name: 'Joana  Silva'
        },
        {
            id: '35105f65-8bde-415a-b95d-a80bcf387627', image: 'https://xsgames.co/randomusers/avatar.php?g=female', name: 'Joana  Silva'
        }
        ]
    },
    {
        id: 'b12094b0-2a65-11ee-aadb-6dc2421ab697',
        group: 'Time de Marketing',
        adms: [{
            id: '9cb14ff2-2ade-4867-a842-0b22cb64ff18', image: 'https://xsgames.co/randomusers/avatar.php?g=female', name: 'Joana  Silva'
        },
        {
            id: '9cb14ff2-2ade-4867-a842-0b22cb64ff18', image: 'https://xsgames.co/randomusers/avatar.php?g=female', name: 'Joana  Silva'
        },
        {
            id: '9cb14ff2-2ade-4867-a842-0b22cb64ff18', image: 'https://xsgames.co/randomusers/avatar.php?g=female', name: 'Joana  Silva'

        },
        {
            id: '9cb14ff2-2ade-4867-a842-0b22cb64ff18', image: 'https://xsgames.co/randomusers/avatar.php?g=female', name: 'Joana  Silva'

        }
        ]
    }
    ]
}