import React, { useEffect, useState } from 'react'
import '../../shared/global.css'
import { ThemeProvider } from 'styled-components'
import { FRSTTheme } from '../../theme'
import * as Styles from './expandButtonStyle'

import { IExpandButton } from './expandButton'

export default function ExpandButton( {
    label, 
    disabled, 
    onClick, 
    styles,
    startIcon
    }: IExpandButton) {

    const [actionArea, setActionArea] = useState(false);
    const [timeoutId, setTimeoutId] = useState(null);

    return (
        <ThemeProvider theme={{...FRSTTheme }}>
            <Styles.Button
                onClick={(e) => !disabled && onClick(e)}
                disabled={disabled}
                style={{...styles}}
                onMouseOut={() => {
                    clearTimeout(timeoutId); // Cancela o timeout anterior
                    const newTimeoutId = setTimeout(() => {
                      setActionArea(false);
                    }, 5000);
                    setTimeoutId(newTimeoutId); // Armazena o ID do novo timeout
                  }}
                  onMouseOver={() => {
                    clearTimeout(timeoutId); // Cancela o timeout anterior
                    setActionArea(true);
                  }}
            >   
                <div style={{width: '20px'}}>
                    {startIcon}
                </div>
                <Styles.Label active={actionArea}>
                    { label }
                </Styles.Label>
            </Styles.Button>
        </ThemeProvider>
    );
}
