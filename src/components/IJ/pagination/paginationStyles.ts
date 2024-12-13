import styled, { css } from "styled-components";

interface ButtonProps{
    selected: boolean
    disabled: boolean
    backgroundColor?: string;
}

export const containerPagination = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
`

export const contentPagination = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    padding-bottom: 12px;
`

export const pageButtonList = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: row;
    gap: 8px;
`

export const ButtonPage = styled.div<ButtonProps>`
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 40px;
    height: 40px;
    padding: 12px;
    border-radius: 6px;
    cursor: pointer;

    user-select: none;
    font-family: 'PT Sans', sans-serif;
    font-size: 16px;
    font-weight: 700;

    color: ${({ selected, theme }) => 
        selected ? theme.colors.shadeWhite : theme.colors.neutralsGrey1};

    background-color: ${({ selected, theme, backgroundColor }) => 
        selected 
            ? (backgroundColor || theme.colors.primary1) 
            : (backgroundColor || theme.colors.neutralsGrey6)};

    ${({ disabled, theme }) =>
        !disabled &&
        css`
            &:hover {
                color: ${theme.colors.shadeWhite};
                background-color: ${theme.colors.primary3};
            }
        `}
    
    ${({ disabled, theme }) =>
        disabled &&
        css`
            color: ${theme.colors.linkDisabled};
            cursor: not-allowed;
        `}
`;