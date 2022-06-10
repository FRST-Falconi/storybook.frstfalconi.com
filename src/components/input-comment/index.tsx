import React,{ useEffect, useLayoutEffect,  useState }  from 'react'
import '../../shared/global.css'
import { ThemeProvider } from 'styled-components'
import { FRSTTheme } from '../../theme'
import * as Styles from './inputCommentStyles'
import { IInputComment } from './inputComment'

import { SmileOutlined } from '@shared/icons'

import { randID } from './inputComment.utils'

export default function InputComment({ placeholder, value, onChange, remain, limit, hasEmoji, showCharacterCounter, IDInput, styles, disabled }: IInputComment) {
    const [ focus, setFocus ] = useState(false)
    const [ isVisibleEmojiWindow, setIsVisibleEmojiWindow ] = useState(false);
    const [ actionAreaEmojiButton, setActionAreaEmojiButton] = useState(false);
    const [ colorEmojiButton, setColorEmojiButton ] = useState('');

    const [ heightTextArea, setHeightTextArea ] = useState('')
    const [ forceResetHeightTextArea, setForceResetHeightTextArea] = useState(0)

    
    const [ heightPositionWindowEmoji, setHeightPositionWindowEmoji ] = useState('')

    const [ iDInputComment , setIDInputComment ] = 
            useState(IDInput ? IDInput : `InputComment-${randID()}`);
    const [ iDEmojiButton , setIDEmojiButton ] = 
        useState(IDInput ? IDInput : `IDEmojiButton-${randID()}`);

    useEffect(() => {
        let tx = document.getElementById(iDInputComment)
        setHeightTextArea(tx.scrollHeight + 'px')
        setHeightPositionWindowEmoji(tx.scrollHeight - 260 + 'px')
    }, [forceResetHeightTextArea])

    useLayoutEffect(() => {
        (isVisibleEmojiWindow) ? openWindowEmoji() : closeWindowEmoji();
        
        function openWindowEmoji() {
            setColorEmojiButton(FRSTTheme['colors'].primary1);
            // document.body.addEventListener("click", (e: any) => verifyClick(), true);
            // document.getElementById(iDEmojiButton).removeEventListener("click", (e: any) => setIsVisibleEmojiWindow(!isVisibleEmojiWindow), false);
        }
        function closeWindowEmoji() {
            setColorEmojiButton(FRSTTheme['colors'].neutralsGrey2);
            // document.body.removeEventListener("click", (e: any) => verifyClick(), true);
            // document.getElementById(iDEmojiButton).addEventListener("click", (e: any) => setIsVisibleEmojiWindow(!isVisibleEmojiWindow), false);
        }
    }, [isVisibleEmojiWindow]);
    
    const verifyClick = () => {
        if(!actionAreaEmojiButton) {
            setIsVisibleEmojiWindow(false);
        }
    }

    function inputInChanging(e: any) {
        setHeightTextArea('20px')
        setForceResetHeightTextArea(Math.random())
        onChange(e);
    }

    return (
        <ThemeProvider theme={FRSTTheme}>
        <div style={{...styles}} onClick={verifyClick}>
            <Styles.InputWrapper focus={focus}>
                <Styles.InputText
                    id={iDInputComment}
                    height= {heightTextArea}
                    onFocus={() => setFocus(true)}
                    onBlur={() => setFocus(false)}
                    onChange={inputInChanging}
                    value={value}
                    placeholder={placeholder}
                    maxLength={limit}
                    disabled={disabled}
                />
                { hasEmoji && 
                    < >
                        <Styles.EmojiWindow 
                        visible={isVisibleEmojiWindow} 
                        heightTextArea={heightPositionWindowEmoji}
                        onMouseOver={() => setActionAreaEmojiButton(true)}
                        onMouseOut={() => setActionAreaEmojiButton(false)}>
                            ...
                        </Styles.EmojiWindow>
                        <Styles.SmileIcon 
                            id={iDEmojiButton}
                            onMouseOver={() => setActionAreaEmojiButton(true)}
                            onMouseOut={() => setActionAreaEmojiButton(false)}
                            onClick={() => setIsVisibleEmojiWindow(!isVisibleEmojiWindow)}
                        >
                            <SmileOutlined fill={colorEmojiButton}/>
                        </Styles.SmileIcon>
                    </>
                }
            </Styles.InputWrapper>
            { showCharacterCounter &&
                <Styles.HelperText>
                    {limit - remain}/{limit}
                </Styles.HelperText>
            }
        </div>
        </ThemeProvider>
    )
}