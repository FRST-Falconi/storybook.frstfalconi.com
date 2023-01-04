import styled from "styled-components"

export const notificationContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    border-radius: 8px;
    width: 375px;
    height: 412px;
    overflow: hidden;
    background-color: ${({theme}) => theme.colors.shadeWhite};
`

export const notificationContainerMobile = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    width: 100%;
    height: 100%;
    overflow: hidden;
    border-top: 1px solid ${({theme}) => theme.colors.borderPrimary};
    background-color: ${({theme}) => theme.colors.shadeWhite};
`

export const notificationHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px 16px;
    border-bottom: 1px solid ${({theme}) => theme.colors.borderPrimary};
    width: 100%;
`

export const notificationCardList = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
`

export const emptyState = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
`

export const emptyStateInfo = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 24px;

    text-align: center;
    font-family: 'PT Sans';
    font-size: 16px;
    font-weight: 700;
    color: ${({theme}) => theme.colors.neutralsGrey3};
`