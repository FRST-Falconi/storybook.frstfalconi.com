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

const listReplyComments = [{
    id:"02",
    text: "Disse tudo Leticia! https://frstfalconi.com/ Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type andUow, muito genial isso https://frstfalconi.com/ Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and Lorem Ipsum is simply dummy text of the printing and typesetting industry.  Lorem Ipsum has been the industry's Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley",
    howLongAgo: "2 horas atrás",
    user:{
        uuid: "user-00001",
        name: "Julio Neto",
        role_name:"Gestor de Trafego",
        company_name: "Frst Falconi",
    },
},
{
    id:"03",
    text: "sim, eu também estou ansioso com o que vem por aí!",
    howLongAgo: "1 horas atrás",
    mentionText: "<div><p>Este é um comentario para o usuario <span style='color: rgb(242, 104, 24);'>Joao</span> que vai ficar marcado no mentions https://frstfalconi.com/ </p></div>",
    user:{
        uuid: "user-00002",
        name: "Lucas Silva",
        role_name:"Gestor De Finanças",
        company_name: "Frst Falconi",
    },
}
]


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
    styles: {padding: '10px'}
}


