import { useState } from 'react'
import '../../../shared/global.css'
import * as Styles from './textFieldStyle'
import {  ThemeProvider } from 'styled-components'
import { useTranslation } from 'react-i18next'
import { FRSTTheme } from '../../../theme'

type enumType = 'text' | 'password' | 'email' | 'number' 

export interface TextFieldProps {
    label?: string,
    placeholder?: string,
    helperText?: string,
    endIcon?: any,
    startIcon?: any,
    type?: enumType,
    width?: string,
    height?: string,
    value?: any,
    error?: boolean,
    disabled?: boolean,
    style?: React.CSSProperties,
    id?: string,
    name?: string,
    required?: boolean,
    className?: string,
    multiline?: boolean,
    defaultValue?: string,
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void,
    maxLength?: number
}

export default function TextField(props: TextFieldProps) {
    const [ focus, setFocus ] = useState(false)
    const [ hover, setHover ] = useState(false)
    const [ click, setClick ] = useState(false)
    const [ inputType, setInputType ] = useState(props.type)
    const { t } = useTranslation()

    const handleTogglePasswordVisibility = () => {
        if (inputType === 'password') return setInputType('text')
        setInputType('password')
    }

    const showBorderAfterClick = () => {
        setClick(true)
        setTimeout(() => {
            setClick(false)
        }, 1000)
    }

    return (
        <ThemeProvider theme={{ ...FRSTTheme, focused: focus, disabled: props.disabled, hovered: hover, error: props.error, multiline: props.multiline, width: props.width, height: props.height }}>

            <div style={props.style} className={props.className}>
                <Styles.Label htmlFor={props.id} isClicked={click} >{props.label}</Styles.Label>

                <Styles.TextFieldContainer
                    onMouseEnter={() => setHover(true)}
                    onMouseLeave={() => setHover(false)}
                    onClick={() => showBorderAfterClick()}
                    isClicked={click}
                >
                    {
                        props.startIcon && !props.multiline && (
                            <Styles.StartIcon>{props.startIcon}</Styles.StartIcon>
                        )
                    }
                    <Styles.TextField
                        onFocus={() => setFocus(true)}
                        onBlur={() => setFocus(false)}  
                        
                        id={props.id}
                        placeholder={props.placeholder || `${ t('globals.typeHere') }...`}
                        as={props.multiline ? 'textarea' : 'input'}
                        type={inputType}
                        value={props.value}
                        disabled={props.disabled}
                        onChange={props.onChange}
                        name={props.name}
                        required={props.required}
                        defaultValue={props.defaultValue}
                        maxLength={props.maxLength}
                    />
                    {
                        props.endIcon && !props.multiline && (
                            (props.type === 'password')
                                ? <Styles.InputIconButton onClick={handleTogglePasswordVisibility}>{props.endIcon}</Styles.InputIconButton>
                                : <span>{props.endIcon}</span>
                        )
                    }
                </Styles.TextFieldContainer>
                {
                    props.helperText && <Styles.HelperText>{props.helperText}</Styles.HelperText>
                }
            </div>
        </ThemeProvider>
    );
}
