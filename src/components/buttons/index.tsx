import '../../shared/global.css'
import { ThemeProvider } from 'styled-components'
import { FRSTTheme } from '../../theme'
import * as Styles from './buttonStyle'

interface buttonProps {
    variant?: string;
    label?: string,
    disabled?: boolean,
    startIcon?: any,
    handleClick?: () => void,
}

export default function Button({ variant, label, disabled, startIcon, handleClick }: buttonProps) {
    return (
        <ThemeProvider theme={FRSTTheme}>
            {
                (variant === 'text') ?
                    <Styles.TextButton disabled={disabled} onClick={handleClick}>
                        {startIcon}
                        {label}
                    </Styles.TextButton>
                :
                    <Styles.Button variant={variant} disabled={disabled} onClick={handleClick}>
                        {startIcon}
                        {label}
                    </Styles.Button>
            }
        </ThemeProvider>
    );
}