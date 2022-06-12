// @ts-nocheck
import React,{useEffect, useRef} from 'react'

import data from '@emoji-mart/data'
import { Picker } from 'emoji-mart'

import * as de from '@emoji-mart/data/i18n/de.json'
import * as en from '@emoji-mart/data/i18n/en.json'
import * as fr from '@emoji-mart/data/i18n/fr.json'
import * as it from '@emoji-mart/data/i18n/it.json'
import * as pl from '@emoji-mart/data/i18n/pl.json'
import * as pt from '@emoji-mart/data/i18n/pt.json'
import * as ru from '@emoji-mart/data/i18n/ru.json'
import * as zh from '@emoji-mart/data/i18n/zh.json'

export default function EmojiPicker(props: any) {
    const ref = useRef()
    
    useEffect(() => {
        let i18n = choseLanguage(props.language);

      new Picker({ ...props, data, ref, i18n })
    }, [props.language])
  
    return <div ref={ref} />
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