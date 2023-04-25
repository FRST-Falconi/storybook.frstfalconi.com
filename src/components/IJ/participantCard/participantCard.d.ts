import React from 'react'

export interface ParticipantCardI {
  userInfo: {
    id: string
    name: string
    avatar: string
    email: string
    area: string
    position: string
  }
  labels?: {
    name: string
    competences: string
    recomendations: string
    tag: 'Cadastrado'
    area: 'Área'
    position: 'Cargo'
  }
  successfullInvite?: boolean
  style: React.CSSProperties
}
