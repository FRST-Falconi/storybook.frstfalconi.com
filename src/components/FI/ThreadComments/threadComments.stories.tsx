import React from 'react';
import { ThreadComments } from './index';
import { Meta } from '@storybook/react'

import {mentionUserList} from '../../input-comment/mention.mocks' 

export default {
    title: 'FI/ThreadComments',
    component: ThreadComments
  } as Meta

  const Template = (args) => <ThreadComments {...args} />
  
export const Default = Template.bind({})


const listReplyComments = Array.from({ length: 12 }, (_, index) => ({
    id: `reply-${index + 1}`,
    text: `Resposta ${index + 1}: Lorem Ipsum is simply dummy text of the printing and typesetting industry.`,
    howLongAgo: `${index + 1} horas atrás`,
    user: {
      user_uuid: `user-${index + 1}`,
      name: `Usuário ${index + 1}`,
      role_name: "Cargo",
      company_name: "Frst Falconi",
      avatar: "",
    },
  }));


const getSearchUsers = async (search: string): Promise<object[]> => {
    await new Promise(resolve => setTimeout(resolve, 500));  
    return mentionUserList.filter(user => user.name.toLowerCase().includes(search.toLowerCase()));
  };
  
Default.args = {
    mainComment: {
        user:{
            uuid: "user-0001",
            name: "Leticia Costa",
            role_name:"Líder de vendas",
            company_name: "Frst Falconi",
            avatar: "https://i.pinimg.com/474x/2b/27/2f/2b272f528c3e14054436edd0d8bd2a26.jpg"
        },
        id:"01",
        text: "Uow, que projeto incrível, ansioso para ver os proximos passos  https://frstfalconi.com/",
        howLongAgo: "18 horas atrás",
    },
    listReplyComments: listReplyComments,
    onClickPublishButton: () => { alert("Comentário postado!") },
    getSearchUsers: getSearchUsers ,
    placeHolderText:"Responda Aqui!",
    showReplysButtonText: `Visualizar ${listReplyComments.length} Respostas`,
    publishButtonText:"Publicar",
    limitInputs:800,
    answerButtonText: 'Responder',
    showMoreButtonText: "Ver Mais",
    showLessButtonText: "Ver Menos",
    editText: "Editar",
    deleteText: "Excluir",
    styles: {},
    showMoreReplysButtonText: "Mostrar mais respostas",
    relationToPhaseText:"Em relação à Fase 1 -  Definição",
}


