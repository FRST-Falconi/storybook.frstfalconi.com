import '../../shared/global.css'
import { ThemeProvider } from 'styled-components'
import { FRSTTheme } from '../../theme'
import * as Styles from './votarStyles'
import { VotarIcon, VotarIconPressed } from '@shared/icons'
import { useState } from 'react'

export interface PropsVotar {
  textButton?: string
  valueQuantidade?: number
  textValueQuantidade?: string
  votado?: boolean
  user?: 'user' | 'userAutor'
}

export default function Votar(props: PropsVotar) {
  return props.user === 'userAutor' ? (
    <Styles.ContainerVotar>
      <VotarIconPressed />
      <Styles.QuantidadeVotos user={props.user}>
        {props.valueQuantidade} {props.textValueQuantidade}
      </Styles.QuantidadeVotos>
    </Styles.ContainerVotar>
  ) : (
    <Styles.ContainerVotar>
      <Styles.ButtonVotar>
        {props.votado ? <VotarIconPressed /> : <VotarIcon />}
        {props.textButton}
      </Styles.ButtonVotar>
      <Styles.DivSeparador />
      <Styles.QuantidadeVotos user={props.user}>
        {props.valueQuantidade} {props.textValueQuantidade}
      </Styles.QuantidadeVotos>
    </Styles.ContainerVotar>
  )
}
