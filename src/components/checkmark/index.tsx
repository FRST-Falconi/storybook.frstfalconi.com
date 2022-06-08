import React,{useEffect, useState} from 'react'
import '../../shared/global.css'
import { ThemeProvider } from 'styled-components'
import { FRSTTheme } from '../../theme'
import * as Styles from './checkmarkStyles'
import { ICheckmark } from './checkmark'
import { CheckInCicle, CloseInCicle } from '@shared/icons'

export default function Checkmark({ type, subtitle, active, handleClick, className, disabled, styles }: ICheckmark) {
    const [ colorsIcon, setColorsIcon ] = useState({fill:'#fff', stroke:'#2CA92A', variant:'#2CA92A'});

    useEffect(() => {
        (type == 'checked') ?
        (active ?
            setColorsIcon({fill:'#fff', stroke:'#2CA92A', variant:'#2CA92A'}) :
            setColorsIcon({fill:'#2CA92A', stroke:'#2CA92A', variant:''}))
        :
        ( active ?
            setColorsIcon({fill:'#FFF', stroke:'#FF0000', variant:'#FF0000'}) :
            setColorsIcon({fill:'#FF0000', stroke:'#FF0000', variant:''}))
        
        {disabled &&
            setColorsIcon({fill:'#BDBDBD', stroke:'#BDBDBD', variant:''})
        }
    }, [active, type, disabled]);



    return (
        <ThemeProvider theme={FRSTTheme}>
            <div style={{...styles}} className={className} >
                { type == 'checked' ?
                    <>
                        <Styles.ButtonCheckmark
                                onClick={ handleClick } 
                        >
                                <CheckInCicle {...colorsIcon} />
                                <Styles.Subtitle disabled={disabled}>
                                    { subtitle }
                                </Styles.Subtitle>
                        </Styles.ButtonCheckmark>
                    </> 
                    :
                    <>                
                        {
                            type == 'unchecked' &&
                            <Styles.ButtonCheckmark
                                    onClick={ handleClick } 
                            >
                                <CloseInCicle {...colorsIcon}/>
                                <Styles.Subtitle disabled={disabled}>
                                    { subtitle }
                                </Styles.Subtitle>
                            </Styles.ButtonCheckmark>
                        }
                </>
                }
            </div>
        </ThemeProvider>
    )
}
