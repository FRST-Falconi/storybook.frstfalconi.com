import React from 'react'

import NotificationPopOver from './index'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'FI/Notification PopOver',
    component: NotificationPopOver,
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <NotificationPopOver {...args} />

export const normal = Template.bind({})
normal.args = {
    textNotification: 'Notificações',
    textMarkAllAsRead: 'Marcar todas como lidas',
    textEmptyState: 'No momento você não tem notificações.',

    handleClickMarkRead: () => alert('Click!'),
    isOpen: true,
    isMobile: false,

    notificationList:[{
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
    },
    ]
}
export const emptyState = Template.bind({})
emptyState.args = {
    textNotification: 'Notificações',
    textMarkAllAsRead: 'Marcar todas como lidas',
    textEmptyState: 'No momento você não tem notificações.',

    handleClickMarkRead: () => alert('Click!'),
    isOpen: true,

    
}