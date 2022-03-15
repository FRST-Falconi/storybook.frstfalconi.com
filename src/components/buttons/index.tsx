import '../../shared/global.css'
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
    );
}