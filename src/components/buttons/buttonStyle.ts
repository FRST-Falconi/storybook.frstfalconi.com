import styled, { css } from 'styled-components'

export const TextButton = styled.a<{ disabled: boolean }>`
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
        color: ${({ theme }) => theme.colors.neutral.grey2};

        & > path {
            fill: ${({ theme }) => theme.colors.neutral.grey2};
        }
    `}
`

const variantStyles = (variant = 'contained') =>
  ({
    contained: css`
        background-color: ${({ theme }) => theme.colors.primary.primary1};
        color: #fff;

        &:hover {
            background-color: ${({ theme }) => theme.colors.primary.primary2};
        }

        &:active {
            background-color: ${({ theme }) => theme.colors.primary.primary3};
        }

        &:focus {
            border: 2px solid ${({ theme }) => theme.colors.primary.primary1}4D;
            -webkit-background-clip: padding-box;
            background-clip: padding-box;
        }

        &:disabled {
            background: ${({ theme }) => theme.colors.neutral.grey2};
            cursor: not-allowed;
        }
    `,
    outlined: css`
        background-color: transparent;
        color: ${({ theme }) => theme.colors.primary.primary1};
        border: 1px solid ${({ theme }) => theme.colors.primary.primary1};

        &:hover {
            color: ${({ theme }) => theme.colors.primary.primary2};
            border: 1px solid ${({ theme }) => theme.colors.primary.primary2};
        }

        &:active {
            color: ${({ theme }) => theme.colors.primary.primary3};
            border: 1px solid ${({ theme }) => theme.colors.primary.primary3};
        }

        &:focus {
            border: 2px solid ${({ theme }) => theme.colors.primary.primary1}4D;
            -webkit-background-clip: padding-box;
            background-clip: padding-box;
        }

        &:disabled {
            color: ${({ theme }) => theme.colors.neutral.grey2};
            border: 1px solid ${({ theme }) => theme.colors.neutral.grey2};
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
        max-height: 16px;
        height: 100%;
        width: auto;
    }

    ${({ variant }) => variantStyles(variant)}
`;