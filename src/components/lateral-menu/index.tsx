import '../../shared/global.css'
import { ThemeProvider } from 'styled-components'
import { FRSTTheme } from '../../theme'
import * as Styles from './lateralMenuStyles'
import { ILateralMenu } from './lateralMenu'

export default function LateralMenu({ size, src, alt, className, disabled }: ILateralMenu) {
    return (
        <ThemeProvider theme={FRSTTheme}>

        </ThemeProvider>
    )
}
