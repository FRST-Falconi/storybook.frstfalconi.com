import '../../../shared/global.css'
import { ThemeProvider } from 'styled-components'
import { FRSTTheme } from '../../../theme'
import * as Styles from './tooltipStyle'

export default function Tooltip(props) {
    return (
        <ThemeProvider theme={FRSTTheme}>
        <Styles.Tooltip position={props.position}>
            {props?.children}
            <Styles.Tooltiptext 
                id="tooltipinfo"
                position={props.position}
                customWidth={props?.customWidth ? props?.customWidth : '156px'}
                customMarginLeft={props?.customMarginLeft ? props?.customMarginLeft : '-70px'}
            >
                {props?.textTooltip}
            </Styles.Tooltiptext>
        </Styles.Tooltip>
        </ThemeProvider>
    )
}