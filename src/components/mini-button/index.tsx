import React, { useEffect, useState } from 'react'
import '../../shared/global.css'
import { ThemeProvider } from 'styled-components'
import { FRSTTheme } from '../../theme'
import * as Styles from './miniButtonStyle'

import { IMiniButton } from './miniButton'

export default function MiniButton({
    variant, 
    label, 
    disabled, 
    onClick, 
    styles 
    }: IMiniButton) {

    return (
        <ThemeProvider theme={{...FRSTTheme }}>
            <Styles.Button
                onClick={(e) => !disabled && onClick(e)}
                disabled={disabled}
                variant={variant}
                style={{...styles}}
            >
                {label}
            </Styles.Button>
        </ThemeProvider>
    );
}
