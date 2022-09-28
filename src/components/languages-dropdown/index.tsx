
import React,{ useState, useEffect } from 'react'
import '../../shared/global.css'
import { ThemeProvider } from 'styled-components'
import { FRSTTheme } from '../../theme'
import * as Styles from './languagesDropdownStyles'
import { ILanguagesDropdown } from './languagesDropdown'

import { FRSTLogo } from '@shared/icons'

export default function LanguagesDropdown({ variant, languages, selected, onSelect, style, distanceBtnDrop}: ILanguagesDropdown) {
    const imgES = 'https://i.gyazo.com/1cfa904ea1d492ace9dc67c2a37a10e4.png'
    const imgBR = 'https://i.gyazo.com/ee7e65d12345200b8c3dd12670f85881.png'
    const imgEN = 'https://i.gyazo.com/06a0ea969c48c12589d5d5565cf834df.png'
    
    const [ isOpenDrop, setIsOpenDrop ] = useState(false);
    const [ activeArea, setActiveArea ] = useState(false);

    const getImgToLanguageSelected = () => {
        switch(selected) {
            case 'pt': return imgBR;
            case 'en': return imgEN;
            case 'es': return imgES;
        }
    }
    
    useEffect(() => {
        const checksAnyClickOnScreen = () => {
            if(isOpenDrop) {
                document.body.removeEventListener("click",  checksAnyClickOnScreen, false);
                setIsOpenDrop(false);
            }
        }
        
        if(isOpenDrop) {
            (document.body.addEventListener("click",  checksAnyClickOnScreen, false));
        }
    }, [isOpenDrop]);

    const handleChangeSelect = (value) => {
        onSelect(value)
        setIsOpenDrop(false)
        setActiveArea(false)
    }

    return (
        <ThemeProvider theme={FRSTTheme}>
            <Styles.Wrapper 
                onClick={() => setIsOpenDrop(!isOpenDrop)}
                onBlur={() => setIsOpenDrop(activeArea)}
                variant={variant} 
                style={{...style}}
            >
                <Styles.Image 
                    src={getImgToLanguageSelected()}
                    style={{padding: '10px'}}
                />

            <Styles.WrapperDrop variant={variant} isVisible={isOpenDrop}
                onMouseOver={() => setActiveArea(true)}
                onMouseOut={() => setActiveArea(false)}
                style={{marginTop: distanceBtnDrop ? distanceBtnDrop : '45px'}}
            >
                {isOpenDrop && languages && languages.length > 0 && languages?.map((item, index) => {
                    return( <div key={index}>
                        { item == 'pt' ?
                            <Styles.Image key={index} onClick={() => handleChangeSelect('pt')} src={imgBR} 
                                style={{padding: '9px', paddingTop: '6px', paddingBottom: '6px'}}
                            />
                        : item == 'es' ?
                            <Styles.Image key={index} onClick={() => handleChangeSelect('en')} src={imgEN} 
                                style={{padding: '9px', paddingTop: '6px', paddingBottom: '6px'}}
                            />
                        : item == 'en' &&
                            <Styles.Image key={index} onClick={() => handleChangeSelect('es')} src={imgES} 
                                style={{padding: '9px', paddingTop: '6px', paddingBottom: '6px'}}
                            />
                        }
                    </div>)
                    })
                }
            </Styles.WrapperDrop> 
            </Styles.Wrapper>
            {/* {isOpenDrop && languages && languages.length > 0 && languages.map} */}
        </ThemeProvider>
    )
}