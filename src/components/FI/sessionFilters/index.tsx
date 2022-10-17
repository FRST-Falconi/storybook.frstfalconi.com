import '../../../shared/global.css'
import { ThemeProvider } from 'styled-components'
import { FRSTTheme } from '../../../theme'
import * as Styles from './sessionFiltersStyle'
import { ISessionFilters } from './sessionFilters'
import { useState } from 'react'
import * as Icons from '../../../shared/icons'

export default function SessionFilters(props: ISessionFilters) {
      
    return (
        <ThemeProvider theme={FRSTTheme}>
           { props.variant === 'buttonMyBusiness' ?
                <Styles.ButtonSessionFilters onClick={props.handleClick}>                    
                   {props.startIcon}                                    
                   {props.label}
                </Styles.ButtonSessionFilters>  
            :  props.variant === 'buttonMission' ?
                <Styles.ButtonSessionFilters onClick={props.handleClick}>                    
                    {props.startIcon}                                        
                    {props.label}
                </Styles.ButtonSessionFilters> 
            : props.variant ===  'buttonLamp' ?
                <Styles.ButtonSessionFilters onClick={props.handleClick}>                    
                    {props.startIcon}                                        
                    {props.label}
                </Styles.ButtonSessionFilters>
            : null
            }
        </ThemeProvider>
    );
}