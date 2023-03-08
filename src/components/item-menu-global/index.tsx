
import React,{ useState, useEffect } from 'react'
import '../../shared/global.css'
import { ThemeProvider } from 'styled-components'
import { FRSTTheme } from '../../theme'
import * as Styles from './itemMenuGlobalStyles'
import { IItemMenuGlobal } from './itemMenuGlobal'

import { FRSTLogo } from '@shared/icons'

export default function ItemGlobalMenu({ variant, type, label, onClick, wrapText, pressed, style, icon}: IItemMenuGlobal) {
    return (
        <ThemeProvider theme={FRSTTheme}>
            <Styles.Wrapper 
                variant={variant}
                pressed={pressed}
                typeItem={type} 
                wrapText={wrapText} 
                style={{...style}} 
                onClick={(e) => onClick(e)}
            >
                {icon}
                {label}
            </Styles.Wrapper>
        </ThemeProvider>
    )
}