import React from 'react'

import GlobalMenu from './index'
import * as Icons from '../../shared/icons'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Base/Global Menu',
    component: GlobalMenu,
    argTypes: {
        variant: {
            control: 'select',
            options: ['default', 'LXP']
        },
        languageSelected: {
            control: 'select',
            options: ['pt', 'es', 'en']
        }
    }
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <GlobalMenu {...args} />

export const normal = Template.bind({})
normal.args = {
    menu: [
        { id:'1', label: 'Hall FRST',               onClick: (e) => alert('Hall FRST') },
        { id:'2', label: 'Cadastrar alunos',        onClick: (e) => alert('Cadastrar alunos') },
        { id:'3', label: 'Dashboard de resultados', onClick: (e) => alert('Dashboard de resultados') },
        { id:'4', label: 'Definir trilhas',         onClick: (e) => alert('Definir trilhas') },
        { id:'5', label: 'Progresso do aluno',      onClick: (e) => alert('Progresso do aluno') },
    ],
    user: {
        name: 'Student name',
        avatar: 'https://media.istockphoto.com/photos/rocking-astronaut-3d-render-picture-id621597534?k=20&m=621597534&s=612x612&w=0&h=feOiFpDr7yah5o8dY1yrhkUh-grNKJNCevZn_fV-qz4=',
        company: 'Company name',
        handleClickProfile: () => alert('Click Profile'),
        menuItems: [
            {
                label:  'Perfil',
                onClick: (e) => alert('Perfil')
            },
            {
                label:  'Configurações',
                onClick: (e) => alert('Configurações')
            },
            {
                label:  'Alternar conta',
                iconBegin: <Icons.ChangeAccount />,
                subItens: [
                    { id: '1', label: 'Organizacao 01', onClick: (e) => alert('Organizacao 01')},
                    { id: '2', label: 'Organizacao 01', onClick: (e) => alert('Organizacao 02')},
                    { id: '3', label: 'Organizacao 01', onClick: (e) => alert('Organizacao 03')}
                ]
            },
            {
                label:  'Sair',
                iconBegin: <Icons.ExitArrow />,
                onClick: () => alert('Sair')
            },
        ],
    },
    search: {
        label: 'O que você busca?', 
        onChange: (e) => alert(e), 
        seeAll: { label: 'Ver todos os resultados',      onClick:  () => alert('Ver todos') },
        listEntry: [
            { id: '1', label: 'List Entry',  onClick: (e) => alert('List Entry 1') },
            { id: '2', label: 'List Entry',  onClick: (e) => alert('List Entry 2') },
            { id: '3', label: 'List Entry',  onClick: (e) => alert('List Entry 3') },
            { id: '4', label: 'List Entry',  onClick: (e) => alert('List Entry 4') },
        ]
    },
    languages: ['pt', 'es', 'en'],
    onChangeLanguage: (e) => alert(e),
    style: { display: 'flex' }
}

export const LXP = Template.bind({})
LXP.args = {
    variant: 'LXP',
    menu: [
        { id:'1', label: 'Início',          onClick: (e) => alert('Início')},
        { id:'2', label: 'Comunidade',      onClick: (e) => alert('Comunidade'),  active: true },
        { id:'3', label: 'Conteúdo',        onClick: (e) => alert('Conteúdo') },
        { id:'4', label: 'Criar conteúdo',  onClick: (e) => alert('Criar conteúdo') }
    ],
    subMenu: [
        { id:'1', label: 'Label',  onClick: (e) => alert('Label-1') },
        { id:'2', label: 'Label',  onClick: (e) => alert('Label-2') },
        { id:'3', label: 'Label',  onClick: (e) => alert('Label-3') },
        { id:'4', label: 'Label',  onClick: (e) => alert('Label-4') }
    ],
    user: {
        name: 'Student name',
        avatar: 'https://media.istockphoto.com/photos/rocking-astronaut-3d-render-picture-id621597534?k=20&m=621597534&s=612x612&w=0&h=feOiFpDr7yah5o8dY1yrhkUh-grNKJNCevZn_fV-qz4=',
        company: 'Company name',
        textIsMe: 'Eu',
        handleClickProfile: () => alert('Click Profile'),
        menuItems: [
            {
                label:  'Perfil',
                onClick: (e) => alert('Perfil')
            },
            {
                label:  'Configurações',
                onClick: (e) => alert('Configurações')
            },
            {
                label:  'Alternar conta',
                iconBegin: <Icons.ChangeAccount />,
                subItens: [
                    { id: '1', label: 'Organizacao 01', onClick: (e) => alert('Organizacao 01')},
                    { id: '2', label: 'Organizacao 01', onClick: (e) => alert('Organizacao 02')},
                    { id: '3', label: 'Organizacao 01', onClick: (e) => alert('Organizacao 03')}
                ]
            },
            {
                label:  'Sair',
                iconBegin: <Icons.ExitArrow />,
                onClick: () => alert('Sair')
            },
        ],
    },
    search: {
        value: '',
        label: 'O que você busca?', 
        onChange: (e) => console.log(e),
        loading: false,
        seeAll: { id: 'seeAll', label: 'Ver todos os resultados',      onClick:  () => alert('Ver todos') },
        listEntry: [
            { id: '1', label: 'List Entry',  onClick: (e) => alert('List Entry 1') },
            { id: '2', label: 'List Entry',  onClick: (e) => alert('List Entry 2') },
            { id: '3', label: 'List Entry',  onClick: (e) => alert('List Entry 3') },
            { id: '4', label: 'List Entry',  onClick: (e) => alert('List Entry 4') },
        ]
    },
    notification: true,
    languages: ['pt', 'es', 'en'],
    languageSelected: 'pt',
    onChangeLanguage: (e) => alert(e),
    style: { display: 'flex' }
}