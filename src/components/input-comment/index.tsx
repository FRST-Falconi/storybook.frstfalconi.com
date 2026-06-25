import { ThemeProvider } from 'styled-components'
import '../../shared/global.css'
import { FRSTTheme } from '../../theme'
import * as Styles from './inputCommentStyles'
import { IInputComment } from './types'
import { useInputHook } from './useInputHook'
import { TagAlert } from '../../../public/customIcons/TagAlert'
import { Mentions } from './mentions'
import { User } from './types'
import EmojiPicker, { EmojiClickData, Theme } from 'emoji-picker-react'
import { IconButton } from '@mui/material'
import { useState } from 'react'

function EmojiIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <mask id="path-1-inside-1_2339_11367" fill="white">
        <path fillRule="evenodd" clipRule="evenodd" d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM16.8474 14.9845C16.2991 16.7176 14.3368 18 12 18C9.66322 18 7.70085 16.7176 7.15257 14.9845C6.98599 14.4579 7.44772 14 8 14H16C16.5523 14 17.014 14.4579 16.8474 14.9845ZM15.75 9.8125C15.75 11.0206 15.75 12 14.8125 12C13.875 12 13.875 11.0206 13.875 9.8125C13.875 8.60438 13.875 7.625 14.8125 7.625C15.75 7.625 15.75 8.60438 15.75 9.8125ZM9.1875 12C10.125 12 10.125 11.0206 10.125 9.8125C10.125 8.60438 10.125 7.625 9.1875 7.625C8.25 7.625 8.25 8.60438 8.25 9.8125C8.25 11.0206 8.25 12 9.1875 12Z"/>
      </mask>
      <path fillRule="evenodd" clipRule="evenodd" d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM16.8474 14.9845C16.2991 16.7176 14.3368 18 12 18C9.66322 18 7.70085 16.7176 7.15257 14.9845C6.98599 14.4579 7.44772 14 8 14H16C16.5523 14 17.014 14.4579 16.8474 14.9845ZM15.75 9.8125C15.75 11.0206 15.75 12 14.8125 12C13.875 12 13.875 11.0206 13.875 9.8125C13.875 8.60438 13.875 7.625 14.8125 7.625C15.75 7.625 15.75 8.60438 15.75 9.8125ZM9.1875 12C10.125 12 10.125 11.0206 10.125 9.8125C10.125 8.60438 10.125 7.625 9.1875 7.625C8.25 7.625 8.25 8.60438 8.25 9.8125C8.25 11.0206 8.25 12 9.1875 12Z" fill="#BDBDBD"/>
      <path d="M16.8474 14.9845L17.9915 15.3464L16.8474 14.9845ZM7.15257 14.9845L8.29668 14.6225L7.15257 14.9845ZM22 12H20.8C20.8 16.8601 16.8601 20.8 12 20.8V22V23.2C18.1856 23.2 23.2 18.1856 23.2 12H22ZM12 2V3.2C16.8601 3.2 20.8 7.13989 20.8 12H22H23.2C23.2 5.81441 18.1856 0.8 12 0.8V2ZM2 12H3.2C3.2 7.13989 7.13989 3.2 12 3.2V2V0.8C5.81441 0.8 0.8 5.81441 0.8 12H2ZM12 22V20.8C7.13989 20.8 3.2 16.8601 3.2 12H2H0.8C0.8 18.1856 5.81441 23.2 12 23.2V22ZM12 18V19.2C14.7165 19.2 17.246 17.703 17.9915 15.3464L16.8474 14.9845L15.7033 14.6225C15.3523 15.7321 13.9571 16.8 12 16.8V18ZM7.15257 14.9845L6.00846 15.3464C6.75399 17.703 9.28353 19.2 12 19.2V18V16.8C10.0429 16.8 8.64771 15.7321 8.29668 14.6225L7.15257 14.9845ZM8 14V12.8C7.40113 12.8 6.81957 13.046 6.41813 13.4883C5.99732 13.9519 5.78348 14.6353 6.00846 15.3464L7.15257 14.9845L8.29668 14.6225C8.32033 14.6973 8.32712 14.7933 8.30296 14.8925C8.27988 14.9873 8.23568 15.0568 8.19529 15.1013C8.12114 15.183 8.04658 15.2 8 15.2V14ZM16 14V12.8H8V14V15.2H16V14ZM16.8474 14.9845L17.9915 15.3464C18.2165 14.6353 18.0027 13.9519 17.5819 13.4883C17.1804 13.046 16.5989 12.8 16 12.8V14V15.2C15.9534 15.2 15.8789 15.183 15.8047 15.1013C15.7643 15.0568 15.7201 14.9873 15.697 14.8925C15.6729 14.7933 15.6797 14.6973 15.7033 14.6225L16.8474 14.9845ZM14.8125 12V13.2C15.2663 13.2 15.7345 13.076 16.1261 12.7471C16.4999 12.4332 16.6853 12.0316 16.7835 11.6999C16.9615 11.0986 16.95 10.3466 16.95 9.8125H15.75H14.55C14.55 10.1229 14.5496 10.3752 14.5372 10.5969C14.5246 10.8228 14.5021 10.9515 14.4822 11.0187C14.4632 11.0828 14.4727 11.0016 14.5829 10.9091C14.7109 10.8016 14.8274 10.8 14.8125 10.8V12ZM13.875 9.8125H12.675C12.675 10.3466 12.6635 11.0986 12.8415 11.6999C12.9397 12.0316 13.1251 12.4332 13.4989 12.7471C13.8905 13.076 14.3587 13.2 14.8125 13.2V12V10.8C14.7976 10.8 14.9141 10.8016 15.0421 10.9091C15.1523 11.0016 15.1618 11.0828 15.1428 11.0187C15.1229 10.9515 15.1004 10.8228 15.0878 10.5969C15.0754 10.3752 15.075 10.1229 15.075 9.8125H13.875ZM14.8125 7.625V6.425C14.3587 6.425 13.8905 6.54904 13.4989 6.87789C13.1251 7.19177 12.9397 7.59337 12.8415 7.92508C12.6635 8.52636 12.675 9.27835 12.675 9.8125H13.875H15.075C15.075 9.50214 15.0754 9.24985 15.0878 9.02809C15.1004 8.80222 15.1229 8.6735 15.1428 8.60633C15.1618 8.54218 15.1523 8.62343 15.0421 8.71592C14.9141 8.82338 14.7976 8.825 14.8125 8.825V7.625ZM15.75 9.8125H16.95C16.95 9.27835 16.9615 8.52636 16.7835 7.92508C16.6853 7.59337 16.4999 7.19177 16.1261 6.87789C15.7345 6.54904 15.2663 6.425 14.8125 6.425V7.625V8.825C14.8274 8.825 14.7109 8.82338 14.5829 8.71592C14.4727 8.62343 14.4632 8.54218 14.4822 8.60633C14.5021 8.6735 14.5246 8.80222 14.5372 9.02809C14.5496 9.24985 14.55 9.50214 14.55 9.8125H15.75ZM10.125 9.8125H8.925C8.925 10.1229 8.92464 10.3752 8.91223 10.5969C8.89958 10.8228 8.87706 10.9515 8.85717 11.0187C8.83818 11.0828 8.84771 11.0016 8.95786 10.9091C9.08585 10.8016 9.20243 10.8 9.1875 10.8V12V13.2C9.64132 13.2 10.1095 13.076 10.5011 12.7471C10.8749 12.4332 11.0603 12.0316 11.1585 11.6999C11.3365 11.0986 11.325 10.3466 11.325 9.8125H10.125ZM9.1875 7.625V8.825C9.20243 8.825 9.08585 8.82338 8.95786 8.71592C8.84771 8.62343 8.83818 8.54218 8.85717 8.60633C8.87706 8.6735 8.89958 8.80222 8.91223 9.02809C8.92464 9.24985 8.925 9.50214 8.925 9.8125H10.125H11.325C11.325 9.27835 11.3365 8.52636 11.1585 7.92508C11.0603 7.59337 10.8749 7.19177 10.5011 6.87789C10.1095 6.54904 9.64132 6.425 9.1875 6.425V7.625ZM8.25 9.8125H9.45C9.45 9.50214 9.45036 9.24985 9.46277 9.02809C9.47542 8.80222 9.49794 8.6735 9.51783 8.60633C9.53682 8.54218 9.52729 8.62343 9.41714 8.71592C9.28915 8.82338 9.17257 8.825 9.1875 8.825V7.625V6.425C8.73368 6.425 8.26554 6.54904 7.87388 6.87789C7.50005 7.19177 7.31474 7.59337 7.21655 7.92508C7.03855 8.52636 7.05 9.27835 7.05 9.8125H8.25ZM9.1875 12V10.8C9.17257 10.8 9.28915 10.8016 9.41714 10.9091C9.52729 11.0016 9.53682 11.0828 9.51783 11.0187C9.49794 10.9515 9.47542 10.8228 9.46277 10.5969C9.45036 10.3752 9.45 10.1229 9.45 9.8125H8.25H7.05C7.05 10.3466 7.03855 11.0986 7.21655 11.6999C7.31474 12.0316 7.50005 12.4332 7.87388 12.7471C8.26554 13.076 8.73368 13.2 9.1875 13.2V12Z" fill="#BDBDBD" mask="url(#path-1-inside-1_2339_11367)"/>
    </svg>
  )
}

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
  initialText,
  darkMode,
  showEmojiPicker,
  configColor
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
    styleLimitExceeded,
    handleEmojiSelected,
    showPicker,
    setShowPicker
  } = useInputHook({
    limit,
    placeholder,
    onContentFormat,
    onContentUnformat,
    onSendMentions,
    onChange,
    value,
    replyMentionedUser,
    initialText,
    configColor
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
          darkMode={darkMode}
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
            darkMode={darkMode}
            $primaryColor={configColor}
          >
          </Styles.InputText>
          <Styles.InputPlaceholder style={{ display: 'none' }} contentEditable={true} ref={divPlaceholder} suppressContentEditableWarning={true}>
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
              darkMode={darkMode}
              configColor={configColor}
            />
          )}
        </Styles.InputWrapper>
        <Styles.HelperContainer>
          {!isPlaceholder && showCharacterCounter && (
            <Styles.HelperText isInputLimit={styleLimitExceeded} darkMode={darkMode}>
              {textLength}/{limit}
            </Styles.HelperText>
          )}
          {!isPlaceholder && showEmojiPicker &&
            <Styles.EmojiWrapper>
              <IconButton onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setShowPicker(!showPicker);
              }}>
                <EmojiIcon />
              </IconButton>
            </Styles.EmojiWrapper>
          }
          {!isPlaceholder && showEmojiPicker &&
            <div onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
            }}>
              <EmojiPicker 
                theme={darkMode ? Theme.DARK : Theme.LIGHT}
                autoFocusSearch
                onEmojiClick={(emojiData, event) => {
                  event.preventDefault();
                  event.stopPropagation();
                  handleEmojiSelected(emojiData, event);
                }}
                open={showPicker}
                skinTonesDisabled
                style={{position: 'absolute', right: 0}}
              />
            </div>
          }
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
