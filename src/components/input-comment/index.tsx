import { ThemeProvider } from 'styled-components'
import '../../shared/global.css'
import { FRSTTheme } from '../../theme'
import * as Styles from './inputCommentStyles'
import { IInputComment } from './types'
import { useInputHook } from './useInputHook'
// import EmojiPicker from '@components/emoji-picker'
import { TagAlert } from '../../../public/customIcons/TagAlert'
import { Mentions } from './mentions'
import { User } from './types'

export default function InputComment({
  placeholder,
  onChange,
  limit,
  users,
  showCharacterCounter,
  styles,
  onSendMentions,
  onContentFormat,
  onContentUnformat,
  disabled,
  className,
  value,
  replyMentionedUser,
  group_uuid,
  limitMessageExceeded,
  initialText
}: IInputComment) {
  const {
    divPlaceholder,
    handleInput,
    isPlaceholder,
    divInputRef,
    handleMentionUser,
    mentionTopPosition,
    setShowMention,
    showMention,
    textLength,
    styleLimitExceeded
  } = useInputHook({
    limit,
    placeholder,
    onContentFormat,
    onContentUnformat,
    onSendMentions,
    onChange,
    value,
    replyMentionedUser,
    initialText
  })
  const handlePaste = (e) => {
    const clipboardData = e.clipboardData || window.Clipboard
    if (!clipboardData) return

    const text = clipboardData.getData('text/plain')
    if (!text) return

    const formattedText = removeFormatting(text)
    const selection = window.getSelection()
    if (!selection.rangeCount) return

    const range = selection.getRangeAt(0)
    range.deleteContents()
    range.insertNode(document.createTextNode(formattedText))
    range.collapse(false)

    e.preventDefault()
  }

  const removeFormatting = (text) => {
    return text?.replace(/<[^>]*>/g, '')
  }

  return (
    <ThemeProvider theme={FRSTTheme}>
      <div style={{ minHeight: '48px', ...styles }} tabIndex={0} onMouseDown={() => divPlaceholder.current.focus()}>
        <Styles.InputWrapper
          tabIndex={1}
          isPlaceholder={isPlaceholder}
          isInputLimit={styleLimitExceeded}
          onMouseDown={() => divPlaceholder.current.focus()}
        >
          <Styles.InputText
            id="input-comment-component"
            tabIndex={2}
            contentEditable={true}
            ref={divInputRef}
            onKeyUpCapture={(event) => {
              handleInput(event)
            }}
            data-text="enter"
            suppressContentEditableWarning={true}
            onPaste={handlePaste}
          >
            <p>
              <br />
            </p>
          </Styles.InputText>
          <Styles.InputPlaceholder style={{ display: 'none' }} contentEditable={true} ref={divPlaceholder}>
            {placeholder}
          </Styles.InputPlaceholder>
          {showMention && users && users.length > 0 && (
            <Mentions
              users={users}
              top={mentionTopPosition}
              onSelect={(user: User) => {
                setShowMention(false)
                handleMentionUser(user)
              }}
            />
          )}
        </Styles.InputWrapper>
        <Styles.HelperContainer>
          {!isPlaceholder && showCharacterCounter && (
            <Styles.HelperText isInputLimit={styleLimitExceeded}>
              {textLength}/{limit}
            </Styles.HelperText>
          )}
        </Styles.HelperContainer>
        {styleLimitExceeded && (
          <Styles.LimitCharsContainer>
            <TagAlert />
            <Styles.LimitCharsExceededMessage>{limitMessageExceeded}</Styles.LimitCharsExceededMessage>
          </Styles.LimitCharsContainer>
        )}
      </div>
    </ThemeProvider>
  )
}
