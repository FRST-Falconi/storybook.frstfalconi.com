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
    variant: 'default',
    textNotification: 'Notificações',
    onClickProfileMenuText: () => alert('Clicked Profile'),
    profileMenuText: 'Ver Perfil',
    onClickLogo: () => alert('Redirect to home'),

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
    showSearchField: true,
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
    menu: [
        { id:'1', label: 'Início', iconBegin: <Icons.HomeIcon /> , onClick: (e) => alert('Início')},
        { id:'2', label: 'Assessment', iconBegin: <Icons.WriteIcon /> , onClick: (e) => alert('Assessment')},
        { id:'3', label: 'Eventos', iconBegin: <Icons.CalendarIcon />, onClick: (e) => alert('Eventos') },
        { id:'4', label: 'Hall de projetos', iconBegin:<Icons.Certificate fill='white' /> , onClick: (e) => alert('Hall de projetos') }
    ],
    notification: {
        textNotification: 'Notificações',
        textMarkAllAsRead: 'Marcar todas como lidas',
        textEmptyState: 'No momento você não tem notificações.',
        notificationList: [{
            notificationAvatar: 'https://media.istockphoto.com/photos/rocking-astronaut-3d-render-picture-id621597534?k=20&m=621597534&s=612x612&w=0&h=feOiFpDr7yah5o8dY1yrhkUh-grNKJNCevZn_fV-qz4=',
            notificationDescription : `Edson Corbari comentou no seu desafio “Aumentar o engajamento dos alunos na plataforma D2L”.`,
            isNewNotification : true,
            textNew: 'Nova',
            notificationDate: 'Hoje',
    
            handleClick: () => alert('Notificação clicada!')
        },
        {
            notificationAvatar: 'https://media.istockphoto.com/photos/rocking-astronaut-3d-render-picture-id621597534?k=20&m=621597534&s=612x612&w=0&h=feOiFpDr7yah5o8dY1yrhkUh-grNKJNCevZn_fV-qz4=',
            notificationDescription : `Edson Corbari comentou no seu desafio “Aumentar o engajamento dos alunos na plataforma D2L”.`,
            isNewNotification : true,
            textNew: 'Nova',
            notificationDate: 'Hoje',
    
            handleClick: () => alert('Notificação clicada!')
        },
        {
            notificationAvatar: 'https://media.istockphoto.com/photos/rocking-astronaut-3d-render-picture-id621597534?k=20&m=621597534&s=612x612&w=0&h=feOiFpDr7yah5o8dY1yrhkUh-grNKJNCevZn_fV-qz4=',
            notificationDescription : `Edson Corbari comentou no seu desafio “Aumentar o engajamento dos alunos na plataforma D2L”.`,
            isNewNotification : false,
            textNew: 'Nova',
            notificationDate: 'Hoje',
    
            handleClick: () => alert('Notificação clicada!')
        },
        {
            notificationAvatar: 'https://media.istockphoto.com/photos/rocking-astronaut-3d-render-picture-id621597534?k=20&m=621597534&s=612x612&w=0&h=feOiFpDr7yah5o8dY1yrhkUh-grNKJNCevZn_fV-qz4=',
            notificationDescription : `Edson Corbari comentou no seu desafio “Aumentar o engajamento dos alunos na plataforma D2L”.`,
            isNewNotification : false,
            textNew: 'Nova',
            notificationDate: 'Hoje',
    
            handleClick: () => alert('Notificação clicada!')
        },
        {
            notificationAvatar: 'https://media.istockphoto.com/photos/rocking-astronaut-3d-render-picture-id621597534?k=20&m=621597534&s=612x612&w=0&h=feOiFpDr7yah5o8dY1yrhkUh-grNKJNCevZn_fV-qz4=',
            notificationDescription : `Edson Corbari comentou no seu desafio “Aumentar o engajamento dos alunos na plataforma D2L”.`,
            isNewNotification : false,
            textNew: 'Nova',
            notificationDate: 'Hoje',
    
            handleClick: () => alert('Notificação clicada!')
        }],
        handleClickMarkRead: () => alert('Marcado como lido!')
    } ,
    
    languages: ['pt-BR', 'es', 'en-US', 'pt-PT'],
    languageSelected: 'pt-BR',
    onChangeLanguage: (e) => alert(e),
    onClickExit: () => alert("Click Exit"),

    onClickSite: () => alert('Click Site'),
    onClickLinkedin: () => alert('Click Linkedin'),
    onClickInstagram: () => alert('Click Instagram'),
    onClickYoutube: () => alert('Click Youtube'),
    onClickSpotify: () => alert('Click Spotify'),
    onClickPodCast: () => alert('Click Podcast'),

    style: { display: 'flex' }
}


export const normalWithSubMenu = Template.bind({})
normalWithSubMenu.args = {
    variant: 'default',
    textNotification: 'Notificações',
    onClickProfileMenuText: () => alert('Clicked Profile'),
    profileMenuText: 'Ver Perfil',
    onClickLogo: () => alert('Redirect to home'),
    
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
    showSearchField: true,
    search: {
        label: 'O que você busca?', 
        loading: false,
        onFilter: (term) => console.log('Valor Pesquido', term),
        hasOptionSeeAll: false, 
        seeAll: { label: 'Ver todos os resultados', onClick: () => alert('Ver todos') },
        listEntry: [
            {id: '1', label: 'List Entry 1', onClick: (e) => alert(e)},
            {id: '2', label: 'List Entry 2', onClick: (e) => alert(e)},
            {id: '3', label: 'List Entry 3', onClick: (e) => alert(e)},
            {id: '4', label: 'List Entry 4', onClick: (e) => alert(e)}
        ]
    },
    menu: [
        { id:'1', label: 'Início', iconBegin: <Icons.HomeIcon /> , onClick: (e) => alert('Início')},
        {   id:'2', 
            label: 'Assessment', 
            iconBegin: <Icons.WriteIcon /> , 
            onClick: null,
            subItens: [
                { id: '1', label: 'Ver resultado', onClick: (e) => alert('Ver resultado')},
                { id: '2', label: 'Reassessment', onClick: (e) => alert('Reassessment')}
            ]
        },
        { id:'3', label: 'Eventos', iconBegin: <Icons.CalendarIcon />, onClick: null,
            subItens: [
            { id: '1', label: 'Crongrama de Eventos', onClick: (e) => alert('Ver crongrama de eventos')},
            { id: '2', label: 'Entrar', onClick: (e) => alert('Entrar')}
        ] },
        { id:'4', label: 'Hall de projetos', iconBegin:<Icons.Certificate fill='white' /> , onClick: (e) => alert('Hall de projetos') }
    ],
    notification: true,
    haveNotification: true,
    languages: ['pt-BR', 'es', 'en-US', 'pt-PT'],
    languageSelected: 'pt-BR',
    onChangeLanguage: (e) => alert(e),
    onClickExit: () => alert("Click Exit"),
    onClickSite: () => alert('Click Site'),
    onClickLinkedin: () => alert('Click Linkedin'),
    onClickInstagram: () => alert('Click Instagram'),
    onClickYoutube: () => alert('Click Youtube'),
    onClickSpotify: () => alert('Click Spotify'),
    onClickPodCast: () => alert('Click Podcast'),

    style: { display: 'flex' }
}

export const LXP = Template.bind({})
LXP.args = {
    variant: 'LXP',
    showSearchField: true,
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
        listEntry: [
            { id: '1', label: 'List Entry',  onClick: (e) => alert('List Entry 1') },
            { id: '2', label: 'List Entry',  onClick: (e) => alert('List Entry 2') },
            { id: '3', label: 'List Entry',  onClick: (e) => alert('List Entry 3') },
            { id: '4', label: 'List Entry',  onClick: (e) => alert('List Entry 4') },
        ]
    },
    notification: true,
    languages: ['pt-BR', 'es', 'en-US', 'pt-PT'],
    languageSelected: 'pt-BR',
    onChangeLanguage: (e) => alert(e),
    onClickProfileMenuText: () => alert('Clicked Profile'),
    profileMenuText: 'Ver Perfil',
    onClickExit: () => alert("Click Exit"),
    onClickLogo: () => alert('Redirect to home'),
    style: { display: 'flex' }
}