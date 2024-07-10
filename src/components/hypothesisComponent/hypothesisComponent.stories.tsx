import { HypothesisComponent } from './index'
import { HypothesisEnum } from './types'
import React from 'react'

export default {
  title: 'Hipotesis',
  component: HypothesisComponent
}

const Template = (args) => <HypothesisComponent {...args} />

export const Priorizada = Template.bind({})
export const Levantada = Template.bind({})
export const Sugerida = Template.bind({})
export const EditHipotesis = Template.bind({})

Priorizada.args = {
  title: 'HIPÓTESE',
  type: HypothesisEnum.PRIORITIZE,
  description:
    "1 is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with des",
  id: '1',
  canViewVote: true,
  votesSingularText: 'voto',
  votesPluralText: 'votos',
  deleteVoteText: 'Excluir voto',
  voteText: 'Votar',
  canViewListVotes: true,
  userLoggedId: '05b7bec61',
  handleViewProfile: (id) => alert(`cliquei no user de id: ${id}`),
  onChangeVote: (e) => alert("trocar voto"),
  changeVoteText: "Trocar Voto",
  votes: [
    {
      id: 1,
      user_uuid: '05b7bec61',
      obj_code: '0fb8e72d1',
      obj_type: 'hypothese',
      user: {
        name: 'Roberto bla bla bla',
        uuid: '05b7bec61',
        email: 'teste.teste@gmail.com',
        avatar: 'https://img.freepik.com/fotos-gratis/mulher-moderna-tomando-uma-selfie_23-2147893976.jpg?w=2000'
      }
    },
    {
      id: 2,
      user_uuid: '05b7bec62',
      obj_code: '0fb8e72d2',
      obj_type: 'hypothese',
      user: {
        name: 'Roberto',
        uuid: '05b7bec62',
        email: 'teste.teste@gmail.com',
        avatar: 'https://img.freepik.com/fotos-gratis/mulher-moderna-tomando-uma-selfie_23-2147893976.jpg?w=2000'
      }
    },
    {
      id: 3,
      user_uuid: '05b7bec63',
      obj_code: '0fb8e72d3',
      obj_type: 'hypothese',
      user: {
        name: 'Lima',
        uuid: '05b7bec63',
        email: 'teste.teste@gmail.com',
        avatar: 'https://img.freepik.com/fotos-gratis/mulher-moderna-tomando-uma-selfie_23-2147893976.jpg?w=2000'
      }
    },
    {
      id: 4,
      user_uuid: '05b7bec64',
      obj_code: '0fb8e72d4',
      obj_type: 'hypothese',
      user: {
        name: 'Up',
        uuid: '05b7bec64',
        email: 'teste.teste@gmail.com',
        avatar: 'https://img.freepik.com/fotos-gratis/mulher-moderna-tomando-uma-selfie_23-2147893976.jpg?w=2000'
      }
    }
  ]
}

Levantada.args = {
  title: 'HIPÓTESE',
  type: HypothesisEnum.RAISED,
  description:
    "1 is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with des",
  id: '2',
  hasVoteGoal: true,
  onChangeVote: (e) => alert("trocar voto"),
  changeVoteText: "Trocar Voto",
  votes: [
    {
      id: 1,
      user_uuid: '05b7bec61',
      obj_code: '0fb8e72d1',
      obj_type: 'hypothese',
      user: {
        name: 'Roberto',
        uuid: '05b7bec61',
        email: 'teste.teste@gmail.com',
        avatar: 'https://img.freepik.com/fotos-gratis/mulher-moderna-tomando-uma-selfie_23-2147893976.jpg?w=2000'
      }
    },
    {
      id: 2,
      user_uuid: '05b7bec62',
      obj_code: '0fb8e72d2',
      obj_type: 'hypothese',
      user: {
        name: 'Roberto',
        uuid: '05b7bec62',
        email: 'teste.teste@gmail.com',
        avatar: 'https://img.freepik.com/fotos-gratis/mulher-moderna-tomando-uma-selfie_23-2147893976.jpg?w=2000'
      }
    }
  ],
  userLoggedId: '05b7bec61',
  deleteVoteText: 'Excluir voto',
  voteText: 'Votar',
  canVote: true,
  votesSingularText: 'voto',
  votesPluralText: 'votos',
  deleteVote: (id) => alert(`deletei o voto de id ${id}`),
  onVote: (id) => alert(`votei na hipotese de id: ${id}`)
}

Sugerida.args = {
  title: 'HIPÓTESE',
  type: HypothesisEnum.SUGGESTED,
  description:
    "1 is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with des",
  id: '2',
  authorId: '22222',
  showAvatar: true,
  handleViewProfile: (id) => alert(`cliquei no user de id: ${id}`),
  onVote: (id) => alert(`votei na hipotese de id: ${id}`),
  deleteVote: (id) => alert(`deletei o voto de id ${id}`),
  onChangeVote: (e) => alert("trocar voto"),
  changeVoteText: "Trocar Voto",
  votes: [
    {
      id: 1,
      user_uuid: '05b7bec61',
      obj_code: '0fb8e72d1',
      obj_type: 'hypothese',
      user: {
        name: 'Roberto',
        uuid: '05b7bec61',
        email: 'teste.teste@gmail.com',
        avatar: 'https://img.freepik.com/fotos-gratis/mulher-moderna-tomando-uma-selfie_23-2147893976.jpg?w=2000'
      }
    },
    {
      id: 2,
      user_uuid: '05b7bec62',
      obj_code: '0fb8e72d2',
      obj_type: 'hypothese',
      user: {
        name: 'Roberto',
        uuid: '05b7bec62',
        email: 'teste.teste@gmail.com',
        avatar: 'https://img.freepik.com/fotos-gratis/mulher-moderna-tomando-uma-selfie_23-2147893976.jpg?w=2000'
      }
    }
  ],
  canVote: true,
  userLoggedId: '05b7bec61',
  votesSingularText: 'voto',
  votesPluralText: 'votos',
  deleteVoteText: 'Excluir voto',
  voteText: 'Votar'
}

EditHipotesis.args = {
  title: 'HIPÓTESE',
  type: HypothesisEnum.RAISED,
  description:
    "1 is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with des",
  id: '2',
  hasVoteGoal: true,
  hasEditHipotesis: true,
  onDeleteHipotesis: () => alert('desafio deletado'),
  onChangeVote: (e) => alert("trocar voto"),
  changeVoteText: "Trocar Voto",
  votes: [
    {
      id: 1,
      user_uuid: '05b7bec61',
      obj_code: '0fb8e72d1',
      obj_type: 'hypothese',
      user: {
        name: 'Roberto',
        uuid: '05b7bec61',
        email: 'teste.teste@gmail.com',
        avatar: 'https://img.freepik.com/fotos-gratis/mulher-moderna-tomando-uma-selfie_23-2147893976.jpg?w=2000'
      }
    },
    {
      id: 2,
      user_uuid: '05b7bec62',
      obj_code: '0fb8e72d2',
      obj_type: 'hypothese',
      user: {
        name: 'Roberto',
        uuid: '05b7bec62',
        email: 'teste.teste@gmail.com',
        avatar: 'https://img.freepik.com/fotos-gratis/mulher-moderna-tomando-uma-selfie_23-2147893976.jpg?w=2000'
      }
    }
  ],
  userLoggedId: '05b7bec61',
  deleteVoteText: 'Excluir voto',
  voteText: 'Votar',
  canVote: true,
  votesSingularText: 'voto',
  votesPluralText: 'votos',
  deleteVote: (id) => alert(`deletei o voto de id ${id}`),
  onVote: (id) => alert(`votei na hipotese de id: ${id}`)
}