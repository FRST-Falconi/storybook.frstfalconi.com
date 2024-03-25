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
  selectedDefault: [ 
    { id: 1, name: 'Australia', description: 'Tecnologia da Informação', avatar: 'https://i.pinimg.com/474x/2b/27/2f/2b272f528c3e14054436edd0d8bd2a26.jpg', subDescription: 'Analista' },
    { id: 2, name: 'Brazil', description: 'Tecnologia da Informação', avatar: 'https://i.pinimg.com/474x/2b/27/2f/2b272f528c3e14054436edd0d8bd2a26.jpg', subDescription: 'Analista' },
  ],
  selectPlaceholder: 'Selecione aqui',
  searchSelectPlaceholder: 'Pesquisar',
  isDisabled: false,
  removeItemsToolTip: 'Excluir todos',
  // style: {width: '400px'},
  modalTitle: 'Este grupo é administrado por',
  btnSelectAllText: 'Selecionar todos',
  removeModalText: 'Remover',
  people:'pessoas',
  person:'pessoa',
  getSelectedItems: (item) => console.log("Selecionado: ", item),
  onSearch: (searchTerm) => console.log("Pesquisa: ", searchTerm),
  listItems: [
    { id: 1, name: 'Australia', description: 'Tecnologia da Informação', avatar: 'https://i.pinimg.com/474x/2b/27/2f/2b272f528c3e14054436edd0d8bd2a26.jpg', subDescription: 'Analista' },
    { id: 2, name: 'Brazil', description: 'Tecnologia da Informação', avatar: 'https://i.pinimg.com/474x/2b/27/2f/2b272f528c3e14054436edd0d8bd2a26.jpg', subDescription: 'Analista' },
    { id: 3, name: 'China', description: 'Tecnologia da Informação', avatar: 'https://i.pinimg.com/474x/2b/27/2f/2b272f528c3e14054436edd0d8bd2a26.jpg', subDescription: 'Analista' },
    { id: 4, name: 'Egypt', description: 'Tecnologia da Informação', avatar: 'https://i.pinimg.com/474x/2b/27/2f/2b272f528c3e14054436edd0d8bd2a26.jpg', subDescription: 'Analista' },
    { id: 5, name: 'France', description: 'Tecnologia da Informação', avatar: 'https://i.pinimg.com/474x/2b/27/2f/2b272f528c3e14054436edd0d8bd2a26.jpg', subDescription: 'Analista' },
    { id: 6, name: 'Germany', description: 'Tecnologia da Informação', avatar: 'https://i.pinimg.com/474x/2b/27/2f/2b272f528c3e14054436edd0d8bd2a26.jpg', subDescription: 'Analista' },
    { id: 7, name: 'India', description: 'Tecnologia da Informação', avatar: 'https://i.pinimg.com/474x/2b/27/2f/2b272f528c3e14054436edd0d8bd2a26.jpg', subDescription: 'Analista' },
    { id: 8, name: 'Japan', description: 'Tecnologia da Informação', avatar: 'https://i.pinimg.com/474x/2b/27/2f/2b272f528c3e14054436edd0d8bd2a26.jpg', subDescription: 'Analista' },
    { id: 9, name: 'Spain', description: 'Tecnologia da Informação', avatar: 'https://i.pinimg.com/474x/2b/27/2f/2b272f528c3e14054436edd0d8bd2a26.jpg', subDescription: 'Analista' },
    { id: 10, name: 'United States', description: 'Tecnologia da Informação', avatar: 'https://i.pinimg.com/474x/2b/27/2f/2b272f528c3e14054436edd0d8bd2a26.jpg', subDescription: 'Analista' },
    { id: 11, name: 'Au', description: 'Tecnologia da Informação', avatar: 'https://i.pinimg.com/474x/2b/27/2f/2b272f528c3e14054436edd0d8bd2a26.jpg', subDescription: 'Analista' },
    { id: 12, name: 'Brazil', description: 'Tecnologia da Informação', avatar: 'https://i.pinimg.com/474x/2b/27/2f/2b272f528c3e14054436edd0d8bd2a26.jpg', subDescription: 'Analista' },
    { id: 13, name: 'China', description: 'Tecnologia da Informação', avatar: 'https://i.pinimg.com/474x/2b/27/2f/2b272f528c3e14054436edd0d8bd2a26.jpg', subDescription: 'Analista' },
    { id: 14, name: 'Egypt', description: 'Tecnologia da Informação', avatar: 'https://i.pinimg.com/474x/2b/27/2f/2b272f528c3e14054436edd0d8bd2a26.jpg', subDescription: 'Analista' },
    { id: 15, name: 'France', description: 'Tecnologia da Informação', avatar: 'https://i.pinimg.com/474x/2b/27/2f/2b272f528c3e14054436edd0d8bd2a26.jpg', subDescription: 'Analista' },
    { id: 16, name: 'Germany', description: 'Tecnologia da Informação', avatar: 'https://i.pinimg.com/474x/2b/27/2f/2b272f528c3e14054436edd0d8bd2a26.jpg', subDescription: 'Analista' },
    { id: 17, name: 'India', description: 'Tecnologia da Informação', avatar: 'https://i.pinimg.com/474x/2b/27/2f/2b272f528c3e14054436edd0d8bd2a26.jpg', subDescription: 'Analista' },
    { id: 18, name: 'Japan', description: 'Tecnologia da Informação', avatar: 'https://i.pinimg.com/474x/2b/27/2f/2b272f528c3e14054436edd0d8bd2a26.jpg', subDescription: 'Analista' },
    { id: 19, name: 'Spain', description: 'Tecnologia da Informação', avatar: 'https://i.pinimg.com/474x/2b/27/2f/2b272f528c3e14054436edd0d8bd2a26.jpg', subDescription: 'Analista' },
    { id: 20, name: 'United States', description: 'Tecnologia da Informação', avatar: 'https://i.pinimg.com/474x/2b/27/2f/2b272f528c3e14054436edd0d8bd2a26.jpg', subDescription: 'Analista' }
  ]
}

export const lazyLoad = Template.bind({})
lazyLoad.args = {
  activeLazyLoad: true,
  maxSelectedShow: 5,
  selectPlaceholder: 'Selecione aqui',
  searchSelectPlaceholder: 'Pesquisar',
  isDisabled: false,
  removeItemsToolTip: 'Excluir todos',
  // style: {width: '400px'},
  modalTitle: 'Este grupo é administrado por',
  btnSelectAllText: 'Selecionar todos',
  removeModalText: 'Remover',
  people:'pessoas',
  person:'pessoa',
  getSelectedItems: (item) => console.log("Selecionado: ", item),
  listItems : Array.from({ length: 10000}).map((_, i) => ({id: i, name: `Name ${i}`, description: `Description ${i}`, avatar: 'https://i.pinimg.com/474x/2b/27/2f/2b272f528c3e14054436edd0d8bd2a26.jpg' }))
}
