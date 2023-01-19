import styled, { css } from "styled-components";

interface buttonProps{
    selected: boolean
    disabled: boolean
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

export const buttonPage = styled.div<buttonProps>`
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 40px;
    height: 40px;

    padding: 12px;
    border-radius: 6px;
    cursor: pointer;

    user-select: none;
    font-family: 'PT Sans';
    font-size: 16px;
    font-weight: 700;
    color: ${(props) => props.selected ? props.theme.colors.shadeWhite : props.theme.colors.neutralsGrey1};
    background-color: ${(props) => props.selected ? props.theme.colors.primary1 : props.theme.colors.neutralsGrey6};
    
    ${(props) => !props.disabled && css`
        &:hover{
            color: ${({theme}) => theme.colors.shadeWhite};
            background-color: ${({theme}) => theme.colors.primary3};
        }
    `};

    ${(props) => props.disabled && css`
        color: ${({ theme }) => theme.colors.linkDisabled};
        cursor: not-allowed
    `};
    
`