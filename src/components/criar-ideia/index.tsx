import '../../shared/global.css'
import { ThemeProvider } from 'styled-components'
import { FRSTTheme } from '../../theme'
import * as Styles from './criarIdeiaStyles'
import { IconCriarIdeia } from '@shared/icons'
import { useEffect, useRef, useState } from 'react'
import useAutosizeTextArea from './useAutosizeTextArea'

interface PropsCriarIdeia {
  textoCriar?: string
  nomeUser?: string
  nameEmpresa?: string
  dateCriarIdeia?: string
  textoDigitarIdeia?: string
  valueMaxTexto?: number
  textoValueMax?: string
  onChange?: (e) => void
}

export default function CriarIdeia(props: PropsCriarIdeia) {
  const [criarIdeia, setCriarIdeia] = useState(false)
  const [digiteIdeia, setDigiteIdeia] = useState(false)
  const textAreaRef = useRef<HTMLTextAreaElement>(null)
  const [stringValueTextArea, setStringValueTextArea] = useState('')

  useAutosizeTextArea(textAreaRef.current, stringValueTextArea)
  const [listaTexto, setListaTexto] = useState('')
  const [textCount, setTextCount] = useState(0)
  const [isError, setIsError] = useState(false)

  useEffect(() => {
    const txList = listaTexto.split('')
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
  }, [stringValueTextArea, listaTexto])

  useEffect(() => {
    props.onChange(stringValueTextArea)
  }, [stringValueTextArea])

  const handleChange = (evt: React.ChangeEvent<HTMLTextAreaElement>) => {
    const texto = evt.target?.value
    setStringValueTextArea(texto)
    setListaTexto(texto)
  }

  return (
    <ThemeProvider theme={FRSTTheme}>
      {criarIdeia ? (
        <Styles.CriarIdeia>
          {digiteIdeia ? (
            <>
              <Styles.TextAreaDigite
                cols={30}
                rows={5}
                id="txtTextArea"
                ref={textAreaRef}
                value={stringValueTextArea}
                onChange={handleChange}
              />
              <Styles.CountCaracter>
                {textCount}/{props.valueMaxTexto} {props.textoValueMax}
              </Styles.CountCaracter>
              <button
                onClick={() => {
                  setCriarIdeia(false)
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
              <button
                onClick={() => {
                  setCriarIdeia(false)
                }}
              >
                Cancelar
              </button>
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
