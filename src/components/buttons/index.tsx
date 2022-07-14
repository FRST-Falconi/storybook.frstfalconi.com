import '../../shared/global.css'
import { ThemeProvider } from 'styled-components'
import { FRSTTheme } from '../../theme'
import * as Styles from './buttonStyle'

type enumVariant = 'primary' | 'secondary' | 'link' | 'third'
interface buttonProps {
    variant?: enumVariant;
    label?: string,
    disabled?: boolean,
    startIcon?: any,
    endIcon?: any,
    handleClick?: () => void,
}

export default function Button({ variant, label, disabled, startIcon, endIcon, handleClick }: buttonProps) {
    return (
        <ThemeProvider theme={FRSTTheme}>
            { startIcon ?
                (variant === 'link') ?
                    <Styles.LinkButtonStartIcon disabled={disabled} onClick={handleClick}>
                        {startIcon}
                        {label}                        
                    </Styles.LinkButtonStartIcon>
                :
                    <Styles.ButtonStartIcon variant={variant} disabled={disabled} onClick={handleClick}>
                        {startIcon}
                        {label}
                    </Styles.ButtonStartIcon>
            : endIcon ?
                (variant === 'link') ?
                    <Styles.LinkButtonEndIcon disabled={disabled} onClick={handleClick}>
                        {label} 
                        {endIcon}                       
                    </Styles.LinkButtonEndIcon>
                :
                    <Styles.ButtonEndIcon variant={variant} disabled={disabled} onClick={handleClick}>
                        {label}
                        {endIcon}
                    </Styles.ButtonEndIcon>
            :
                (variant === 'link') ?
                    <Styles.LinkButton disabled={disabled} onClick={handleClick}>
                        {label}                       
                    </Styles.LinkButton>
                :
                    <Styles.Button variant={variant} disabled={disabled} onClick={handleClick}>
                        {label}
                    </Styles.Button>
            }

        </ThemeProvider>
    );
}