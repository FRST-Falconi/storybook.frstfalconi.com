import '../../shared/global.css'
import { ThemeProvider } from 'styled-components'
import { FRSTTheme } from '../../theme'
import * as Styles from './criarIdeiaStyles'
import { ErrorAlert, IconCriarIdeia } from '@shared/icons'
import { useEffect, useRef, useState } from 'react'
import useAutosizeTextArea from './useAutosizeTextArea'
import MiniButton from '@components/mini-button'

interface PropsCriarIdeia {
  textoCriar?: string
  nomeUser?: string
  nameEmpresa?: string
  dateCriarIdeia?: string
  textoDigitarIdeia?: string
  valueMaxTexto?: number
  textoValueMax?: string
  onChange?: (e) => void
  textCancelarButton?: string
  textPublicarButton?: string
  textOuButton?: string
  txtError?: string
  onClickButtonPublicar?: (e) => void
  onClickCancelar?: (e) => void
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

  useEffect(() => {
    props.onChange(stringValueTextArea)
  }, [stringValueTextArea])

  const handleChange = (evt: React.ChangeEvent<HTMLTextAreaElement>) => {
    const texto = evt.target?.value
    setStringValueTextArea(texto)
  }

  return (
    <ThemeProvider theme={FRSTTheme}>
      {criarIdeia ? (
        <Styles.CriarIdeia isErro={isError}>
          {digiteIdeia ? (
            <>
              <Styles.TextAreaDigite
                cols={30}
                rows={5}
                id="txtTextArea"
                ref={textAreaRef}
                value={stringValueTextArea}
                onChange={handleChange}
                isErro={isError}
              />
              <Styles.CountCaracter>
                {textCount}/{props.valueMaxTexto} {props.textoValueMax}
              </Styles.CountCaracter>
              {isError && (
                <Styles.containerError>
                  <ErrorAlert />
                  <p>{props.txtError}</p>
                </Styles.containerError>
              )}
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
              <MiniButton
                variant={'secondary'}
                label={props.textCancelarButton}
                disabled={false}
                onClick={() => {
                  setCriarIdeia(false)
                }}
              />
            </>
          )}
        </Styles.CriarIdeia>
      ) : (
        <Styles.ButtonCriarIdeia onClick={() => setCriarIdeia(true)}>
          <IconCriarIdeia />
          {props.textoCriar}
        </Styles.ButtonCriarIdeia>
      )}
    </ThemeProvider>
  )
}
