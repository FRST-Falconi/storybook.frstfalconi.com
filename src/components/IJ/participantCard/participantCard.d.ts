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
    competences: string
    modules: string
    tag: string
    area: string
    position: string
  }
  competencesList: [{ id: number | string; name: string }]
  modulesList: [{ id: number | string; name: string }]
  successfullInvite?: boolean
  disabled?: boolean
  style: React.CSSProperties
}
