import React,{useEffect, useState, useRef} from 'react'
import '../../shared/global.css'
import { ThemeProvider } from 'styled-components'
import { FRSTTheme } from '../../theme'

import {EmojiWindow, SmileIcon, ButtonClose} from './emojiPickerStyles'
import data from '@emoji-mart/data'
import { Picker } from 'emoji-mart'

import { SmileOutlined } from '@shared/icons'

// @ts-ignore
import * as de from '@emoji-mart/data/i18n/de.json'
// @ts-ignore
import * as en from '@emoji-mart/data/i18n/en.json'
// @ts-ignore
import * as fr from '@emoji-mart/data/i18n/fr.json'
// @ts-ignore
import * as it from '@emoji-mart/data/i18n/it.json'
// @ts-ignore
import * as pl from '@emoji-mart/data/i18n/pl.json'
// @ts-ignore
import * as pt from '@emoji-mart/data/i18n/pt.json'
// @ts-ignore
import * as ru from '@emoji-mart/data/i18n/ru.json'
// @ts-ignore
import * as zh from '@emoji-mart/data/i18n/zh.json'


export default function EmojiPicker({isOpenPicker, setIsOpenPicker, onEmojiSelect, configPicker}) {
    const ref = useRef()
    
    const [ actionAreaEmojiButton, setActionAreaEmojiButton] = useState(false);
    const [ colorEmojiButton, setColorEmojiButton ] = useState('');
    
    useEffect(() => {
        let title = configPicker.title ? configPicker?.title: 'FRST FALCONI'
        let emojiSize = configPicker?.emojiSize;
        let perLine = configPicker?.perLine;
        let SheetSize = configPicker?.sheetSize;
        let i18n = choseLanguage(configPicker?.language);
        
        // let filteredEmoji = excludeEmojiCode();

      new Picker({title, data, ref, i18n, emojiSize, perLine, SheetSize, onEmojiSelect })
    }, [configPicker?.language])
  
    useEffect(() => {
        (isOpenPicker) ? configsWhenOpenWindowEmoji() : configsWhenCloseWindowEmoji()
        if(isOpenPicker) {
            let myComponent = document.querySelector('em-emoji-picker');
            let myClassElement = myComponent.shadowRoot.querySelector('#nav');
            let myBoryElement = myComponent.shadowRoot.querySelector('#root');
            try{
                //@ts-ignore
                myClassElement.style.paddingRight = '50px';
                //@ts-ignore
                myBoryElement.style.paddingBottom = '100px';
            } catch(e) {}
        }
    }, [isOpenPicker])    


    return   <>
        <ThemeProvider theme={FRSTTheme}>
            <div style={{position: 'relative'}}>
                <EmojiWindow 
                    visible={isOpenPicker} 
                    onMouseOver={() => setActionAreaEmojiButton(true)}
                    onMouseOut={() => setActionAreaEmojiButton(false)}
                >
                    <ButtonClose onClick={() => setIsOpenPicker(false)}>
                        <XIcon/>
                    </ButtonClose>
                    <div ref={ref} />
                </EmojiWindow>
                <SmileIcon 
                    onMouseOver={() => setActionAreaEmojiButton(true)}
                    onMouseOut={() => setActionAreaEmojiButton(false)}
                    onClick={() => {
                        setIsOpenPicker(!isOpenPicker)
                    }}
                >
                    <SmileOutlined fill={colorEmojiButton}/>
                </SmileIcon>
            </div>
        </ThemeProvider>
    </>
    
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
}

function choseLanguage(props: any) { 
    switch(props) {
        case 'de':
            return de;
        case 'en':
            return en;
        case 'fr':
            return fr;
        case 'it':
            return it;
        case 'pl':
            return pl;
        case 'pt':
            return pt;
        case 'ru':
            return ru;
        case 'zh':
            return zh;
        default:
            return en;
    }
}
// https://kapeli.com/cheat_sheets/Emoji.docset/Contents/Resources/Documents/index
function excludeEmojiCode() {
    return ({
        "263A": false
    })
}

function XIcon() {
    return (
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M17 1L1 17" stroke="#BDBDBD" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M1 1L17 17" stroke="#BDBDBD" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    )
}