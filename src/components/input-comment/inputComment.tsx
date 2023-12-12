import { ThemeProvider } from 'styled-components'
import { IInputComment, User } from '.'
import '../../shared/global.css'
import { FRSTTheme } from '../../theme'
import * as Styles from './inputCommentStyles'
import { Mentions } from './mentions'
import { useInputHook } from './useInputHook'


export default function InputComment({ placeholder, value, onChange, remain, limit, showCharacterCounter, IDInput, styles, disabled }: IInputComment) {
    const { handleInput, focus, setFocus, userMentionIds, divInputRef, handleMentionUser, inputSearch, mentionTopPosition, setShowMention, setInputSearch, showMention } = useInputHook(placeholder, onChange)

    return (
        <ThemeProvider theme={FRSTTheme}>
            <div style={{ ...styles }} data-mentions={Array.from(userMentionIds)} tabIndex={0}>
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

                        aria-aria-multiline={true}
                        suppressContentEditableWarning={true}
                        data-text="enter"


                    ><p><br /></p></Styles.InputText>
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
                        {limit - remain}/{limit}
                    </Styles.HelperText>
                }
            </div>
        </ThemeProvider>
    )

}
