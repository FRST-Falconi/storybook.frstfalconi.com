import React, { useState } from 'react'
import '../../shared/global.css'
import { ThemeProvider } from 'styled-components'
import { FRSTTheme } from '../../theme'
import * as Styles from './speechBubbleStyles'
import { ISpeehBubble } from './speechBubble';

export default function SpeechBubble(props: ISpeehBubble) {
    return (
         <ThemeProvider theme={FRSTTheme}>
            <Styles.SpeechBubbleWrapper
                className={props.className}
                height={props.height}
                width={props.width}
            >
                <Styles.Flap 
                    highlight={props.highlight} 
                    flap={props.flap} 
                /> 
                <Styles.SpeechBubble 
                    highlight={props.highlight}
                    flap={props.flap} 
                >
                    { props.children }
                </Styles.SpeechBubble>
            </Styles.SpeechBubbleWrapper>
         </ThemeProvider>  
    )
}