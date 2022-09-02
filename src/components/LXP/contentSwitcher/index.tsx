import '../../shared/global.css'
import { ThemeProvider } from 'styled-components'
import { FRSTTheme } from '../../../theme'
import * as Styles from './contentSwitcherStyle'
import { IcontentSwitcher } from './contentSwitcher'
import { useState } from 'react'
import {Noun} from '@shared/icons'

export default function ContentSwitcher({ label, handleClick, style}: IcontentSwitcher) {
    const [isClicked, setIsClicked] = useState(false)
    return (
        <ThemeProvider theme={FRSTTheme}>
            <Styles.Container style={{...style}}  onClick={()=>{
                    setIsClicked(true)
                    handleClick
                }}>
                {!isClicked ?
                    (<Styles.ContentSwitcher >
                        <Noun />
                        {label}
                    </Styles.ContentSwitcher>)
                    :
                    <Styles.ContentSwitcherSelected>
                        <Noun fill={'#fff'} /> 
                        {label} 
                    </Styles.ContentSwitcherSelected>
                }
            </Styles.Container>
        </ThemeProvider>
    );
}