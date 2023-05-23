import React,{ useEffect,  useState, useRef }  from 'react'
import '../../shared/global.css'
import { ThemeProvider } from 'styled-components'
import { FRSTTheme } from '../../theme'
import * as Styles from './inputCommentStyles'
import { IInputComment } from './inputComment'

import EmojiPicker from '../emoji-picker'

export default function InputComment({ placeholder, value, onChange, remain, limit, hasEmoji, showCharacterCounter, IDInput, styles, disabled, emojiWindowlanguage }: IInputComment) {
    const [ focus, setFocus ] = useState(false)

    // Emoji Window States
    const refInput = useRef(null)
    
    const [ isOpenPicker, setIsOpenPicker ] = useState();
    
    // TextArea states
    const [ stringValueTextArea, setStringValueTextArea ] = useState(value);
        
    useEffect(() => {
        resizeTextArea(refInput)
        onChange(stringValueTextArea)
    }, [stringValueTextArea]);

    const onEmojiClick = (emojiObject: any) => {
        if(!stringValueTextArea || stringValueTextArea?.length < limit) {
            let lastPositionStart = refInput.current.selectionStart;
            let lastPositionEnd = refInput.current.selectionEnd;
            let newStringWithEmoji = 
                handleStringToIncluedEmoji(
                    [lastPositionStart, lastPositionEnd], 
                    emojiObject.native, 
                    refInput.current.innerHTML
                )
            setStringValueTextArea(newStringWithEmoji+'')
            repositionCursorAfterNewEmojiInTextArea([lastPositionStart, lastPositionEnd],  emojiObject?.native?.length)
        }
    };
    
    return (
        <ThemeProvider theme={FRSTTheme}>
        <div style={{...styles}}>
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
                    <EmojiPicker
                        isOpenPicker={isOpenPicker}
                        setIsOpenPicker={setIsOpenPicker}
                        onEmojiSelect={(emoji) => onEmojiClick(emoji)}
                        configPicker={{
                            title: 'FRST FALCONI',
                            perLine: 10,
                            sheetSize: 8,
                            language: 'pt'
                        }}
                        styles={{}}
                    />
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
            // setHeightPositionWindowEmoji(tx.scrollHeight - 350 + 'px')
        }  

        { refInput.current && refInput.current.style && txResize(refInput.current) }
    }


    function handleStringToIncluedEmoji(pos, emojiObject, stringValueTextArea) {
        let finalString = ''
        if(stringValueTextArea) {
            if(pos[0] == pos[1]) {
                finalString = stringValueTextArea.substr(0, pos[0]) + emojiObject + stringValueTextArea.substr(pos[1])
            } else if(pos[0] < pos[1]) {
                finalString = stringValueTextArea.substr(0, pos[0]) + emojiObject + stringValueTextArea.substr(pos[1], stringValueTextArea.length);
            } else {
                finalString = stringValueTextArea + emojiObject;
            }
            return finalString;
        } else {
            return emojiObject;
        }
    }

    function repositionCursorAfterNewEmojiInTextArea(pos, lenghtEmoji) {     
        let newPos = 0
        console.log('lenghtEmoji ', lenghtEmoji)
        console.log('pos ', pos)
        if(pos[0] != pos[1]) { // Cursor in multiple chars selected
            newPos = pos[0]   + (lenghtEmoji ? lenghtEmoji : 0);
        } else { // Cursor text in specific point
            newPos = pos[1]  + (lenghtEmoji ? lenghtEmoji : 0);
        }
        refInput.current.setSelectionRange(newPos, newPos)
    }
}