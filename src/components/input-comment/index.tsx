import { ThemeProvider } from 'styled-components'
import '../../shared/global.css'
import { FRSTTheme } from '../../theme'
import { IInputComment } from './inputComment'
import * as Styles from './inputCommentStyles'
import { useInputHook } from './useInputHook'

// import EmojiPicker from '@components/emoji-picker'


export default function InputComment({ placeholder, value, onChange, remain, limit, hasEmoji, showCharacterCounter, IDInput, styles, disabled, emojiWindowlanguage, divRef, onKeyUp, user, children }: IInputComment) {
    const { handleInput, focus, setFocus, userMentionIds } = useInputHook(user, placeholder, divRef, onChange, onKeyUp)

    return (
        <ThemeProvider theme={FRSTTheme}>
            <div style={{ ...styles }} data-mentions={Array.from(userMentionIds)} tabIndex={0}>
                <Styles.InputWrapper focus={focus} hasChildren={!!children} tabIndex={1}>
                    <Styles.InputText
                        tabIndex={2}
                        contentEditable={true}
                        ref={divRef}
                        onFocus={() => setFocus(true)}
                        onBlur={() => setFocus(false)}
                        onKeyUpCapture={(event) => {
                            handleInput(event)
                        }}
                        aria-aria-multiline={true}
                        suppressContentEditableWarning={true}
                        data-text="enter"


                    ><p><br /></p></Styles.InputText>
                    {children}

                </Styles.InputWrapper>
                {showCharacterCounter &&
                    <Styles.HelperText>
                        {limit - remain}/{limit}
                    </Styles.HelperText>
                }
            </div>
        </ThemeProvider>
    )

}
