import React,{ useEffect,  useState, useRef }  from 'react'
import '../../../shared/global.css'
import { ThemeProvider } from 'styled-components'
import { FRSTTheme } from '../../../theme'
import * as Styles from './inputCommentPost-ItStyles'
import { IInputComment } from './inputCommentPost-it'

import Avatar from '@components/avatar'

import EmojiPicker from '../../emoji-picker'
import { recalcRemain } from './inputCommentPost-It.utils'
import { AlertCicle } from '@shared/icons'
import MiniButton from '@components/mini-button'

export default function InputCommentPostIt({ 
    placeholder, 
    avatar, 
    value, 
    onChange, 
    limit, 
    hasEmoji, 
    labels,
    styles, 
    disabled,
    onClickPublish
 }: IInputComment) {

    const [ focus, setFocus ] = useState(false);
    const [ isActiveEdit, setIsActiveEdit ] = useState(false);
    const [ isErrorManyChars, setErrorManyChars ] = useState(false);
    const [ isAllowPusblish, setIsAllowPublish ] = useState(false)

    const refInput = useRef(null)    
    const [ isOpenPicker, setIsOpenPicker ] = useState(false);

    const [ stringValueTextArea, setStringValueTextArea ] = useState(value || '');
    const [ isChangedInput, setIsChangedInput ] = useState(false);

    const [ remain, setRemain ] = useState(0);

    useEffect(() => {
        resizeTextArea(refInput)
        onChange(stringValueTextArea)

        if(stringValueTextArea?.length > 0) setIsChangedInput(true)

        let newRemain = recalcRemain(stringValueTextArea, limit)
        setRemain(newRemain)
        setErrorManyChars(newRemain < 0)

        setIsAllowPublish(stringValueTextArea?.length > 0)
    }, [stringValueTextArea]);


    const onEmojiClick = (emojiObject: any) => {
        setIsOpenPicker(false)

        let lastPositionStart = refInput.current.selectionStart;
        let lastPositionEnd = refInput.current.selectionEnd;
        let newStringWithEmoji = 
            handleStringToIncluedEmoji(
                [lastPositionStart, lastPositionEnd], 
                emojiObject.native, 
                refInput.current.innerHTML
            )

        let remainPosInsertEmoji = (newStringWithEmoji?.length + emojiObject?.native?.length)
        if(remainPosInsertEmoji <= limit) {
            setStringValueTextArea(newStringWithEmoji+'')
            repositionCursorAfterNewEmojiInTextArea([lastPositionStart, lastPositionEnd],  emojiObject?.native?.length)
        }

    };

    const onClickCancel = () => {
        setStringValueTextArea('')
        onChange('')
        setErrorManyChars(false)
        setIsActiveEdit(false)
    }

    return (
        <ThemeProvider theme={FRSTTheme}>
        <div style={{...styles}}>
            <Styles.InputWrapper 
                active={isActiveEdit} 
                isOnEditing={isChangedInput} 
                isError={isErrorManyChars}
            >
                {!isActiveEdit && 
                    <div style={{alignSelf: 'center', marginLeft: '4px'}}>
                        <Avatar {...avatar} size='32px' />
                    </div>
                }
                <Styles.InputText
                    ref={refInput}
                    onFocus={() => {
                        setFocus(true)
                        setIsActiveEdit(true)
                    }}
                    onBlur={() => {
                        setFocus(false)
                    }}
                    onChange={(e) => setStringValueTextArea(e.target.value)}
                    value={stringValueTextArea}
                    placeholder={!isActiveEdit ? placeholder : ''}
                    maxLength={limit+1}
                    disabled={disabled}
                    isError={isErrorManyChars}
                />
                { isActiveEdit && 
                    <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '100%'}}>
                        <Styles.TextLimitTx>
                            {limit - remain}/{limit}
                        </Styles.TextLimitTx>
                        <EmojiPicker
                            isOpenPicker={isOpenPicker}
                            setIsOpenPicker={setIsOpenPicker}
                            onEmojiSelect={(emoji) => onEmojiClick(emoji)}
                            configPicker={{
                                title: 'FRST FALCONI',
                                perLine: 8,
                                sheetSize: 6,
                                language: 'pt',
                                emojiSize: 20
                            }}
                            styles={{width:'318px'}}
                        />
                    </div>
                }
            </Styles.InputWrapper>
            {isErrorManyChars &&
            <Styles.AlertManyChars>
                <AlertCicle fill='#923534'/>
                {labels?.errorManyChars}
            </Styles.AlertManyChars>}
            { isActiveEdit  && <>            
                <Styles.WrapperBtn>
                    <MiniButton 
                        label={labels?.cancel}
                        variant='secondary'
                        onClick={(e) => onClickCancel()}
                        disabled={false} 
                    />
                    <div style={{marginLeft: '8px', marginRight: '8px'}}>
                        {labels?.or}
                    </div>
                    <MiniButton 
                        label={ stringValueTextArea?.length > 0 ? labels?.save : labels?.publish}
                        variant='primary'
                        onClick={() => {
                            if(stringValueTextArea?.length > 0 && !isErrorManyChars) onClickPublish(stringValueTextArea)
                        }}
                        disabled={!(stringValueTextArea?.length > 0) || isErrorManyChars} 
                    />
                </Styles.WrapperBtn>
            </> }
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
        if(pos[0] != pos[1]) { // Cursor in multiple chars selected
            newPos = pos[0]   + (lenghtEmoji ? lenghtEmoji : 0);
        } else { // Cursor text in specific point
            newPos = pos[1]  + (lenghtEmoji ? lenghtEmoji : 0);
        }
        refInput.current.setSelectionRange(newPos, newPos)
    }
}