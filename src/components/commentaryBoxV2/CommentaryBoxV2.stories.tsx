import React from 'react'
import { EditIcon, TrashIconNew } from '../../shared/icons';


import {CommentaryBoxV2} from './index'
export default {
    title: 'Fi/Commentary Box V2',
    component: CommentaryBoxV2,
}

const Template = (args) => <CommentaryBoxV2 {...args} />

export const Default = Template.bind({})

Default.args = {
    userId:"001",
    userName: "Leticia Costa",
    userOffice: "Líder de vendas",
    userCompany: "Frst Falconi",
    imgProfile: 'https://i.pinimg.com/474x/2b/27/2f/2b272f528c3e14054436edd0d8bd2a26.jpg',
    commentTextWithMention:"<div><p>Este é um comentario para o usuario <span style='color: rgb(242, 104, 24);'>Joao</span> que vai ficar marcado no mentions https://frstfalconi.com/ </p></div>",
    commentId:"commentId-0001",
    commentText: "Uow, muito genial isso https://frstfalconi.com/  Uow, muito genial isso https://frstfalconi.com/ Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type andUow, muito genial isso https://frstfalconi.com/ Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and Lorem Ipsum is simply dummy text of the printing and typesetting industry.  Lorem Ipsum has been the industry's Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and",
    howLongAgo: "1 dia atrás",
    likesCount: 5,

    actionDeleteComment:(commentId : string)=> {alert(`commentId: ${commentId}`)},
    onClickUserInfo:  () => { alert("Visitar-Perfil") },
    likeButtonText: "Curtir",
    answerButtonText: "Responder",
    showMoreText: "Ver Mais",
    showLessText: "Ver Menos",
    visitProfileText: "Visitar perfil",
    relationToPhaseText:"Em relação à Fase 1 -  Definição",

    hasActionToClickOnAvatar: true,
    showOptions:true,
    showLikeButton:true,
    isAuthor: true,
    editText: "Editar",
    deleteText: "Excluir"
}


