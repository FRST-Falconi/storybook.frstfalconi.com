import React from 'react'

import FieldSearch from './index'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'LXP/FieldSearch',
    component: FieldSearch,
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <FieldSearch {...args} />

export const labeledResult = Template.bind({})
labeledResult.args = {
    variant: 'LXP',
    loading: false,
    textLoading: 'Carregando...',
    placeholder: 'O que você busca?', 
    value: 'Default to show options',
    hasListResult: true, 
    isLabeledResult: true,
    listResults: null,
    labeledResultList: [
        {
            label: 'Conteúdos',
            listResult: [
                {id: '1', label: 'Conteúdo 1', onClick: (e) => alert(e)},
                {id: '2', label: 'Conteúdo 2', onClick: (e) => alert(e)},
                {id: '3', label: 'Conteúdo 3', onClick: (e) => alert(e)},
                {id: '4', label: 'Conteúdo 4', onClick: (e) => alert(e)}
            ]
        },
        {
            label: 'Desafios',
            listResult: [
                {id: '1', label: 'Desafio 1', onClick: (e) => alert(e)},
                {id: '2', label: 'Desafio 2', onClick: (e) => alert(e)},
                {id: '3', label: 'Desafio 3', onClick: (e) => alert(e)},
            ]
        },
        {
            label: 'Pessoas',
            listResult: [
                {id: '1', label: 'Pessoa 1', onClick: (e) => alert(e)},
                {id: '2', label: 'Pessoa 2', onClick: (e) => alert(e)},
                {id: '3', label: 'Pessoa 3', onClick: (e) => alert(e)},
            ]
        }
    ],
    historicResults: [
        {id: '1', label: 'pesquisa 1', onClick: (e) => alert(e)},
        {id: '2', label: 'pesquisa 2', onClick: (e) => alert(e)},
        {id: '3', label: 'pesquisa 3', onClick: (e) => alert(e)}
    ],
    isMobileVersion: true,
    hasOptionSeeAll: true, 
    setFieldSearchIsOpen: (e) => console.log("setFieldSearchIsOpen", e), 
    fieldSearchIsOpen: false,
    seeAll: {id: '9', label: 'Ver todos os resultados', onClick: () => alert("Ver todos!")},
    style: { width: '332px' },
    onFilter: (term) => console.log('Valor Pesquisado', term)
}

export const normal = Template.bind({})
normal.args = {
    variant: 'LXP',
    loading: false,
    textLoading: 'Carregando...',
    placeholder: 'O que você busca?', 
    value: 'Default to show options',
    hasListResult: true, 
    isLabeledResult: false,
    listResults: [
        {id: '1', label: 'List Entry 1', onClick: (e) => alert(e)},
        {id: '2', label: 'List Entry 2', onClick: (e) => alert(e)},
        {id: '3', label: 'List Entry 3', onClick: (e) => alert(e)},
        {id: '4', label: 'List Entry 4', onClick: (e) => alert(e)}
    ],
    historicResults: [
        {id: '1', label: 'pesquisa 1', onClick: (e) => alert(e)},
        {id: '2', label: 'pesquisa 2', onClick: (e) => alert(e)},
        {id: '3', label: 'pesquisa 3', onClick: (e) => alert(e)}
    ],
    isMobileVersion: false,
    hasOptionSeeAll: true, 
    setFieldSearchIsOpen: (e) => console.log("setFieldSearchIsOpen", e), 
    fieldSearchIsOpen: false,
    seeAll: {id: '9', label: 'Ver todos os resultados', onClick: () => alert("Ver todos!")},
    style: { width: '332px' },
    onFilter: (term) => console.log('Valor Pesquisado', term)
}
