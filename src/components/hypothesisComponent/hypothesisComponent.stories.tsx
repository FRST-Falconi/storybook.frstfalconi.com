import { HypothesisComponent } from './index'
import { HypothesisEnum } from './types'
import React from 'react'

export default {
  title: 'FI/Hipotesis',
  component: HypothesisComponent
}

const Template = (args) => <HypothesisComponent {...args} />

export const Priorizada = Template.bind({})
export const Levantada = Template.bind({})
export const Sugerida = Template.bind({})

Priorizada.args = {
  title: 'HIPÓTESE',
  type: HypothesisEnum.PRIORITIZE,
  description: 'Melhorar a UI e usabilidade da plataforma.',
  id: '1',
  canViewVote: true,
  votesSingularText: 'voto',
  votesPluralText: 'votos',
  deleteVoteText: 'Excluir voto',
  voteText: 'Votar',
  canViewListVotes: true,
  handleViewProfile: (id) => alert(`cliquei no user de id: ${id}`),
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
  ],
  userLoggedId: '00'
}

Levantada.args = {
  title: 'HIPÓTESE',
  type: HypothesisEnum.RAISED,
  description: 'Melhorar a UI e usabilidade da plataforma.',
  id: '2',
  votes: [],
  userLoggedId: '00',
  deleteVoteText: 'Excluir voto',
  voteText: 'Votar',
  canVote: true
}

Sugerida.args = {
  title: 'HIPÓTESE',
  type: HypothesisEnum.SUGGESTED,
  description: 'Melhorar a UI e usabilidade da plataforma.',
  id: '2',
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
  ],
  canVote: true,
  userLoggedId: '05b7bec61',
  votesSingularText: 'voto',
  votesPluralText: 'votos',
  deleteVoteText: 'Excluir voto',
  voteText: 'Votar'
}
