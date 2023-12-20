import { ThemeProvider } from 'styled-components'
import '../../shared/global.css'
import { FRSTTheme } from '../../theme'
import * as Styles from './inputCommentStyles'
import { IInputComment } from './types'
import { useInputHook } from './useInputHook'
// import EmojiPicker from '@components/emoji-picker'
import { Mentions } from './mentions'
import { User } from './types'

export default function InputComment({ placeholder, onChange, limit, users, showCharacterCounter, styles, onSendMentions, onContentFormat, onContentUnformat, disabled, className }: IInputComment) {
  const { handleInput, isPlaceholder, focus, setFocus, divInputRef, handleMentionUser, inputSearch, mentionTopPosition, setShowMention, showMention, textLength } =
    useInputHook({ limit, placeholder, onContentFormat, onContentUnformat, onSendMentions, onChange })

  return (
    <ThemeProvider theme={FRSTTheme}>
      <div style={{ ...styles }} tabIndex={0}>
        <Styles.InputWrapper focus={focus} tabIndex={1} isPlaceholder={isPlaceholder}>
          <Styles.InputText
            tabIndex={2}
            contentEditable={true}
            ref={divInputRef}
            onFocus={() => setFocus(true)}
            onBlur={() => setFocus(false)}
            onKeyUpCapture={(event) => {
              handleInput(event)
            }}

            data-text="enter"
            isPlaceholder={isPlaceholder}
            suppressContentEditableWarning={true}

          ><p><br /></p>
          </Styles.InputText>
          {showMention && <Mentions
            users={users}
            top={mentionTopPosition}
            onSelect={(user: User) => {
              setShowMention(false)
              handleMentionUser(user)

            }} />}

        </Styles.InputWrapper>
        {showCharacterCounter &&
          <Styles.HelperText>
            {textLength}/{limit}
          </Styles.HelperText>
        }
      </div>
    </ThemeProvider>
  )

}

