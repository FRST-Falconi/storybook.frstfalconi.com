import { useEffect, useState } from 'react'
import { ThemeProvider } from 'styled-components'
import '../../shared/global.css'
import { FRSTTheme } from '../../theme'
import { IInputComment } from './inputComment'
import * as Styles from './inputCommentStyles'
import { useInputHook } from './useInputHook'

// import EmojiPicker from '@components/emoji-picker'

import { randID } from './inputComment.utils'

export default function InputComment({ placeholder, value, onChange, remain, limit, hasEmoji, showCharacterCounter, IDInput, styles, disabled, emojiWindowlanguage, divRef, onKeyUp, user, children }: IInputComment) {
    const { clearDivContent, handleInput, focus, setFocus, userMentionIds } = useInputHook(user, placeholder, divRef, onChange)
    // Emoji Window States
    const [isVisibleEmojiWindow, setIsVisibleEmojiWindow] = useState(false)
    const [actionAreaEmojiButton, setActionAreaEmojiButton] = useState(false)
    const [colorEmojiButton, setColorEmojiButton] = useState('')
    const [heightPositionWindowEmoji, setHeightPositionWindowEmoji] = useState('')
    const [newEmojiIncluded, setNewEmojiIncluded] = useState(false)
    const [lastPositionCursorTextTextArea, setLastPositionCursorTextTextArea] = useState({})
    const [lenghtLastEmoji, setLenghtLastEmoji] = useState()

    // TextArea states
    const [stringValueTextArea, setStringValueTextArea] = useState(value)

    // IDs
    const [iDInputComment, setIDInputComment] =
        useState(IDInput ? IDInput : `InputComment-${randID()}`);
    const [iDEmojiButton, setIDEmojiButton] =
        useState(IDInput ? IDInput : `IDEmojiButton-${randID()}`);

    // Emoji window actions
    useEffect(() => {
        (isVisibleEmojiWindow) ? configsWhenOpenWindowEmoji() : configsWhenCloseWindowEmoji()
    }, [isVisibleEmojiWindow])

    useEffect(() => {
        { newEmojiIncluded && repositionCursorAfterNewEmojiInTextArea() }
        resizeTextArea()
    }, [stringValueTextArea]);

    useEffect(() => {
        setStringValueTextArea(value)
    }, [value]);

    const onEmojiClick = (emojiObject: any) => {
        let textAreaRef = document.getElementById(iDInputComment)

        // @ts-ignore
        if (textAreaRef.innerHTML.length < limit || textAreaRef.selectionStart != textAreaRef.selectionEnd) {
            let currentPositonCursorTextArea = getAndSavePositionsInTextArea(textAreaRef, emojiObject.native)
            let newStringWithEmoji = handleStringToIncluedEmoji(currentPositonCursorTextArea, emojiObject.native, textAreaRef.innerHTML)

            setNewEmojiIncluded(true)
            setStringValueTextArea(newStringWithEmoji)
        }
    };

    const verifyClick = () => {
        if (!actionAreaEmojiButton)
            setIsVisibleEmojiWindow(false);
    }

    return (
        <ThemeProvider theme={FRSTTheme}>
            <div style={{ ...styles }} onClick={verifyClick} data-mentions={Array.from(userMentionIds)} tabIndex={0}>
                <Styles.InputWrapper focus={focus} hasChildren={!!children} tabIndex={1}>
                    <Styles.InputText
                        tabIndex={2}
                        contentEditable={true}
                        ref={divRef}
                        id={iDInputComment}
                        onFocus={() => setFocus(true)}
                        onBlur={() => setFocus(false)}
                        placeholder={placeholder}
                        onKeyUpCapture={(event) => {
                            handleInput
                            onKeyUp(event);
                            setFocus(true);
                            clearDivContent();
                        }}
                        aria-aria-multiline={true}
                        onInput={handleInput}
                        data-text="enter"


                    />
                    {children}
                    {/* { hasEmoji && 
                    <>
                        <Styles.EmojiWindow 
                            visible={isVisibleEmojiWindow} 
                            positionEmojiWindow={heightPositionWindowEmoji}
                            onMouseOver={() => setActionAreaEmojiButton(true)}
                            onMouseOut={() => setActionAreaEmojiButton(false)}
                        >                            
                            <EmojiPicker 
                                language={emojiWindowlanguage} 
                                onEmojiSelect={onEmojiClick}
                                emojiPerLine={8}
                                sheetSize={8}
                            />
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
                } */}
                </Styles.InputWrapper>
                {showCharacterCounter &&
                    <Styles.HelperText>
                        {limit - remain}/{limit}
                    </Styles.HelperText>
                }
            </div>
        </ThemeProvider>
    )

    function resizeTextArea() {
        let tx = document.getElementById(iDInputComment);

        const txResize = (tx) => {
            tx.style.height = '20px';
            tx.style.height = tx.scrollHeight + 'px';
            setHeightPositionWindowEmoji(tx.scrollHeight - 440 + 'px')
        }

        { tx && tx.style && txResize(tx) }
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

    function getAndSavePositionsInTextArea(textAreaRef: any, emoji: any) {
        let positionsCursorText = [textAreaRef.selectionStart, textAreaRef.selectionEnd];

        setLenghtLastEmoji(emoji.length);
        setLastPositionCursorTextTextArea(positionsCursorText);
        return positionsCursorText;
    }

    function handleStringToIncluedEmoji(pos, emojiObject, stringValueTextArea) {
        if (stringValueTextArea) {
            if (pos[0] == pos[1]) {
                return stringValueTextArea.substr(0, pos[0]) + emojiObject + stringValueTextArea.substr(pos[1])
            } else if (pos[0] < pos[1]) {
                return stringValueTextArea.substr(0, pos[0]) + emojiObject + stringValueTextArea.substr(pos[1], stringValueTextArea.length);
            } else {
                return stringValueTextArea + emojiObject;
            }
        } else {
            return emojiObject;
        }
    }

    function repositionCursorAfterNewEmojiInTextArea() {
        let tx = document.getElementById(iDInputComment);

        if (lastPositionCursorTextTextArea[1] != lastPositionCursorTextTextArea[0]) { // Cursor in multiple chars selected
            // @ts-ignore
            tx.selectionEnd = lastPositionCursorTextTextArea[0] + lenghtLastEmoji;
        } else { // Cursor text in specific point
            // @ts-ignore
            tx.selectionEnd = lastPositionCursorTextTextArea[1] + lenghtLastEmoji;
        }
        setNewEmojiIncluded(false);
    }
}
