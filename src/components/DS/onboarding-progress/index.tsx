import  React from 'react'
import { FRSTTheme } from '../../../theme'
import { ThemeProvider } from 'styled-components'
import * as Styles from './onboardingProgressStyles'

export default function OnboardingProgress(){
    return(
        <ThemeProvider theme={FRSTTheme}>
        <Styles.CardContainer>
            <p>oi</p>
        </Styles.CardContainer>
        </ThemeProvider>
    )
}