import { FRSTTheme } from '../../../theme'
import { ThemeProvider } from 'styled-components'
import * as Styles from './icrementarIdeiaStyles'
import Avatar from '@components/avatar'
import { useState } from 'react'
import { ErrorAlert, ErrorInCicleIcon } from '@shared/icons'

interface PropsIcrementarIdeia {
  user: 'userAdmin' | 'user'
  textPlaceholderGestor: string
  textPlaceholderAluno: string
  imgComentario?: string
  limitTexto?: number
}

export default function IcrementarIdeia(props: PropsIcrementarIdeia) {
  const [activeComentario, setActiveComentario] = useState(false)
  let [textRows, setTextRows] = useState(5)
  const [textCount, setTextCount] = useState(0)
  const [isError, setIsError] = useState(false)

  function handleHeigthTextArea() {
    let objTextArea = document.getElementById('txtTextArea')
    if (objTextArea.scrollHeight > objTextArea.offsetHeight) {
      setTextRows((textRows += 1))
    }
  }

  function handleCounTexto(texto) {
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
    } else if (txList < 350) {
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
            rows={textRows}
            error={isError}
            id="txtTextArea"
            onKeyDown={() => handleHeigthTextArea()}
            onChange={(e) => handleCounTexto(e.target.value)}
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
          <p>Reduza seu texto para 350 caracteres.</p>
        </Styles.containerError>
      )}
    </ThemeProvider>
  )
}
