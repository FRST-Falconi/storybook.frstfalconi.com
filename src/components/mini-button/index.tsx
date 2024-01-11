import React, { useState } from 'react'
import '../../shared/global.css'
import { ThemeProvider } from 'styled-components'
import { FRSTTheme } from '../../theme'
import * as Styles from './miniButtonStyle'

import { IMiniButton } from './miniButton'
import Tooltip from '@components/DS/tooltip'

export default function MiniButton({
    variant, 
    label, 
    disabled, 
    onClick, 
    styles ,
    active,
    tooltipText,
    }: IMiniButton) {
        const [isTooltipActive, setIsTooltipActive]= useState(false);
        const generateButtonComponent = () => (
          <Styles.Button
            onClick={(e) => !disabled && onClick(e)}
            disabled={disabled}
            variant={variant}
            style={{ ...styles }}
            active={!!active}
            isTooltipActive={isTooltipActive}
          >
            {label}
          </Styles.Button>
        );
      
        return (
          <ThemeProvider theme={{ ...FRSTTheme }}>
            {tooltipText ? (
              <Tooltip
                direction="bottom"
                content={tooltipText}
                trigger="hover"
                width={tooltipText.length > 18 ? "220px" : "100px"}
                height="auto"
                style={{ top: '50px', textAlign: 'center' }}
                setIsActive={setIsTooltipActive}
              >
                {generateButtonComponent()}
              </Tooltip>
            ) : (
              <>{generateButtonComponent()}</>
            )}
          </ThemeProvider>
        );
      }