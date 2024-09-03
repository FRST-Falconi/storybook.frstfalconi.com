import React from 'react'
import { ThreadComments } from './index'
import { Meta } from '@storybook/react'

import { mentionUserList } from '../../input-comment/mention.mocks'

export default {
  title: 'FI/ThreadComments',
  component: ThreadComments
} as Meta

const Template = (args) => <ThreadComments {...args} />

export const Default = Template.bind({})

const handleCountReplies = () => {
  let countReplys = listReplyComments.length
  listReplyComments.map((replyComment) => {
    countReplys = countReplys + replyComment.replies.length
  })
  return countReplys
}

const listReplyComments = Array.from({ length: 12 }, (_, index) => ({
  id: index + 1,
  text: `Resposta ${index + 1}: Lorem Ipsum is simply dummy text of the printing and typesetting industry.`,
  howLongAgo: `${index + 1} horas atrás`,
  uuid: `TestereplyUuid-${index + 1}`,
  user: {
    uuid: `user-${index + 1}`,
    name: `Usuário ${index + 1}`,
    role_name: 'Cargo',
    company_name: 'Frst Falconi',
    avatar: 'https://api-deimos-cdn.dev.frstfalconi.cloud/avatar/d49fe932-18d5-4476-bb37-1d1bb23f5b2e.jpg'
  },
  replies: [
    {
      id: index + index * 10,
      text: `Resposta de resposta ${
        index + index * 10
      }: Lorem Ipsum is simply dummy text of the printing and typesetting industry.`,
      howLongAgo: `${index + index * 10} horas atrás`,
      uuid: `Teste2replyUuid-${index + index * 10}`,
      user: {
        uuid: `user-${index + index * 10}`,
        name: `Usuário ${index + index * 10}`,
        role_name: 'Cargo',
        company_name: 'Frst Falconi',
        avatar: 'https://pics.craiyon.com/2023-06-27/287f2a60c2e74386b5a89c517eb527dc.webp'
      }
    },
    {
      id: index + index * 20,
      text: `Resposta de resposta ${
        index + index * 20
      }: Lorem Ipsum is simply dummy text of the printing and typesetting industry.`,
      howLongAgo: `${index + 1} horas atrás`,
      uuid: `replyUuid-${index + index * 20}`,
      user: {
        uuid: `user-${index + index * 20}`,
        name: `Usuário ${index + index * 20}`,
        role_name: 'Cargo',
        company_name: 'Frst Falconi',
        avatar: 'https://pics.craiyon.com/2023-06-27/287f2a60c2e74386b5a89c517eb527dc.webp'
      }
    }
  ]
}))

const getSearchUsers = async (search: string): Promise<object[]> => {
  await new Promise((resolve) => setTimeout(resolve, 500))
  return mentionUserList.filter((user) => user.name.toLowerCase().includes(search.toLowerCase()))
}

Default.args = {
  mainComment: {
    user: {
      uuid: 'user-0001',
      name: 'Leticia Costa',
      role_name: 'Líder de vendas',
      company_name: 'Frst Falconi',
      avatar: 'https://i.pinimg.com/474x/2b/27/2f/2b272f528c3e14054436edd0d8bd2a26.jpg'
    },
    thread_open: true,
    id: 1,
    text: '<p>Marcando <a data-mention-id="0ceac4cb-7bc4-4ac0-a661-35cc7dfe4985" contenteditable="false" href="/profile/0ceac4cb-7bc4-4ac0-a661-35cc7dfe4985" style="font-weight: bold; color: rgb(242, 104, 24);">Alexandre Correa Da Silva</a>&nbsp;</p> <p>Marcando <a data-mention-id="00000000002031093219" contenteditable="false" href="/profile/0ceac4cb-7bc4-4ac0-a661-35cc7dfe4981" style="font-weight: bold; color: rgb(242, 104, 24);">Julia Silva</a>&nbsp;</p><p><a data-mention-id="b481bd69-81b0-4921-a13f-41d02399cb65" contenteditable="false" href="/profile/b481bd69-81b0-4921-a13f-41d02399cb65" style="font-weight: bold; color: rgb(242, 104, 24);">Nandah05 Teste05</a>&nbsp;Teste edit - 02</p>',
    howLongAgo: '18 horas atrás'
  },
  loggedInUser: {
    id: 'user-0001',
    name: 'Leticia Costa',
    role_name: 'Líder de vendas',
    company_name: 'Frst Falconi',
    avatar: 'https://i.pinimg.com/474x/2b/27/2f/2b272f528c3e14054436edd0d8bd2a26.jpg'
  },
  isGoalOwner: true,
  listReplyComments: listReplyComments,

  onClickDelete: (commentId: string) => {
    alert(`commentId: ${commentId}`)
  },
  onClickEdit: (comment) => {
    console.log('comment:', comment)
  },
  onClickPublishButton: () => {
    alert('Comentário postado!')
  },
  getSearchUsers: getSearchUsers,
  placeHolderText: 'Responda Aqui!',
  showReplysButtonText: `Visualizar ${handleCountReplies()} Respostas`,
  publishButtonText: 'Publicar',
  limitInputs: 800,
  answerButtonText: 'Responder',
  showMoreButtonText: 'Ver Mais',
  showLessButtonText: 'Ver Menos',
  editText: 'Editar',
  deleteText: 'Excluir',
  styles: {},
  showMoreReplysButtonText: 'Mostrar mais respostas',
  relationToPhaseText: 'Em relação à Fase 1 -  Definição',
  cancelButtonText: 'Cancelar',
  saveButtonText: 'Salvar',
  orText: 'ou',
  limitMessageExceeded: 'Limite de caracteres excedido',
  likeButtonText: 'Curtir',
  toViewText: 'Visualizar',
  answersText: 'Respostas',
  idCommentResponse: 'testeIdResposta'
}
