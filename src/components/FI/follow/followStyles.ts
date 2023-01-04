import styled from "styled-components";

export const followButton = styled.div`
    font-family: 'PT Sans';
    font-size: 16px;
    font-weight: 700;
    color: ${({theme}) => theme.colors.linkOnfocus};

    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: row;
    width: fit-content;

    gap: 8px;
    cursor: pointer;
`

export const followContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    border-radius: 8px;
    padding: 4px;
    background-color: ${({theme}) => theme.colors.shadeWhite};
`

export const followItems = styled.div`
    font-family: 'PT Sans';
    font-size: 16px;
    font-weight: 400;
    color: ${({theme}) => theme.colors.shadeBlack};

    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    padding: 12px;
    width: 100%;
    border-bottom: 1px solid ${({theme}) => theme.colors.borderPrimary};
`