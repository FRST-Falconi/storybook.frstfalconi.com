import React,{ useEffect,  useState, useRef }  from 'react'
import '../../shared/global.css'
import { ThemeProvider } from 'styled-components'
import { FRSTTheme } from '../../theme'
import * as Styles from './inputCommentStyles'
import { IInputComment } from './inputComment'
import {useInputHook} from './useInputHook'
import { SmileOutlined } from '@shared/icons'
// import EmojiPicker from '@components/emoji-picker'
import { Mentions } from './mentions'
import { randID } from './inputComment.utils'
import { User } from './types'

export default function InputComment({ placeholder, value, onChange, limit, showCharacterCounter, styles, disabled }: IInputComment) {
    const { handleInput, focus, setFocus, userMentionIds, divInputRef, handleMentionUser, inputSearch, mentionTopPosition, setShowMention, setInputSearch, showMention, textLength } = useInputHook(limit, placeholder, onChange)

debugger
    

    
    
    
    
    
    

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
            { showCharacterCounter &&
                <Styles.HelperText>
                    {textLength}/{limit}
                </Styles.HelperText>
            }
        </div>
        </ThemeProvider>
    )

  

   
   
   
}

