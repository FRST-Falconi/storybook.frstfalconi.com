import React from 'react'

import DropdownMultiselect from './index'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'DS/DropdownMultiselect',
  component: DropdownMultiselect,
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <DropdownMultiselect {...args} />

export const normal = Template.bind({})
normal.args = {
    maxSelectedShow: 5,
    selectedDefault: [ { id: 1, name: 'Australia', description: 'FRST Falconi', avatar: 'https://i.pinimg.com/474x/2b/27/2f/2b272f528c3e14054436edd0d8bd2a26.jpg' },
    { id: 2, name: 'Brazil', description: 'FRST Falconi', avatar: 'https://i.pinimg.com/474x/2b/27/2f/2b272f528c3e14054436edd0d8bd2a26.jpg' }],
    selectPlaceholder: 'Selecione aqui',
    searchSelectPlaceholder: 'Pesquisar',
    isDisabled: false,
    removeItemsToolTip: 'Excluir todos',
    style: {width: '400px'},
    modalTitle: 'Este grupo é administrado por',
    btnSelectAllText: 'Selecionar todos',
    removeModalText: 'Remover',
    people:'pessoas',
    person:'pessoa',
    getSelectedItems: (item) => console.log("Selecionado: ", item),
    listItems: [
        { id: 1, name: 'Australia', description: 'FRST Falconi', avatar: 'https://i.pinimg.com/474x/2b/27/2f/2b272f528c3e14054436edd0d8bd2a26.jpg' },
        { id: 2, name: 'Brazil', description: 'FRST Falconi', avatar: 'https://i.pinimg.com/474x/2b/27/2f/2b272f528c3e14054436edd0d8bd2a26.jpg' },
        { id: 3, name: 'China', description: 'FRST Falconi', avatar: 'https://i.pinimg.com/474x/2b/27/2f/2b272f528c3e14054436edd0d8bd2a26.jpg' },
        { id: 4, name: 'Egypt', description: 'FRST Falconi', avatar: 'https://i.pinimg.com/474x/2b/27/2f/2b272f528c3e14054436edd0d8bd2a26.jpg' },
        { id: 5, name: 'France', description: 'FRST Falconi', avatar: 'https://i.pinimg.com/474x/2b/27/2f/2b272f528c3e14054436edd0d8bd2a26.jpg' },
        { id: 6, name: 'Germany', description: 'FRST Falconi', avatar: 'https://i.pinimg.com/474x/2b/27/2f/2b272f528c3e14054436edd0d8bd2a26.jpg' },
        { id: 7, name: 'India', description: 'FRST Falconi', avatar: 'https://i.pinimg.com/474x/2b/27/2f/2b272f528c3e14054436edd0d8bd2a26.jpg' },
        { id: 8, name: 'Japan', description: 'FRST Falconi', avatar: 'https://i.pinimg.com/474x/2b/27/2f/2b272f528c3e14054436edd0d8bd2a26.jpg' },
        { id: 9, name: 'Spain', description: 'FRST Falconi', avatar: 'https://i.pinimg.com/474x/2b/27/2f/2b272f528c3e14054436edd0d8bd2a26.jpg' },
        { id: 10, name: 'United States', description: 'FRST Falconi', avatar: 'https://i.pinimg.com/474x/2b/27/2f/2b272f528c3e14054436edd0d8bd2a26.jpg' },
        { id: 11, name: 'Au', description: 'FRST Falconi', avatar: 'https://i.pinimg.com/474x/2b/27/2f/2b272f528c3e14054436edd0d8bd2a26.jpg' },
        { id: 12, name: 'Brazil', description: 'FRST Falconi', avatar: 'https://i.pinimg.com/474x/2b/27/2f/2b272f528c3e14054436edd0d8bd2a26.jpg' },
        { id: 13, name: 'China', description: 'FRST Falconi', avatar: 'https://i.pinimg.com/474x/2b/27/2f/2b272f528c3e14054436edd0d8bd2a26.jpg' },
        { id: 14, name: 'Egypt', description: 'FRST Falconi', avatar: 'https://i.pinimg.com/474x/2b/27/2f/2b272f528c3e14054436edd0d8bd2a26.jpg' },
        { id: 15, name: 'France', description: 'FRST Falconi', avatar: 'https://i.pinimg.com/474x/2b/27/2f/2b272f528c3e14054436edd0d8bd2a26.jpg' },
        { id: 16, name: 'Germany', description: 'FRST Falcon', avatar: 'https://i.pinimg.com/474x/2b/27/2f/2b272f528c3e14054436edd0d8bd2a26.jpg' },
        { id: 17, name: 'India', description: 'FRST Falconi', avatar: 'https://i.pinimg.com/474x/2b/27/2f/2b272f528c3e14054436edd0d8bd2a26.jpg' },
        { id: 18, name: 'Japan', description: 'FRST Falconi', avatar: 'https://i.pinimg.com/474x/2b/27/2f/2b272f528c3e14054436edd0d8bd2a26.jpg' },
        { id: 19, name: 'Spain', description: 'FRST Falconi', avatar: 'https://i.pinimg.com/474x/2b/27/2f/2b272f528c3e14054436edd0d8bd2a26.jpg' },
        { id: 20, name: 'United States', description: 'FRST Falconi', avatar: 'https://i.pinimg.com/474x/2b/27/2f/2b272f528c3e14054436edd0d8bd2a26.jpg' }
    ]
}
