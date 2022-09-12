import styled, { css } from 'styled-components'

const variantStyles = (variant = 'contained') =>
  ({
    content: css`
       //background-color: transparent;
        background-color: #FFFFFF;

        color: ${({ theme }) => theme.colors.neutralsGrey4};
        border: 1px solid ${({ theme }) => theme.colors.neutralsGrey4};

        &:hover {
            color: ${({ theme }) => theme.colors.neutralsGrey2};
            border: 5px solid ${({ theme }) => theme.colors.neutralsGrey2};
        }

        &:active {
            color: ${({ theme }) => theme.colors.neutralsGrey2};
            border: 1px solid ${({ theme }) => theme.colors.neutralsGrey2};
        }

        &:focus {
            border: 5px solid rgba(211,211,211,0.6);
            -webkit-background-clip: padding-box;
            background-clip: padding-box;
        }

        &:disabled {
            color: ${({ theme }) => theme.colors.neutralsGrey2};
            border: 1px solid ${({ theme }) => theme.colors.neutralsGrey2};
            cursor: not-allowed;
            pointer-events: none;
        }
    `    
  }[variant]);

export const ButtonStartIcon = styled.button<{ variant: string }>`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: start;
    padding: 9px 16px;
    width: 386px;
    height: 64px;
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
        height: 40px;
        width: 40px;
        margin-right: 21px;        
    }

    ${({ variant }) => variantStyles(variant)}
`;
