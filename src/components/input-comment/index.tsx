import { ThemeProvider } from 'styled-components'
import '../../shared/global.css'
import { FRSTTheme } from '../../theme'
import { IInputComment } from './inputComment'
import * as Styles from './inputCommentStyles'
import { useInputHook } from './useInputHook'
// import EmojiPicker from '@components/emoji-picker'
import { Mentions } from './mentions'
import { User } from './types'

export default function InputComment({ placeholder, value, onChange, limit, showCharacterCounter, styles, disabled, className }: IInputComment) {
  const { handleInput, focus, setFocus, userMentionIds, divInputRef, handleMentionUser, inputSearch, mentionTopPosition, setShowMention, setInputSearch, showMention, textLength } = useInputHook(limit, placeholder, onChange)

  return (
    <ThemeProvider theme={FRSTTheme}>
      <div style={{ ...styles }} tabIndex={0}>
        <Styles.InputWrapper focus={focus} tabIndex={1}>
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


          ><p><br /></p>
          </Styles.InputText>
          {showMention && <Mentions
            inputSearch={inputSearch}
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

