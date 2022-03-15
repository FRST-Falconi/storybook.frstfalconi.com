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
            <Styles.textButton disabled={disabled} onClick={handleClick}>
                {startIcon}
                {label}
            </Styles.textButton>
        :
            <Styles.Button variant={variant} disabled={disabled} onClick={handleClick}>
                {startIcon}
                {label}
            </Styles.Button>
    );
}