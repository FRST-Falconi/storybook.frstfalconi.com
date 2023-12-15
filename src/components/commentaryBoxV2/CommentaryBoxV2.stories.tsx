import React from 'react'

import {CommentaryBoxV2} from './index'
export default {
    title: 'Fi/Commentary Box V2',
    component: CommentaryBoxV2,
}

const Template = (args) => <CommentaryBoxV2 {...args} />

export const Default = Template.bind({})

Default.args = {
    user: {
        id:"001",
        name: "Leticia Costa",
        office: "Líder de vendas",
        company: "Frst Falconi",
        imgProfile: 'https://i.pinimg.com/474x/2b/27/2f/2b272f528c3e14054436edd0d8bd2a26.jpg'
    },
    comment:{
        text: "Uow, muito genial isso!",
        date: "1 dia atrás",
        likesCount: 5
    },
    onClickUserInfo:  () => { alert("Visitar-Perfil") },
    hasActionToClickOnAvatar: true,
    likeButtonText: "Curtir",
    answerButtonText: "Responder"

 
}
