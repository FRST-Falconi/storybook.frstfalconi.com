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
  successfullInvite?: boolean
  style: React.CSSProperties
}
