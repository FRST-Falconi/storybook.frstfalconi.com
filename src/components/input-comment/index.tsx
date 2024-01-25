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

export default function InputComment({ placeholder, onChange, limit, users, showCharacterCounter, styles, onSendMentions, onContentFormat, onContentUnformat, disabled, className, value, replyMentionedUser, group_uuid, limitMessageExceeded }: IInputComment) {
  const {divPlaceholder, handleInput, isPlaceholder, divInputRef, handleMentionUser, mentionTopPosition, setShowMention, showMention, textLength, styleLimitExceeded } =
    useInputHook({ limit, placeholder, onContentFormat, onContentUnformat, onSendMentions, onChange, value, replyMentionedUser })
  

  return (
    <ThemeProvider theme={FRSTTheme}>
      <div style={{ minHeight:'48px', ...styles }} tabIndex={0} >
        <Styles.InputWrapper  tabIndex={1} isPlaceholder={isPlaceholder} isInputLimit={styleLimitExceeded} >
          <Styles.InputText
            tabIndex={2}
            contentEditable={true}
            ref={divInputRef}
            onKeyUpCapture={(event) => {
              handleInput(event)
            }}

            data-text="enter"
            suppressContentEditableWarning={true}

          ><p><br /></p>
          
          </Styles.InputText>
          <Styles.InputPlaceholder style={{display:'none'}} contentEditable={true} ref={divPlaceholder} >{placeholder}</Styles.InputPlaceholder>
          {showMention && users && users.length > 0 && <Mentions
            users={users}
            top={mentionTopPosition}
            onSelect={(user: User) => {
              setShowMention(false)
              handleMentionUser(user)

            }} />}

        </Styles.InputWrapper>
        <Styles.HelperContainer >
        {!isPlaceholder ?
          <Styles.HelperText  isInputLimit={styleLimitExceeded}>
            {textLength}/{limit}
          </Styles.HelperText>
          :
          <></>
        }
        </Styles.HelperContainer>
        {styleLimitExceeded && (
          <Styles.LimitCharsContainer>
            <TagAlert />
            <Styles.LimitCharsExceededMessage>
              {limitMessageExceeded}
            </Styles.LimitCharsExceededMessage>
          </Styles.LimitCharsContainer>
        )}
        
      </div>
    </ThemeProvider>
  )

}
