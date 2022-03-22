import { useState } from 'react'
import '../../../shared/global.css'
import * as Styles from './textFieldStyle'
import {  ThemeProvider } from 'styled-components'

interface TextFieldProps {
    label?: string,
    placeholder?: string,
    helperText?: string,
    endIcon?: any,
    type?: string,
    value?: any,
    error?: boolean,
    disabled?: boolean,
    style?: React.CSSProperties,
    id?: string,
    name?: string,
    required?: boolean,
    className?: string,
    multiline?: boolean,
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void,
}

export default function TextField(props: TextFieldProps) {
    const [ focus, setFocus ] = useState(false)
    const [ hover, setHover ] = useState(false)

    return (
        <ThemeProvider theme={{ focused: focus, disabled: props.disabled, hovered: hover, error: props.error }}>
            <div style={props.style} className={props.className}>
                <Styles.Label htmlFor={props.id} >{props.label}</Styles.Label>

                <Styles.TextFieldContainer
                    onMouseEnter={() => setHover(true)}
                    onMouseLeave={() => setHover(false)}
                >
                    <Styles.TextField
                        onFocus={() => setFocus(true)}
                        onBlur={() => setFocus(false)}

                        id={props.id}
                        placeholder={props.placeholder || 'Type here...'}
                        as={props.multiline ? 'textarea' : 'input'}
                        type={props.type}
                        value={props.value}
                        disabled={props.disabled}
                        onChange={props.onChange}
                        name={props.name}
                        required={props.required}
                    />
                    <span>{props.endIcon}</span>
                </Styles.TextFieldContainer>

                <Styles.HelperText>{props.helperText}</Styles.HelperText>
            </div>
        </ThemeProvider>
    );
}