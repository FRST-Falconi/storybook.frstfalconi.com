import React,{ useEffect,  useState, useRef }  from 'react'
import '../../shared/global.css'
import { ThemeProvider } from 'styled-components'
import { FRSTTheme } from '../../theme'
import * as Styles from './inputCommentStyles'
import { IInputComment } from './inputComment'

import { SmileOutlined } from '@shared/icons'
import EmojiPicker from '@components/emoji-picker'

import { randID } from './inputComment.utils'

export default function InputComment({ placeholder, value, onChange, remain, limit, hasEmoji, showCharacterCounter, IDInput, styles, disabled, emojiWindowlanguage }: IInputComment) {
    const [ focus, setFocus ] = useState(false)

    // Emoji Window States
    const [ isVisibleEmojiWindow, setIsVisibleEmojiWindow ] = useState(false);
    const [ actionAreaEmojiButton, setActionAreaEmojiButton] = useState(false);
    const [ colorEmojiButton, setColorEmojiButton ] = useState('');
    const [ heightPositionWindowEmoji, setHeightPositionWindowEmoji ] = useState('');
    const [ newEmojiIncluded, setNewEmojiIncluded ] = useState(false);
    const [ lenghtLastEmoji, setLenghtLastEmoji ] = useState();
    const refInput = useRef(null)

    // TextArea states
    const [ stringValueTextArea, setStringValueTextArea ] = useState(value);
    const [ lastPositionCursor, setLastPositionCursor ] = useState([0,0])
    
    // Emoji window actions
    useEffect(() => {
        (isVisibleEmojiWindow) ? configsWhenOpenWindowEmoji() : configsWhenCloseWindowEmoji()
    }, [isVisibleEmojiWindow])
    
    useEffect(() => {
        {newEmojiIncluded && repositionCursorAfterNewEmojiInTextArea()}
        resizeTextArea(refInput)
    }, [stringValueTextArea]);

    useEffect(() => {
        onChange(stringValueTextArea)
    }, [stringValueTextArea]);
    
    const onEmojiClick = (emojiObject: any) => {
        setLenghtLastEmoji(emojiObject.native.length)
        if(refInput.current.innerHTML.length < limit || refInput.current.selectionStart != refInput.current.selectionEnd) {            
            let newStringWithEmoji = 
                handleStringToIncluedEmoji(
                    [refInput.current.selectionStart, refInput.current.selectionEnd], 
                    emojiObject.native, 
                    refInput.current.innerHTML
                )
            setNewEmojiIncluded(true)
            setStringValueTextArea(newStringWithEmoji)
        }
    };
    
    const verifyClick = () => {
        if(!actionAreaEmojiButton)
            setIsVisibleEmojiWindow(false);
    }

    return (
        <ThemeProvider theme={FRSTTheme}>
        <div style={{...styles}} onClick={verifyClick}>
            <Styles.InputWrapper focus={focus}>
                <Styles.InputText
                    ref={refInput}
                    onFocus={() => setFocus(true)}
                    onBlur={() => {
                        setFocus(false)
                    }}
                    onChange={(e) => setStringValueTextArea(e.target.value)}
                    value={stringValueTextArea}
                    placeholder={placeholder}
                    maxLength={limit}
                    disabled={disabled}
                />
                { hasEmoji && 
                    <div style={{position: 'relative'}}>
                        <Styles.EmojiWindow 
                            visible={isVisibleEmojiWindow} 
                            positionEmojiWindow={heightPositionWindowEmoji}
                            onMouseOver={() => setActionAreaEmojiButton(true)}
                            onMouseOut={() => setActionAreaEmojiButton(false)}
                        >
                            <EmojiPicker 
                                language={emojiWindowlanguage} 
                                onEmojiSelect={(e) => onEmojiClick(e)}
                                emojiPerLine={10}
                                sheetSize={8}
                            />
                        </Styles.EmojiWindow>
                        <Styles.SmileIcon 
                            onMouseOver={() => setActionAreaEmojiButton(true)}
                            onMouseOut={() => setActionAreaEmojiButton(false)}
                            onClick={() => {
                                setIsVisibleEmojiWindow(!isVisibleEmojiWindow)
                            }}
                        >
                            <SmileOutlined fill={colorEmojiButton}/>
                        </Styles.SmileIcon>
                    </div>
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

    function resizeTextArea(refInput) {

        const txResize = (tx) => {   
            tx.style.height = '20px';
            tx.style.height = tx.scrollHeight + 'px';
            setHeightPositionWindowEmoji(tx.scrollHeight - 350 + 'px')
        }  

        { refInput.current && refInput.current.style && txResize(refInput.current) }
    }

    function configsWhenOpenWindowEmoji() {
        setColorEmojiButton(FRSTTheme['colors'].primary1);
        // document.body.addEventListener("click", (e: any) => verifyClick(), true);
        // document.getElementById(iDEmojiButton).removeEventListener("click", (e: any) => setIsVisibleEmojiWindow(!isVisibleEmojiWindow), false);
    }
    
    function configsWhenCloseWindowEmoji() {
        setColorEmojiButton(FRSTTheme['colors'].neutralsGrey2);
        // document.body.removeEventListener("click", (e: any) => verifyClick(), true);
        // document.getElementById(iDEmojiButton).addEventListener("click", (e: any) => setIsVisibleEmojiWindow(!isVisibleEmojiWindow), false);
    }

    function handleStringToIncluedEmoji(pos, emojiObject, stringValueTextArea) {
        setLastPositionCursor(pos)
        console.log('\ndebug - emoji ', emojiObject)
        console.log('debug - str ',  stringValueTextArea)
        console.log('debug - strleng ',  stringValueTextArea.lenght)
        console.log('debug - pos ', pos)
        if(stringValueTextArea) {
            if(pos[0] == pos[1]) {
                console.log('debug - case 1 ')
                console.log('debug - rtxn ', stringValueTextArea.substr(0, pos[0]) + emojiObject + stringValueTextArea.substr(pos[1]))
                return stringValueTextArea.substr(0, pos[0]) + emojiObject + stringValueTextArea.substr(pos[1], stringValueTextArea.lenght)
            } else if(pos[0] < pos[1]) {
                console.log('debug - case 2 ')
                console.log('debug - rtxn ', stringValueTextArea.substr(0, pos[0]) + emojiObject + stringValueTextArea.substr(pos[1], stringValueTextArea.length))
                return stringValueTextArea.substr(0, pos[0]) + emojiObject + stringValueTextArea.substr(pos[1], stringValueTextArea.length);
            } else {
                console.log('debug - case 3 ')
                console.log('debug - rtxn ', stringValueTextArea + emojiObject)
                return stringValueTextArea + emojiObject;
            }
        } else {
            return emojiObject;
        }
    }

    function repositionCursorAfterNewEmojiInTextArea() {     
        let newPos = 0
        console.log('debug - las ', lastPositionCursor)
        if(lastPositionCursor[0] != lastPositionCursor[1]) { // Cursor in multiple chars selected
            newPos = lastPositionCursor[0]   + (lenghtLastEmoji ? lenghtLastEmoji : 0);
        } else { // Cursor text in specific point
            newPos = lastPositionCursor[1]  + (lenghtLastEmoji ? lenghtLastEmoji : 0);
        }
        console.log('debug - newPos ', newPos)
        refInput.current.setSelectionRange(newPos, newPos)
        setNewEmojiIncluded(false);
    }
}