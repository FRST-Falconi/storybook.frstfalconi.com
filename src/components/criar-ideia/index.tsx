import '../../shared/global.css'
import { ThemeProvider } from 'styled-components'
import { FRSTTheme } from '../../theme'
import * as Styles from './criarIdeiaStyles'
import { IconCriarIdeia } from '@shared/icons'
import { useState } from 'react'

interface PropsCriarIdeia {
  textoCriar?: string
  nomeUser?: string
  nameEmpresa?: string
  dateCriarIdeia?: string
  textoDigitarIdeia?: string
}

export default function CriarIdeia(props: PropsCriarIdeia) {
  const [criarIdeia, setCriarIdeia] = useState(false)
  const [digiteIdeia, setDigiteIdeia] = useState(false)

  return (
    <ThemeProvider theme={FRSTTheme}>
      {criarIdeia ? (
        <Styles.ContainerCriarIdeia>
          <Styles.ButtonCriarIdeia onClick={() => setCriarIdeia(true)}>
            <IconCriarIdeia />
            {props.textoCriar}
          </Styles.ButtonCriarIdeia>
          <Styles.CriarIdeia>
            {digiteIdeia ? (
              <>
                <Styles.TextAreaDigite></Styles.TextAreaDigite>
                <button
                  onClick={() => {
                    setDigiteIdeia(false)
                  }}
                >
                  cancela
                </button>
              </>
            ) : (
              <>
                <Styles.ButtonDigiteIdeia
                  onClick={() => {
                    setDigiteIdeia(true)
                  }}
                >
                  {props.textoDigitarIdeia}
                </Styles.ButtonDigiteIdeia>
                <Styles.NomeUser>{props.nomeUser}</Styles.NomeUser>
                <Styles.TextoEmpresaDate>
                  {props.nameEmpresa}
                  <Styles.DivisaoTextoEmpresaDate />
                  {props.dateCriarIdeia}
                </Styles.TextoEmpresaDate>
              </>
            )}
          </Styles.CriarIdeia>
        </Styles.ContainerCriarIdeia>
      ) : (
        <Styles.ButtonCriarIdeia onClick={() => setCriarIdeia(true)}>
          <IconCriarIdeia />
          {props.textoCriar}
        </Styles.ButtonCriarIdeia>
      )}
    </ThemeProvider>
  )
}
