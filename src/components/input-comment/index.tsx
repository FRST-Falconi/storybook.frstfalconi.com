import React,{ useEffect, useState }  from 'react'
import '../../shared/global.css'
import { ThemeProvider } from 'styled-components'
import { FRSTTheme } from '../../theme'
import * as Styles from './inputCommentStyles'
import { IInputComment } from './inputComment'

import { SmileOutlined } from '@shared/icons'

import { randID } from './inputComment.utils'

export default function Avatar({ placeholder, value, onChange, remain, limit, hasEmoji, showCharacterCounter, IDInput }: IInputComment) {
    const [ focus, setFocus ] = useState(false)
    const [ heightTextArea, setHeightTextArea ] = useState('')
    const [ forceResetHeightTextArea, setForceResetHeightTextArea] = useState(0)

    const [ iDInputComment , setIDInputComment ] = 
            useState(IDInput ? IDInput : `InputComment-${randID()}`);

    useEffect(() => {
        let tx = document.getElementById(iDInputComment)
        setHeightTextArea(tx.scrollHeight + 'px')
    }, [forceResetHeightTextArea])

    function inputInChanging(e: any) {
        setHeightTextArea('20px')
        setForceResetHeightTextArea(Math.random())
        onChange(e);
    }
    
    return (
        <ThemeProvider theme={FRSTTheme}>
            <Styles.InputWrapper focus={focus}>
                <Styles.InputText
                    id={iDInputComment}
                    height= {heightTextArea}
                    onFocus={() => setFocus(true)}
                    onBlur={() => setFocus(false)}
                    onChange={inputInChanging}
                    value={value}
                    placeholder={placeholder}
                />
                { hasEmoji && 
                    <Styles.SmileIcon>
                        <SmileOutlined fill={'#757575'}/>
                    </Styles.SmileIcon>
                }
            </Styles.InputWrapper>
            { showCharacterCounter &&
                <Styles.HelperText>
                    {remain}/{limit}
                </Styles.HelperText>
            }
        </ThemeProvider>
    )
}