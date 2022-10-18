import '../../../shared/global.css'
import { FRSTTheme } from '../../../theme'
import * as Styles from './sessionFiltersStyle'
import * as Icons from '../../../shared/icons'
import { ThemeProvider } from 'styled-components'
import React from 'react'

type enumVariant = 'myBusiness' | 'mission' |  'trail'

interface IFilterButton{
    /**
     * @prop {string} variant: As variants dos botões dos filtros:(myBusiness, mission, trail)
     */  
    variant: enumVariant
    label: string
    id: string
    handleClick ?: () => void
}

export default function FilterButton(props: IFilterButton) {
    return (
        <ThemeProvider theme={FRSTTheme}>
           { props.variant === 'myBusiness' ?
                <Styles.ButtonSessionFilters onClick={props.handleClick}>                    
                   <Icons.Handshake />                                    
                   {props.label}
                </Styles.ButtonSessionFilters>  
            :  props.variant === 'mission' ?
                <Styles.ButtonSessionFilters onClick={props.handleClick}>                    
                    <Icons.Mission />                                        
                    {props.label}
                </Styles.ButtonSessionFilters> 
            : props.variant ===  'trail' ?
                <Styles.ButtonSessionFilters onClick={props.handleClick}>                    
                    <Icons.Lamp />                                        
                    {props.label}
                </Styles.ButtonSessionFilters>
            : null
            }
        </ThemeProvider>
    );
}