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
  const { handleInput, isPlaceholder, focus, divInputRef, handleMentionUser, mentionTopPosition, setShowMention, showMention, textLength, styleLimitExceeded } =
    useInputHook({ limit, placeholder, onContentFormat, onContentUnformat, onSendMentions, onChange, value, replyMentionedUser })
  const showMentions = showMention && ['b1005836-b0a6-4a50-8147-537ebdc64a75','413c2f36-9195-4fef-86fe-572c49049007'].includes(group_uuid)

  return (
    <ThemeProvider theme={FRSTTheme}>
      <div style={{ minHeight:'48px', ...styles }} tabIndex={0}>
        <Styles.InputWrapper focus={focus} tabIndex={1} isPlaceholder={isPlaceholder} isInputLimit={styleLimitExceeded}>
          <Styles.InputText
            tabIndex={2}
            contentEditable={true}
            ref={divInputRef}
            onKeyUpCapture={(event) => {
              handleInput(event)
            }}

            data-text="enter"
            isPlaceholder={isPlaceholder}
            suppressContentEditableWarning={true}

          ><p><br /></p>
          
          </Styles.InputText>
          {showMentions && users && users.length > 0 && <Mentions
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
