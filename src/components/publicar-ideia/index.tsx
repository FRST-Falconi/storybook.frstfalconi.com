import '../../shared/global.css'
import { ThemeProvider } from 'styled-components'
import { FRSTTheme } from '../../theme'
import * as Styles from './publicarIdeiaStyles'
import { ErrorAlert, IconCriarIdeia } from '@shared/icons'
import { useEffect, useRef, useState } from 'react'
import useAutosizeTextArea from './useAutosizeTextArea'
import MiniButton from '@components/mini-button'

interface PropsCriarIdeia {
  textoPublic?: string
  nomeSobrenome?: string
  empresaNome?: string
  dataPublic?: string
  textOu?: string
  userAutorPubli?: boolean
  userBrainstorm?: boolean
  user: boolean
  txUserAutor?: string
  txUserBrainstorm?: string
}

export default function CriarIdeia(props: PropsCriarIdeia) {
  const [criarIdeia, setCriarIdeia] = useState(false)
  const [digiteIdeia, setDigiteIdeia] = useState(false)
  const textAreaRef = useRef<HTMLTextAreaElement>(null)
  const [stringValueTextArea, setStringValueTextArea] = useState('')

  useAutosizeTextArea(textAreaRef.current, stringValueTextArea)
  const [textCount, setTextCount] = useState(0)
  const [buttonDisabled, setButtonDisabled] = useState(false)
  const [isError, setIsError] = useState(false)
  const [isHouver, setIsHouver] = useState(false)

  // useEffect(() => {
  //   const txList = stringValueTextArea.split('')

  //   if (txList.length === 0) {
  //     setButtonDisabled(true)
  //   } else {
  //     setButtonDisabled(false)
  //   }

  //   setTextCount(txList.length)
  //   if (props.valueMaxTexto) {
  //     if (txList.length > props.valueMaxTexto) {
  //       setIsError(true)
  //     } else {
  //       setIsError(false)
  //     }
  //   } else if (txList.length > 350) {
  //     setIsError(true)
  //   } else if (txList.length < 350) {
  //     setIsError(false)
  //   }
  // }, [stringValueTextArea])

  // useEffect(() => {
  //   props.onChange(stringValueTextArea)
  // }, [stringValueTextArea])

  const handleChange = (evt: React.ChangeEvent<HTMLTextAreaElement>) => {
    const texto = evt.target?.value
    setStringValueTextArea(texto)
  }

  function MouseOver() {
    setIsHouver(true)
  }
  function MouseOut() {
    setIsHouver(false)
  }

  return (
    <ThemeProvider theme={FRSTTheme}>
      <Styles.PublicarIdeia isErro={isError}>
        {props.user ? (
          <Styles.TextoPublicarIdeiaUser>
            <p>{props.textoPublic}</p>
          </Styles.TextoPublicarIdeiaUser>
        ) : isHouver ? (
          props.userBrainstorm ? (
            <Styles.TextoPublicarIdeiaHouver onMouseLeave={MouseOut}>
              <p>{props.txUserBrainstorm}</p>
            </Styles.TextoPublicarIdeiaHouver>
          ) : props.userAutorPubli ? (
            <Styles.TextoPublicarIdeiaHouver onMouseLeave={MouseOut}>
              <p>{props.txUserAutor}</p>
            </Styles.TextoPublicarIdeiaHouver>
          ) : (
            <Styles.TextoPublicarIdeia onMouseLeave={MouseOver}>
              <p>{props.textoPublic}</p>
            </Styles.TextoPublicarIdeia>
          )
        ) : (
          <Styles.TextoPublicarIdeia onMouseLeave={MouseOver}>
            <p>{props.textoPublic}</p>
          </Styles.TextoPublicarIdeia>
        )}
        <Styles.ContainerNomeSobrenome>{props.nomeSobrenome}</Styles.ContainerNomeSobrenome>
        <Styles.ContainerEmpresaData>
          {props.empresaNome}
          {props.dataPublic}
        </Styles.ContainerEmpresaData>
      </Styles.PublicarIdeia>
    </ThemeProvider>
  )
}
