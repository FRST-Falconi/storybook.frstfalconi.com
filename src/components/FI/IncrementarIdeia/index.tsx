import { FRSTTheme } from '../../../theme'
import { ThemeProvider } from 'styled-components'
import * as Styles from './icrementarIdeiaStyles'
import Avatar from '@components/avatar'
import { useRef, useState } from 'react'
import { ErrorAlert, ErrorInCicleIcon } from '@shared/icons'
import useAutosizeTextArea from './useAutosizeTextArea'

interface PropsIcrementarIdeia {
  user: 'userAdmin' | 'user'
  textPlaceholderGestor: string
  textPlaceholderAluno: string
  imgComentario?: string
  limitTexto?: number
  txtError: string
}

export default function IcrementarIdeia(props: PropsIcrementarIdeia) {
  const [activeComentario, setActiveComentario] = useState(false)
  const [textCount, setTextCount] = useState(0)
  const [isError, setIsError] = useState(false)
  const [value, setValue] = useState('')
  const textAreaRef = useRef<HTMLTextAreaElement>(null)

  useAutosizeTextArea(textAreaRef.current, value)

  const handleChange = (evt: React.ChangeEvent<HTMLTextAreaElement>) => {
    const texto = evt.target?.value
    setValue(texto)

    const txList = texto.split('')
    setTextCount(txList.length)
    if (props.limitTexto) {
      if (txList.length > props.limitTexto) {
        setIsError(true)
      } else {
        setIsError(false)
      }
    } else if (txList.length > 350) {
      setIsError(true)
    } else if (txList.length < 350) {
      setIsError(false)
    }
  }

  return (
    <ThemeProvider theme={FRSTTheme}>
      <Styles.ContainerComentario
        onClick={() => setActiveComentario(true)}
        activeComentario={activeComentario}
        error={isError}
      >
        <Styles.imagemAndIput activeComentario={activeComentario}>
          <Styles.imagemComentario activeComentario={activeComentario}>
            <Avatar src={props.imgComentario} size={'34px'} />
          </Styles.imagemComentario>
          <Styles.IpuntComentario
            onClick={() => setActiveComentario(true)}
            activeComentario={activeComentario}
            cols={30}
            rows={5}
            error={isError}
            id="txtTextArea"
            ref={textAreaRef}
            value={value}
            onChange={handleChange}
            placeholder={props.user === 'user' ? props.textPlaceholderAluno : props.textPlaceholderGestor}
          />
        </Styles.imagemAndIput>
        {activeComentario && (
          <Styles.containerCountAndEmojis>
            <Styles.valueCount>
              {textCount}/{props.limitTexto ? props.limitTexto : 350}
            </Styles.valueCount>
            <Styles.valueEmoji></Styles.valueEmoji>
          </Styles.containerCountAndEmojis>
        )}
      </Styles.ContainerComentario>
      {isError && (
        <Styles.containerError>
          <ErrorAlert />
          <p>{props.txtError}</p>
        </Styles.containerError>
      )}
    </ThemeProvider>
  )
}
