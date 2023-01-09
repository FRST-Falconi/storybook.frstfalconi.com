import '../../../shared/global.css'
import { ThemeProvider } from 'styled-components'
import { FRSTTheme } from '../../../theme'
import * as Styles from './tooltipStyle'

export default function Tooltip(props) {
    return (
        <ThemeProvider theme={FRSTTheme}>
        <Styles.Tooltip position={props.position}>
            {props?.children}
            <Styles.Tooltiptext id="tooltipinfo" position={props.position}>{props?.textTooltip}</Styles.Tooltiptext>
        </Styles.Tooltip>
        </ThemeProvider>
    )
}