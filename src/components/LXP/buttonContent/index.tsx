import '../../../shared/global.css'
import { ThemeProvider } from 'styled-components'
import { FRSTTheme } from '../../../theme'
import * as Styles from './buttonContentStyle'
import { IButtonContent } from './buttonContent'

export default function ButtonContent({ variant, label, startIcon, style, handleClick }: IButtonContent) {
    return (
        <ThemeProvider theme={FRSTTheme}>
            <Styles.ButtonStartIcon style={{...style}} variant={variant} onClick={handleClick}>
                {startIcon}
                {label}
            </Styles.ButtonStartIcon>
        </ThemeProvider>
    );
}