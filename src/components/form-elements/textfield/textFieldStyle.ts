import styled, { css } from 'styled-components'

interface TextFieldProps {
    focused?: boolean,
    type?: string,
    as?: string,
}

export const TextFieldContainer = styled.div`
    width: 212px;
    height: 48px;
    background: #EBEBEB;
    border: 1px solid #E0E0E0;
    box-sizing: border-box;
    border-radius: 8px;
    outline: none;
    transition: all 0.2s linear;
    padding-right: 16px;
    margin: 8px 0;
    display: flex;
    align-items: center;

    ${ props => props.theme.hovered && css`
        border: 1px solid #0645AD;
    `}

    ${ props => props.theme.focused && css`
        box-shadow: 0px 0px 2px 2px rgba(6, 69, 173, 0.4);
        border: 1px solid #0645AD;
    `}

    ${ props => props.theme.disabled && css`
        background: #F5F5F5;
        border: 1px solid #E0E0E0;
    `}

    ${ props => props.theme.error && css`
        box-shadow: none;
        border: 1px solid #FF0000;
        color: #9C9C9C;
    `}
`

export const TextField = styled.input.attrs<TextFieldProps>(({ type, as }) => ({
    type: type || 'text',
    as: as || 'input'
}))`
    width: 100%;
    height: 100%;
    padding: 15px 16px;
    border: none;
    background-color: transparent;

    font-family: 'PT Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    color: #222222;
    
    &:placeholder {
        color: #9C9C9C;
    }

    ${ props => props.theme.disabled && css`
        color: #BDBDBD;
        
        &:placeholder {
            color: #BDBDBD;
        }
    `}

`

export const Label = styled.label`
    font-family: 'PT Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 21px;
    color: #222222;

    ${ props => props.theme.hovered && css`
        color: #0645AD;
    `}

    ${ props => props.theme.focused && css`
        color: #0645AD;
    `}

    ${ props => props.theme.disabled && css`
        color: #9C9C9C;
    `}

    ${ props => props.theme.error && css`
        color: #FF0000;
    `}
`

export const HelperText = styled.span`
    font-family: 'Work Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    color: #9C9C9C;

    ${ props => props.theme.error && css`
        color: #FF0000;
    `}
`