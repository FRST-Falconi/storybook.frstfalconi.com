import React from 'react'
import { EditIcon, TrashIconNew } from '../../shared/icons';


import {CommentaryBoxV2} from './index'
export default {
    title: 'Fi/Commentary Box V2',
    component: CommentaryBoxV2,
}

const Template = (args) => <CommentaryBoxV2 {...args} />

export const Default = Template.bind({})

const options = [
    {
        description: "Editar",
        startIcon: <EditIcon fill='#222'/>,
        onClick: () => { alert("Comentario editado") },
    },
    {
        description: "Excluir",
        startIcon: <TrashIconNew fill='#C1341A'/>,
        onClick:() => { alert("Comentario exluido") },
        color: '#C1341A',
    },
]

const  onClickAsyncMock = async ()=>{
    await new Promise(resolve => setTimeout(resolve, 3000))
}

Default.args = {
    user: {
        id:"001",
        name: "Leticia Costa",
        office: "Líder de vendas",
        company: "Frst Falconi",
        imgProfile: 'https://i.pinimg.com/474x/2b/27/2f/2b272f528c3e14054436edd0d8bd2a26.jpg'
    },
    comment:{
        id:"commentId-0001",
        text: "Uow, muito genial isso https://frstfalconi.com/ Lorem Ipsum is simply dummy text of the printing and typesetting industry.  Lorem Ipsum has been the industry's Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and",
        date: "1 dia atrás",
        likesCount: 5
    },
    actions:{
        onClickUserInfo:  () => { alert("Visitar-Perfil") },
        actionEdit: onClickAsyncMock
    },
    texts:{
        likeButtonText: "Curtir",
        answerButtonText: "Responder",
        showMoreText: "Ver Mais",
        showLessText: "Ver Menos"
    },
    hasActionToClickOnAvatar: true,
    showOptions:true,
    options: options

}


