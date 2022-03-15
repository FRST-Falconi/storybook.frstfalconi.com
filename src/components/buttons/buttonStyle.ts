import styled, { css } from 'styled-components'

export const textButton = styled.a<{ disabled: boolean }>`
    border: none;
    text-decoration: none;
    font-family: 'Work Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 21px;
    color: #0645AD;
    cursor: pointer;
    outline: none;
    box-sizing: border-box;
    transition: all 0.2s ease-in-out;
    display: flex;
    align-items: center;

    &:hover { 
        color: #0B0080;
    }

    &:active { 
        color: #663366;
    }

    &:focus { 
        color: #0645AD;
    }

    & > svg {
        margin-right: 12px;
        max-height: 16px;
        height: 100%;
        width: auto;
    }

    ${({ disabled }) => disabled && css`
        pointer-events: none;
        color: #757575;

        & > path {
            fill: #757575;
        }
    `}
`

const variantStyles = (variant = 'contained') =>
  ({
    contained: css`
        background-color: #FF4D0D;
        border: none;
        box-shadow: none;
        color: #fff;
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 19px;

        &:hover {
            background-color: #EE4C15;
        }

        &:active {
            background-color: #D14211;
        }

        &:focus {
            background-color: #FF4D0D;
            border: 2px solid rgba(255, 77, 13, 0.3);
            -webkit-background-clip: padding-box;
            background-clip: padding-box;
        }

        &:disabled {
            background: #757575;
            cursor: not-allowed;
        }
    `,
    outlined: css`
        background-color: transparent;
        border: none;
        box-shadow: none;
        color: #FF4D0D;
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 19px;
        border: 1px solid #FF4D0D;

        &:hover {
            color: #EE4C15;
            border: 1px solid #EE4C15;
        }

        &:active {
            color: #D14211;
            border: 1px solid #D14211;
        }

        &:focus {
            color: #FF4D0D;
            border: 2px solid rgba(255, 77, 13, 0.3);
            -webkit-background-clip: padding-box;
            background-clip: padding-box;
        }

        &:disabled {
            color: #757575;
            border: 1px solid #757575;
            cursor: not-allowed;
        }
    `
  }[variant]);

export const Button = styled.button<{ variant: string }>`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 9px 16px;
    height: 48px;
    border: none;
    cursor: pointer;
    border-radius: 8px;
    font-family: 'Work Sans';
    box-sizing: border-box;
    transition: all 0.2s ease-in-out;

    & > svg {
        margin-right: 12px;
        max-height: 16px;
        height: 100%;
        width: auto;
    }

    ${({ variant }) => variantStyles(variant)}
`;