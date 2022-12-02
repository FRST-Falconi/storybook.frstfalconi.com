import React from 'react'

import NotificationCard from './index'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'FI/Notification Card',
    component: NotificationCard,
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <NotificationCard {...args} />

export const newNotification = Template.bind({})
newNotification.args = {
    notificationAvatar: 'https://media.istockphoto.com/photos/rocking-astronaut-3d-render-picture-id621597534?k=20&m=621597534&s=612x612&w=0&h=feOiFpDr7yah5o8dY1yrhkUh-grNKJNCevZn_fV-qz4=',
    notificationDescription : `Edson Corbari comentou no seu desafio “Aumentar o engajamento dos alunos na plataforma D2L”.`,
    isNewNotification : true,
    isBottomCard: false,
    textNew: 'Nova',
    notificationDate: 'Hoje',

    handleClick: () => alert('Notificação clicada!')
}

export const oldNotification = Template.bind({})
oldNotification.args = {
    notificationAvatar: 'https://media.istockphoto.com/photos/rocking-astronaut-3d-render-picture-id621597534?k=20&m=621597534&s=612x612&w=0&h=feOiFpDr7yah5o8dY1yrhkUh-grNKJNCevZn_fV-qz4=',
    notificationDescription : `Edson Corbari comentou no seu desafio “Aumentar o engajamento dos alunos na plataforma D2L”.`,
    isNewNotification : false,
    isBottomCard: false,
    textNew: 'Nova',
    notificationDate: 'Hoje',

    handleClick: () => alert('Notificação clicada!')
}