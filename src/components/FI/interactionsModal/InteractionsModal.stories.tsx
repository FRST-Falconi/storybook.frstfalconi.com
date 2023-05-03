import React from 'react'

import InteractionModal from './index'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'FI/InteractionModal',
    component: InteractionModal,
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <InteractionModal {...args} />

export const Default = Template.bind({})
Default.args = {
    textTitle: 'Este desafio foi visualizado por 12 pessoas.',
    textSubtitle: 'Veja quem são elas:',
    listUsers: [
        {
            id: '1',
            name: 'Carol Rodrigues',
            position: 'Tecnologia da Informação',
            organization: 'FRST Falconi',
            avatar: 'https://i.gyazo.com/3a59a7139631b386a8043095b207949c.png'
        },
        {
            id: '2',
            name: 'Luciana Souza',
            position: 'Tecnologia da Informação',
            organization: 'FRST Falconi',
            avatar: 'https://i.gyazo.com/3a59a7139631b386a8043095b207949c.png'
        },
        {
            id: '3',
            name: 'Ricardo Barbosa',
            position: 'Tecnologia da Informação',
            organization: 'FRST Falconi',
            avatar: 'https://i.gyazo.com/3a59a7139631b386a8043095b207949c.png'
        },
        {
            id: '4',
            name: 'Pamela Tavares',
            position: 'Tecnologia da Informação',
            organization: 'FRST Falconi',
            avatar: 'https://i.gyazo.com/3a59a7139631b386a8043095b207949c.png'
        },
        {
            id: '5',
            name: 'Marcos Pereira',
            position: 'Tecnologia da Informação',
            organization: 'FRST Falconi',
            avatar: 'https://i.gyazo.com/3a59a7139631b386a8043095b207949c.png'
        },
    ],
    isOpen: false,
    handleClickClose: () => alert('click')
}

export const DefaultInfiniteScroll = Template.bind({})
DefaultInfiniteScroll.args = {
    textTitle: 'Este desafio foi visualizado por 12 pessoas.',
    textSubtitle: 'Veja quem são elas:',
    listUsers: [
        {
            id: '1',
            name: 'Carol Rodrigues',
            position: 'Tecnologia da Informação',
            organization: 'FRST Falconi',
            avatar: 'https://i.gyazo.com/3a59a7139631b386a8043095b207949c.png'
        },
        {
            id: '2',
            name: 'Luciana Souza',
            position: 'Tecnologia da Informação',
            organization: 'FRST Falconi',
            avatar: 'https://i.gyazo.com/3a59a7139631b386a8043095b207949c.png'
        },
        {
            id: '3',
            name: 'Ricardo Barbosa',
            position: 'Tecnologia da Informação',
            organization: 'FRST Falconi',
            avatar: 'https://i.gyazo.com/3a59a7139631b386a8043095b207949c.png'
        },
        {
            id: '4',
            name: 'Pamela Tavares',
            position: 'Tecnologia da Informação',
            organization: 'FRST Falconi',
            avatar: 'https://i.gyazo.com/3a59a7139631b386a8043095b207949c.png'
        },
        {
            id: '5',
            name: 'Marcos Pereira',
            position: 'Tecnologia da Informação',
            organization: 'FRST Falconi',
            avatar: 'https://i.gyazo.com/3a59a7139631b386a8043095b207949c.png'
        },
    ],
    isOpen: false,
    handleClickClose: () => alert('click'),
    checkScrollEnd: () => alert('Final do scroll'),
    newListUsers: [
        {
            id: '5',
            name: 'Carol Rodrigues',
            position: 'Tecnologia da Informação',
            organization: 'FRST Falconi',
            avatar: 'https://i.gyazo.com/3a59a7139631b386a8043095b207949c.png'
        },
        {
            id: '6',
            name: 'Luciana Souza',
            position: 'Tecnologia da Informação',
            organization: 'FRST Falconi',
            avatar: 'https://i.gyazo.com/3a59a7139631b386a8043095b207949c.png'
        },
    ],
    trackClick: () => alert('Track click mix painel'),
}



