import styled, { css } from 'styled-components'

interface TextFieldProps {
    type?: string,
    as?: string,    
}

const placeholderStyle = (color: string) => css`
    ::-webkit-input-placeholder {
        color: ${({ theme }) => theme.colors[color]};
    }

    ::-moz-placeholder {
        color: ${({ theme }) => theme.colors[color]};
    }

    :-ms-input-placeholder
        color: ${({ theme }) => theme.colors[color]};
    }

    :-moz-placeholder
        color: ${({ theme }) => theme.colors[color]};
    }
`

export const TextFieldContainer = styled.div<TextFieldProps>`
    width: ${props => props.theme.width || '100%'};
    height: 48px;
    background: ${({ theme }) => theme.colors.neutralsGrey6};
    border: 1px solid ${({ theme }) => theme.colors.neutralsGrey5};
    box-sizing: border-box;
    border-radius: 8px;
    outline: none;
    transition: all 0.2s linear;
    padding-right: 16px;
    margin: 8px 0;
    display: flex;
    align-items: center;

    ${ props => props.theme.multiline && css`
        width: ${props => props.theme.width || '100%'};
        height: ${props => props.theme.height || '100%'};
        min-height: ${props => props.theme.height || '100%'};
        display: block;
        padding: 0;
        overflow: hidden;
    `}


    ${ props => props.theme.hovered && css`
        border: 1px solid ${({ theme }) => theme.colors.linkDefaultOnfocus};
    `}

    ${ props => props.theme.focused && css`
        box-shadow: 0px 0px 0px 1px rgba(6, 69, 173, 0.4);
        border: 1px solid ${({ theme }) => theme.colors.linkDefaultOnfocus};
    `}

    ${ props => props.theme.disabled && css`
        background: ${({ theme }) => theme.colors.neutralsGrey7};
        border: 1px solid ${({ theme }) => theme.colors.neutralsGrey5};
    `}

    ${ props => props.theme.error && css`
        box-shadow: none;
        border: 1px solid ${({ theme }) => theme.colors.messageError1};
        color: ${({ theme }) => theme.colors.neutralsGrey3};
    `}

    span { 
        display: flex;
        align-items: center;
        justify-content: center;
    }
`

export const TextField = styled.input.attrs<TextFieldProps>(({ type, as }) => ({
    type: type || 'text',
    as: as || 'input'
}))<{ as: string }>`
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
    color: ${({ theme }) => theme.colors.neutralsGrey1};

    ${placeholderStyle('neutralsGrey3')}


    ${({ as }) => as === 'textarea' && css`
        height: ${props => props.theme.height || '100%'};
        resize: none;
        overflow: auto;
        min-height: 100%;
    `}
    
    ${ props => props.theme.disabled && css`
        color: ${({ theme }) => theme.colors.neutralsGrey4};
        ${placeholderStyle('neutralsGrey4')}
    `}

`

export const Label = styled.label`
    font-family: 'PT Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 21px;
    color: ${({ theme }) => theme.colors.neutralsGrey1};

    ${ props => props.theme.hovered && css`
        color: ${({ theme }) => theme.colors.linkOnfocus};
    `}

    ${ props => props.theme.focused && css`
        color: ${({ theme }) => theme.colors.linkOnfocus};
    `}

    ${ props => props.theme.disabled && css`
        color: ${({ theme }) => theme.colors.neutralsGrey3};
    `}

    ${ props => props.theme.error && css`
        color: ${({ theme }) => theme.colors.messageError1};
    `}
`

export const HelperText = styled.span`
    font-family: 'Work Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    color: ${({ theme }) => theme.colors.neutralsGrey3};

    ${ props => props.theme.error && css`
        color: ${({ theme }) => theme.colors.messageError1};
    `}
`

export const InputIconButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    min-width: 40px;
    min-height: 40px;
    margin-right: -10px;
    background-color: transparent;
    border: none;
    border-radius: 50%;
    outline: none;
    transition: all 0.1s linear;
    cursor: pointer;
`

export const StartIcon = styled.span`
    margin-left: 16px;
`