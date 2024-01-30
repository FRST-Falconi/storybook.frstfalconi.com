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

const listReplyComments = Array.from({ length: 12 }, (_, index) => ({
  id: index + 1,
  text: `Resposta ${index + 1}: Lorem Ipsum is simply dummy text of the printing and typesetting industry.`,
  howLongAgo: `${index + 1} horas atrás`,
  uuid: `replyUuid-${index + 1}`,
  user: {
    uuid: `user-${index + 1}`,
    name: `Usuário ${index + 1}`,
    role_name: 'Cargo',
    company_name: 'Frst Falconi',
    avatar: 'https://api-deimos-cdn.dev.frstfalconi.cloud/avatar/d49fe932-18d5-4476-bb37-1d1bb23f5b2e.jpg'
  }
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
    id: 1,
    text: '<p>Marcando <a data-mention-id="0ceac4cb-7bc4-4ac0-a661-35cc7dfe4985" contenteditable="false" href="/profile/0ceac4cb-7bc4-4ac0-a661-35cc7dfe4985" style="font-weight: bold; color: rgb(242, 104, 24);">Alexandre Correa Da Silva</a>&nbsp;</p> <p>Marcando <a data-mention-id="00000000002031093219" contenteditable="false" href="/profile/0ceac4cb-7bc4-4ac0-a661-35cc7dfe4981" style="font-weight: bold; color: rgb(242, 104, 24);">Julia Silva</a>&nbsp;</p>',
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
  showReplysButtonText: `Visualizar ${listReplyComments.length} Respostas`,
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
  limitMessageExceeded: 'Limite de caracteres excedido'
}
