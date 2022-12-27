import '../../shared/global.css'
import { ThemeProvider } from 'styled-components'
import { FRSTTheme } from '../../theme'
import * as Styles from './buttonStyle'

type enumVariant = 'primary' | 'secondary' | 'link' | 'expandedPrimary' | 'expandedSecondary' 
type enumType = 'group' | null

interface buttonProps {
    variant?: enumVariant;
    label?: string,
    disabled?: boolean,
    startIcon?: any,
    endIcon?: any,
    sizeIcon?: string,
    handleClick?: (e: any) => void,
    type?: enumType,
    value?: any,
    active?: boolean
    style?: React.CSSProperties,
    length?: number
}

export default function Button({
    variant,
    label,
    sizeIcon,
    disabled,
    startIcon,
    endIcon,
    handleClick,
    type,
    active,
    style,
    value,
    length
}: buttonProps) {
    return (
        <ThemeProvider theme={{...FRSTTheme, type: type }}>
            { startIcon ?
                (variant === 'link') ?
                    <Styles.LinkButtonStartIcon style={{...style}} disabled={disabled} onClick={handleClick} sizeIcon={sizeIcon}>
                        {startIcon}
                        {label}                        
                    </Styles.LinkButtonStartIcon>
                :
                    <Styles.ButtonStartIcon style={{...style}} variant={variant} disabled={disabled} onClick={handleClick} sizeIcon={sizeIcon}>
                        {startIcon}
                        {label}
                    </Styles.ButtonStartIcon>
            : endIcon ?
                (variant === 'link') ?
                    <Styles.LinkButtonEndIcon style={{...style}} disabled={disabled} onClick={handleClick} sizeIcon={sizeIcon}>
                        {label} 
                        {endIcon}                       
                    </Styles.LinkButtonEndIcon>
                :
                    <Styles.ButtonEndIcon style={{...style}} variant={variant} disabled={disabled} onClick={handleClick} sizeIcon={sizeIcon}>
                        {label}
                        {endIcon}
                    </Styles.ButtonEndIcon>
            :
                (variant === 'link') ?
                    <Styles.LinkButton style={{...style}} disabled={disabled} onClick={handleClick}>
                        {label}                       
                    </Styles.LinkButton>
                :
                    <Styles.Button style={{...style}} length={length} active={active} value={value} variant={variant} disabled={disabled} onClick={handleClick}>
                        {label}
                    </Styles.Button>
                    
            }

        </ThemeProvider>
    );
}