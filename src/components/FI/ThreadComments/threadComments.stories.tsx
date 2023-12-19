import React from 'react';
import { ThreadComments } from './index';
import { Meta } from '@storybook/react'

export default {
    title: 'FI/ThreadComments',
    component: ThreadComments
  } as Meta

  const Template = (args) => <ThreadComments {...args} />
  
export const Default = Template.bind({})

const listReplyComments = [{
    id:"02",
    username: "Julio Neto",
    office: "Gestor de Trafego",
    text: "Disse tudo Leticia!",
    howlongAgo: "2 horas atrás",
    className:'Comentario de julio'
},
{
    id:"03",
    username: "Lucas Neto",
    office: "Gestor de RH",
    text: "sim, eu também estou ansioso com o que vem por aí!",
    howlongAgo: "1 horas atrás",
    className:'Comentario de lucas',

}
]

const  onClickShowReplys = async ()=>{
     await new Promise(resolve => setTimeout(resolve, 3000))
}

Default.args = {
    mainComment: {
        userId: "user-0001",
        id:"01",
        username: "Leticia Costa",
        office: "Líder de vendas",
        text: "Uow, que projeto incrível, ansioso para ver os proximos passos",
        howlongAgo: "18 horas atrás",
        className:'Comentario qualquer',
        imgProfile: 'https://i.pinimg.com/474x/2b/27/2f/2b272f528c3e14054436edd0d8bd2a26.jpg',
    },
    listReplyComments: listReplyComments,
    onClickPublishButton: () => { alert("Comentário postado!") },
    onClickShowReplys: onClickShowReplys,
    placeHolderText:"Responda Aqui!",
    showReplysButtonText: `Visualizar ${listReplyComments.length} Respostas`,
    publishButtonText:"Publicar",
    limitInputs:800,
    answerButtonText: 'Responder'
}


