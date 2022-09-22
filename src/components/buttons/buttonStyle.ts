import styled, { css } from 'styled-components'

export const LinkButton = styled.a<{ disabled: boolean }>`
    border: none;
    text-decoration: none;
    ${({ theme }) => theme.fonts.textMessageComponentsBodyBold}
    color: ${({ theme }) => theme.colors.linkOnfocus};
    cursor: pointer;
    outline: none;
    box-sizing: border-box;
    transition: all 0.2s ease-in-out;
    display: flex;
    align-items: center;

    &:hover { 
        color: ${({ theme }) => theme.colors.linkHover};
    }

    &:active { 
        color: ${({ theme }) => theme.colors.linkPressed};
    }

    &:focus { 
        color: ${({ theme }) => theme.colors.linkOnfocus};
    }

    & > svg {
        margin-right: 12px;
        max-height: 16px;
        height: 100%;
        width: auto;
    }

    ${({ disabled }) => disabled && css`
        pointer-events: none;
        color: ${({ theme }) => theme.colors.neutralsGrey2};
    `}
`
export const LinkButtonStartIcon = styled.a<{ disabled: boolean, sizeIcon: string }>`
    border: none;
    text-decoration: none;
    ${({ theme }) => theme.fonts.textMessageComponentsBodyBold}
    color: ${({ theme }) => theme.colors.linkOnfocus};
    cursor: pointer;
    outline: none;
    box-sizing: border-box;
    transition: all 0.2s ease-in-out;
    display: flex;
    align-items: center;

    &:hover { 
        color: ${({ theme }) => theme.colors.linkHover};
    }

    &:active { 
        color: ${({ theme }) => theme.colors.linkPressed};
    }

    &:focus { 
        color: ${({ theme }) => theme.colors.linkOnfocus};
    }

    & > svg {
        margin-right: 12px;
        max-height: ${({sizeIcon}) => sizeIcon ? sizeIcon: '16px'};
        height: 100%;
        width: auto;
    }

    ${({ disabled }) => disabled && css`
        pointer-events: none;
        color: ${({ theme }) => theme.colors.neutralsGrey2};
    `}
`
export const LinkButtonEndIcon = styled.a<{ disabled: boolean, sizeIcon: string }>`
    border: none;
    text-decoration: none;
    ${({ theme }) => theme.fonts.textMessageComponentsBodyBold}
    color: ${({ theme }) => theme.colors.linkOnfocus};
    cursor: pointer;
    outline: none;
    box-sizing: border-box;
    transition: all 0.2s ease-in-out;
    display: flex;
    align-items: center;

    &:hover { 
        color: ${({ theme }) => theme.colors.linkHover};
    }

    &:active { 
        color: ${({ theme }) => theme.colors.linkPressed};
    }

    &:focus { 
        color: ${({ theme }) => theme.colors.linkOnfocus};
    }

    & > svg {
        margin-left: 12px;
        max-height: ${({sizeIcon}) => sizeIcon ? sizeIcon: '16px'};
        height: 100%;
        width: auto;
    }

    ${({ disabled }) => disabled && css`
        pointer-events: none;
        color: ${({ theme }) => theme.colors.neutralsGrey2};
    `}
`

const variantStyles = (variant = 'contained') =>
  ({
    primary: css`
        background-color: ${({ theme }) => theme.colors.primary1};
        color: ${({ theme }) => theme.colors.shadeWhite};

        &:hover {
            background-color: ${({ theme }) => theme.colors.primary2};
        }

        &:active {
            background-color: ${({ theme }) => theme.colorsprimary3};
        }

        &:focus {
            border: 2px solid ${({ theme }) => theme.colors.primary1}4D;
            -webkit-background-clip: padding-box;
            background-clip: padding-box;
        }

        &:disabled {
            background-color: ${({ theme }) => theme.colors.neutralsGrey2};
            cursor: not-allowed;
            pointer-events: none;
        }
    `,
    secondary: css`
        background-color: transparent;
        color: ${({ theme }) => theme.colors.primary1};
        border: 1px solid ${({ theme }) => theme.colors.primary1};

        &:hover {
            color: ${({ theme }) => theme.colors.primary2};
            border: 1px solid ${({ theme }) => theme.colors.primary2};
        }

        &:active {
            color: ${({ theme }) => theme.colors.primary3};
            border: 1px solid ${({ theme }) => theme.colors.primary3};
        }

        &:focus {
            border: 2px solid ${({ theme }) => theme.colors.primary1}4D;
            -webkit-background-clip: padding-box;
            background-clip: padding-box;
        }

        &:disabled {
            color: ${({ theme }) => theme.colors.neutralsGrey2};
            border: 1px solid ${({ theme }) => theme.colors.neutralsGrey2};
            cursor: not-allowed;
            pointer-events: none;
        }
    `,
    expandedPrimary: css`
        background-color: ${({ theme }) => theme.colors.primary1};
        color: ${({ theme }) => theme.colors.shadeWhite};
        width: 100%;
        &:hover {
            background-color: ${({ theme }) => theme.colors.primary2};
        }

        &:active {
            background-color: ${({ theme }) => theme.colorsprimary3};
        }

        &:focus {
            border: 2px solid ${({ theme }) => theme.colors.primary1}4D;
            -webkit-background-clip: padding-box;
            background-clip: padding-box;
        }

        &:disabled {
            background-color: ${({ theme }) => theme.colors.neutralsGrey2};
            cursor: not-allowed;
            pointer-events: none;
        }
    `,
    expandedSecondary: css`
        background-color: transparent;
        color: ${({ theme }) => theme.colors.primary1};
        border: 1px solid ${({ theme }) => theme.colors.primary1};
        width: 100%;

        &:hover {
            color: ${({ theme }) => theme.colors.primary2};
            border: 1px solid ${({ theme }) => theme.colors.primary2};
        }

        &:active {
            color: ${({ theme }) => theme.colors.primary3};
            border: 1px solid ${({ theme }) => theme.colors.primary3};
        }

        &:focus {
            border: 2px solid ${({ theme }) => theme.colors.primary1}4D;
            -webkit-background-clip: padding-box;
            background-clip: padding-box;
        }

        &:disabled {
            color: ${({ theme }) => theme.colors.neutralsGrey2};
            border: 1px solid ${({ theme }) => theme.colors.neutralsGrey2};
            cursor: not-allowed;
            pointer-events: none;
        }
    `,
    

  }[variant]);

export const Button = styled.button<{ variant: string, active: boolean, length: number }>`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 9px 16px;
    height: 48px;
    border: none;
    cursor: pointer;
    border-radius: 8px;
    box-sizing: border-box;
    transition: all 0.2s ease-in-out;
    font-family: 'Work Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    box-shadow: none;

    ${({ variant }) => variantStyles(variant)}
    
    ${({theme, length}) => theme.type === 'group' && length === 2 && `
        &:first-child {
            border-radius: 4px 0px 0px 4px;
            border-right: 1px solid rgba(255, 255, 255, 0.5) !important;
            border-left: none !important;
        }

        &:last-child {
            border-radius: 0px 4px 4px 0px;
            border: none !important;
        }
    `}

    ${({theme, length}) => theme.type === 'group' && length > 2 && `
        border-radius: 0px;

        border-right: 1px solid rgba(255, 255, 255, 0.5);
        border-left: 1px solid rgba(255, 255, 255, 0.5);
    
        &:focus,
        &:active {
            border-right: 1px solid rgba(255, 255, 255, 0.5) !important;
            border-left: 1px solid rgba(255, 255, 255, 0.5) !important;
        }
        
        &:first-child {
            border-radius: 4px 0px 0px 4px;
            border: none !important;
        }

        &:last-child {
            border-radius: 0px 4px 4px 0px;
            border: none !important;
        }
    `}

    ${({active}) => active === true && css`
        background: #D14211;
    `}
`;
export const ButtonStartIcon = styled.button<{ variant: string, sizeIcon: string }>`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 9px 16px;
    height: 48px;
    border: none;
    cursor: pointer;
    border-radius: 8px;
    box-sizing: border-box;
    transition: all 0.2s ease-in-out;
    font-family: 'Work Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    box-shadow: none;

    & > svg {
        margin-right: 12px;
        max-height: ${({sizeIcon}) => sizeIcon ? sizeIcon: '16px'};
        height: 100%;
        width: auto;
    }

    ${({ variant }) => variantStyles(variant)}
`;
export const ButtonEndIcon = styled.button<{ variant: string, sizeIcon: string }>`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 9px 16px;
    height: 48px;
    border: none;
    cursor: pointer;
    border-radius: 8px;
    box-sizing: border-box;
    transition: all 0.2s ease-in-out;
    font-family: 'Work Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    box-shadow: none;

    & > svg {
        margin-left: 12px;
        max-height: ${({sizeIcon}) => sizeIcon ? sizeIcon: '16px'};
        height: 100%;
        width: auto;
    }

    ${({ variant }) => variantStyles(variant)}
`;