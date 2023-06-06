import '../../shared/global.css'
import { ThemeProvider } from 'styled-components'
import { FRSTTheme } from '../../theme'
import * as Styles from './publicarIdeiaStyles'
import { ErrorAlert, IconCriarIdeia, TrashIconNew } from '@shared/icons'
import { useEffect, useRef, useState } from 'react'
import useAutosizeTextArea from './useAutosizeTextArea'
import MiniButton from '@components/mini-button'
import Button from '@components/expand-button'

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
  txExcluir?: string
  onClickExcluir?: () => {}
  textCancelarButton?: string
  onClickCancelar?: () => {}
  textOuButton?: string
  textPublicarButton?: string
  onClickButtonPublicar?: () => {}
  onChange?: () => {}
  valueMaxTexto?: number
}

export default function CriarIdeia(props: PropsCriarIdeia) {
  const [criarIdeia, setCriarIdeia] = useState(false)
  const [digiteIdeia, setDigiteIdeia] = useState(false)
  const textAreaRef = useRef<HTMLTextAreaElement>(null)
  const [stringValueTextArea, setStringValueTextArea] = useState(props.textoPublic)

  useAutosizeTextArea(textAreaRef.current, stringValueTextArea)
  const [textCount, setTextCount] = useState(0)
  const [buttonDisabled, setButtonDisabled] = useState(false)
  const [isError, setIsError] = useState(false)
  const [isHouver, setIsHouver] = useState(false)
  const [isExcluir, setIsExcluir] = useState(false)
  const [isPublicar, setIsPublicar] = useState(false)
  const [isEditPubli, setIsEditPubli] = useState(false)

  useEffect(() => {
    const txList = stringValueTextArea.split('')

    if (txList.length === 0) {
      setButtonDisabled(true)
    } else {
      setButtonDisabled(false)
    }

    setTextCount(txList.length)
    if (props.valueMaxTexto) {
      if (txList.length > props.valueMaxTexto) {
        setIsError(true)
      } else {
        setIsError(false)
      }
    } else if (txList.length > 350) {
      setIsError(true)
    } else if (txList.length < 350) {
      setIsError(false)
    }
  }, [stringValueTextArea])

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

  function handleOnClickUserAutor() {
    setIsExcluir(true)
    setIsPublicar(true)
    setIsHouver(false)
    setIsEditPubli(true)
  }

  function handleOnClickUserBrainstorm() {
    setIsExcluir(true)
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
            <Styles.TextoPublicarIdeiaHouver
              onMouseOver={MouseOver}
              onMouseLeave={MouseOut}
              onClick={handleOnClickUserBrainstorm}
            >
              <Styles.TextoPublicarIdeia>
                <p>{props.textoPublic}</p>
              </Styles.TextoPublicarIdeia>
              <h3>{props.txUserBrainstorm}</h3>
            </Styles.TextoPublicarIdeiaHouver>
          ) : props.userAutorPubli ? (
            <Styles.TextoPublicarIdeiaHouver
              onMouseOver={MouseOver}
              onMouseLeave={MouseOut}
              onClick={handleOnClickUserAutor}
            >
              <Styles.TextoPublicarIdeia>
                <p>{props.textoPublic}</p>
              </Styles.TextoPublicarIdeia>
              <h3>{props.txUserAutor}</h3>
            </Styles.TextoPublicarIdeiaHouver>
          ) : (
            <Styles.TextoPublicarIdeia onMouseOver={MouseOver} onMouseLeave={MouseOut}>
              <p>{props.textoPublic}</p>
            </Styles.TextoPublicarIdeia>
          )
        ) : isEditPubli ? (
          <Styles.TextAreaDigite
            cols={30}
            rows={5}
            id="txtTextArea"
            ref={textAreaRef}
            value={stringValueTextArea}
            onChange={handleChange}
            isErro={isError}
          />
        ) : (
          <Styles.TextoPublicarIdeia onMouseOver={MouseOver} onMouseLeave={MouseOut}>
            <p>{props.textoPublic}</p>
          </Styles.TextoPublicarIdeia>
        )}
        {isPublicar ? (
          <Styles.ButtonPublicarAndCancelar>
            <MiniButton
              variant={'secondary'}
              label={props.textCancelarButton}
              disabled={false}
              onClick={props.onClickCancelar}
            />
            <p>{props.textOuButton}</p>
            <MiniButton
              variant={'primary'}
              label={props.textPublicarButton}
              disabled={isError ? true : buttonDisabled}
              onClick={props.onClickButtonPublicar}
            />
          </Styles.ButtonPublicarAndCancelar>
        ) : null}
        {isExcluir ? (
          <Button
            label={props.txExcluir}
            disabled={false}
            onClick={props.onClickExcluir}
            startIcon={<TrashIconNew width="30px" />}
          />
        ) : (
          <>
            <Styles.ContainerNomeSobrenome>{props.nomeSobrenome}</Styles.ContainerNomeSobrenome>
            <Styles.ContainerEmpresaData>
              {props.empresaNome}
              {props.dataPublic}
            </Styles.ContainerEmpresaData>
          </>
        )}
      </Styles.PublicarIdeia>
    </ThemeProvider>
  )
}
