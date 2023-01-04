import React from 'react'

import ListSelector from './index'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'IJ/ListSelector',
    component: ListSelector,
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <ListSelector {...args} />

export const normal = Template.bind({})
normal.args = {
    listTitle: 'Selecione o(s) desafio(s)',
    textViewMore: 'Ver mais...',
    textViewLess: 'Ver menos',
    minShowList: 5,
    style: {backgroundColor: '#F5F5F5'},
    selectedItens: (itens) => console.log(itens),
    contentList: [
        {
            id: '1',
            description: 'Aumentar o engajamento dos alunos na plataforma.'
        },
        {
            id: '2',
            description: 'A redução do tempo médio de resposta por e-mail.'
        },
        {
            id: '3',
            description: 'Melhor a performance do time de vendas no período de férias.'
        },
        {
            id: '4',
            description: 'Dar visibilidade dos Gaps encontrados no sistema de vendas Online'
        },
        {
            id: '5',
            description: 'Aumentar a venda de produtos adicionais em lojas físicas.'
        },
        {
            id: '6',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        },
        {
            id: '7',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
        {
            id: '8',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
        {
            id: '9',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
        {
            id: '10',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
    ]
}