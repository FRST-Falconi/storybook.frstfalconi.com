import styled, { css } from 'styled-components'


interface IButton {
    disabled?: boolean
}

export const Button = styled.div<IButton>`
    font-family: 'PT Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    width: fit-content;
    color: ${({theme, disabled}) => disabled ? theme.colors.borderPrimary : theme.colors.neutralsGrey2};
    cursor: pointer;
    user-select:none;
    gap: 9px;
    white-space: nowrap;
    svg {
        path {
            stroke: ${({theme, disabled}) => disabled ? theme.colors.borderPrimary : theme.colors.neutralsGrey2};
        }
    }       

    &:hover {
        color: ${({theme, disabled}) => disabled ? theme.colors.borderPrimary : theme.colors.messageError1};
        svg {
            path {
                stroke: ${({theme, disabled}) => disabled ? theme.colors.borderPrimary : theme.colors.messageError1};
            }
        }
    }
    &:active {
        color: ${({theme, disabled}) => disabled ? theme.colors.borderPrimary : theme.colors.secondary5};
        text-decoration: underline;
        svg {
            path {
                stroke: ${({theme, disabled}) => disabled ? theme.colors.borderPrimary : theme.colors.secondary5};
            }
        }
    }
    display: flex;
    align-items: center;
`


export const Label = styled.div<{active}>`
    width: ${({active}) => active ? '100%': '0px'};
    overflow: hidden;
    white-space: nowrap;
    transition: width 0.5s ease-in-out;
`