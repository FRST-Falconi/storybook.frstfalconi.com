import React from 'react'

import FieldSearch from './index'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'LXP/FieldSearch',
    component: FieldSearch,
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <FieldSearch {...args} />

export const normal = Template.bind({})
normal.args = {
    variant: 'LXP',
    loading: false,
    textLoading: 'Carregando...',
    placeholder: 'O que você busca?', 
    value: 'Default to show options',
    hasListResult: true, 
    listResults: [
        {id: '1', label: 'List Entry 1', onClick: (e) => alert(e)},
        {id: '2', label: 'List Entry 2', onClick: (e) => alert(e)},
        {id: '3', label: 'List Entry 3', onClick: (e) => alert(e)},
        {id: '4', label: 'List Entry 4', onClick: (e) => alert(e)}
    ],
    isMobileVersion: true,
    hasOptionSeeAll: true, 
    setFieldSearchIsOpen: (e) => console.log("setFieldSearchIsOpen", e), 
    fieldSearchIsOpen: false,
    seeAll: {id: '9', label: 'Ver todos os resultados', onClick: () => alert("Ver todos!")},
    style: { width: '332px' },
    onFilter: (term) => console.log('Valor Pesquido', term)
}
