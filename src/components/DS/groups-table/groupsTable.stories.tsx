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
    textTooltipCount: 'Ver Todos',
    textTooltipAdd: 'Adicionar',
    textTooltipAllSelected: 'Selecionar todos',
    onEditClick: (id) => alert('editar grupo'),
    onDeleteClick: (id, index) => alert('tem certeza que quer excluir? id: ' + id + ' index: ' + index),
    onDeleteAllSelected: (id) => alert('apagar grupos selecionados?'),
    onShowMoreClick: (id) => alert('ver mais administradores?'),
    AdmMoreClick: (id) => alert('ir para adiconar mais administradores?'),
    onSelected: (selectedsItems) => console.log('selectedsItems',selectedsItems),
    items: [{
        id: 'e02d4dc0-2a5b-11ee-aadb-6dc2421ab697',
        group: 'Time de Produto',
        adms: [{
            id: 'a2cd4922-2f78-4c89-ac24-cf1b5830e4f5', image: 'https://xsgames.co/randomusers/avatar.php?g=male', name: 'Joaquim Ribeiro Santos'
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
            id: 'ae33b466-6437-4618-b669-6a2db38b6986', image: 'https://xsgames.co/randomusers/avatar.php?g=female', name: 'Joana  Silva'
        },
        {
            id: '1247a15e-8ef0-4b22-83b1-204e24c4694a', image: 'https://xsgames.co/randomusers/avatar.php?g=male', name: 'Joaquim Ribeiro'
        },
        {
            id: 'e5df9c2-c6da-4fa7-9995-fde5b121236ef', image: 'https://xsgames.co/randomusers/avatar.php?g=female', name: 'Joana  Silva'

        },
        {
            id: '898df992-d2b6-44f7-8cb0-bb51202933dc', image: 'https://xsgames.co/randomusers/avatar.php?g=female', name: 'Joana  Silva'

        },
        {
            id: '393ef6fa-b994-4419-a448-46ccdba3e04e', image: 'https://xsgames.co/randomusers/avatar.php?g=female', name: 'Joana  Silva'

        },
        {
            id: '14e866fe-1ff1-4e46-a986-1b4e90ce3420', image: 'https://xsgames.co/randomusers/avatar.php?g=female', name: 'Joana  Silva'

        },
        {
            id: '656a4745-ed9b-4990-a45a-42349892ea5d', image: 'https://xsgames.co/randomusers/avatar.php?g=female', name: 'Joana  Silva'

        },
        {
            id: '166b5e4a-82b5-46ec-b52f-8c4325180322', image: 'https://xsgames.co/randomusers/avatar.php?g=female', name: 'Joana  Silva'

        },
        {
            id: '66a00307-deae-41e3-86cf-29251204d995', image: 'https://xsgames.co/randomusers/avatar.php?g=female', name: 'Joana  Silva'

        },
        {
            id: '46a00307-deae-41e3-86cf-29251204d996', image: 'https://xsgames.co/randomusers/avatar.php?g=female', name: 'Joana  Silva'

        },
        {
            id: '46a00307-deae-41e3-86cf-29251204d990', image: 'https://xsgames.co/randomusers/avatar.php?g=female', name: 'Joana  Silva'

        },
        {
            id: '46a00307-deae-41e3-86cf-29251204d998', image: 'https://xsgames.co/randomusers/avatar.php?g=female', name: 'Joana  Silva'

        },
        {
            id: '46a00307-deae-41e3-86cf-29251204d997', image: 'https://xsgames.co/randomusers/avatar.php?g=female', name: 'Joana  Silva'

        }


        ]
    }
    ]
}