import styled from "styled-components";

export const notificationContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    width: 375px;
    height: auto;
    padding: 16px;
    gap: 16px;
    cursor: pointer;
`

export const notificationInfo = styled.div`
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
`

export const notificationDescription = styled.div`
    font-family: 'PT Sans';
    font-size: 16px;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.selectItens};
`

export const notificationDate = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
    margin-top: 8px;

    font-family: 'PT Sans';
    font-size: 14px;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.neutralsGrey5};
`

export const PopOverVisitProfile = styled.div`
    display: none;
    position: absolute;
    border: 1px solid black;
    background-color: #fff;
    padding: 10px;
    z-index: 1000;
`