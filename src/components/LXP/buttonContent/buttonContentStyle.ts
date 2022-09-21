import styled, { css } from 'styled-components'

const variantStyles = (variant = 'contained') =>
  ({
    content: css`
        background-color: ${({ theme }) => theme.colors.shadeWhite};
        color: ${({ theme }) => theme.colors.shadeBlack};
        border: 1px solid ${({ theme }) => theme.colors.neutralsGrey5};
        box-shadow: 0px 5px 10px -15px rgba(211, 211, 211, 0.6);

        &:active {
            color: ${({ theme }) => theme.colors.neutralsGrey2};
            border: 1px solid ${({ theme }) => theme.colors.neutralsGrey2};
            box-shadow: none;
        }

        &:focus {
            border: 1px solid ${({ theme }) => theme.colors.neutralsGrey5} ;
            -webkit-background-clip: padding-box;
            background-clip: padding-box;
        }
    `    
  }[variant]);

export const ButtonStartIcon = styled.button<{ variant: string }>`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: start;
    padding: 8px 20px;
    width: 386px;
    height: 64px;
    border: none;
    cursor: pointer;
    border-radius: 8px;
    box-sizing: border-box;
    transition: all 0.2s ease-in-out;
    font-family: 'PT Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 21px;
    box-shadow: none;    

    & > svg {        
        height: 40px;
        width: 40px;
        margin-right: 8px;        
    }

    ${({ variant }) => variantStyles(variant)}
`;
