import { FRSTTheme } from '../../theme'
import { ThemeProvider } from 'styled-components'
import * as Styles from './icrementarIdeiaStyles'
import Avatar from '@components/avatar'
import { useEffect, useRef, useState } from 'react'
import { ErrorAlert, ErrorInCicleIcon } from '@shared/icons'
import useAutosizeTextArea from './useAutosizeTextArea'
import EmojiPicker from '@components/emoji-picker'

interface PropsIcrementarIdeia {
  user: 'userAutor' | 'user'
  textPlaceholderGestor: string
  textPlaceholderAluno: string
  imgComentario?: string
  limitTexto?: number
  txtError: string
  hasEmoji: boolean
  value?: string
}

export default function IcrementarIdeia(props: PropsIcrementarIdeia) {
  const [activeComentario, setActiveComentario] = useState(false)
  const [textCount, setTextCount] = useState(0)
  const [isError, setIsError] = useState(false)
  const textAreaRef = useRef<HTMLTextAreaElement>(null)
  const [isOpenPicker, setIsOpenPicker] = useState()
  const [stringValueTextArea, setStringValueTextArea] = useState('')

  useAutosizeTextArea(textAreaRef.current, stringValueTextArea)

  const [listaTexto, setListaTexto] = useState('')

  useEffect(() => {
    const txList = listaTexto.split('')
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
  }, [stringValueTextArea, listaTexto])

  const handleChange = (evt: React.ChangeEvent<HTMLTextAreaElement>) => {
    const texto = evt.target?.value
    setStringValueTextArea(texto)
    setListaTexto(texto)
  }

  function onEmojiClick(emojiObject: any) {
    const valueTextarea = document.getElementById('txtTextArea').innerHTML

    if (!valueTextarea || valueTextarea?.length < props.limitTexto) {
      let lastPositionStart = textAreaRef.current.selectionStart
      let lastPositionEnd = textAreaRef.current.selectionEnd
      let newStringWithEmoji = handleStringToIncluedEmoji(
        [lastPositionStart, lastPositionEnd],
        emojiObject.native,
        valueTextarea
      )

      setStringValueTextArea(newStringWithEmoji + '')
      setListaTexto(newStringWithEmoji)
      repositionCursorAfterNewEmojiInTextArea([lastPositionStart, lastPositionEnd], emojiObject?.native?.length)
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
            value={stringValueTextArea}
            onChange={handleChange}
            placeholder={props.user === 'user' ? props.textPlaceholderAluno : props.textPlaceholderGestor}
          />
        </Styles.imagemAndIput>
        {activeComentario && (
          <Styles.containerCountAndEmojis>
            <Styles.valueCount>
              {textCount}/{props.limitTexto ? props.limitTexto : 350}
            </Styles.valueCount>
            <Styles.valueEmoji>
              {props.hasEmoji && (
                <EmojiPicker
                  isOpenPicker={isOpenPicker}
                  setIsOpenPicker={setIsOpenPicker}
                  onEmojiSelect={(emoji) => onEmojiClick(emoji)}
                  configPicker={{
                    title: 'FRST FALCONI',
                    perLine: 10,
                    sheetSize: 8,
                    language: 'pt'
                  }}
                />
              )}
            </Styles.valueEmoji>
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

  function repositionCursorAfterNewEmojiInTextArea(pos, lenghtEmoji) {
    let newPos = 0

    if (pos[0] != pos[1]) {
      // Cursor in multiple chars selected
      newPos = pos[0] + (lenghtEmoji ? lenghtEmoji : 0)
    } else {
      // Cursor text in specific point
      newPos = pos[1] + (lenghtEmoji ? lenghtEmoji : 0)
    }
    textAreaRef.current.setSelectionRange(newPos, newPos)
  }

  function handleStringToIncluedEmoji(pos, emojiObject, stringValueTextArea) {
    let finalString = ''
    if (stringValueTextArea) {
      if (pos[0] == pos[1]) {
        finalString = stringValueTextArea.substr(0, pos[0]) + emojiObject + stringValueTextArea.substr(pos[1])
      } else if (pos[0] < pos[1]) {
        finalString =
          stringValueTextArea.substr(0, pos[0]) +
          emojiObject +
          stringValueTextArea.substr(pos[1], stringValueTextArea.length)
      } else {
        finalString = stringValueTextArea + emojiObject
      }
      return finalString
    } else {
      return emojiObject
    }
  }
}
